import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import User from './User'
import api from '../api'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'

const Users = ({ users: allUsers, ...rest }) => {
    console.log('user.profession', allUsers)
    const [currentPage, setCurrentPage] = useState(1)
    const [profession, setProfession] = useState()
    const [selectedProf, setSelectedProf] = useState()
    console.log('selectedProf', selectedProf)
    const count = allUsers.length
    const pageSize = 4
    useEffect(() => {
        api.professions
            .fetchAll()
            .then((data) =>
                setProfession(
                    Object.assign(data, {
                        allProfession: { name: 'Все професии' }
                    })
                )
            )
    }, [])

    const handleProfessionSelect = item => {
        // console.log('paginate', item)
        setSelectedProf(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    const filteredUsers = selectedProf && selectedProf._id
        ? allUsers.filter((user) => user.profession === selectedProf)
        : allUsers
    const userCrop = paginate(filteredUsers, currentPage, pageSize)
    return (
        <>
            {profession && (
                <GroupList
                    selectedItem={selectedProf}
                    items={profession}
                    onItemSelect={handleProfessionSelect}
                />
            )}
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    )
}
Users.propTypes = {
    users: PropTypes.array.isRequired
}
export default Users
