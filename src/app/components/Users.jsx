import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import User from './User'
import api from '../api'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'

const Users = ({ users, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [profession, setProfession] = useState()
    const count = users.length
    const pageSize = 4
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data))
    }, [])

    const handleProfessionSelect = (params) => {
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const userCrop = paginate(users, currentPage, pageSize)
    return (
        <>
            {profession && (
                <GroupList
                    items={profession}
                    onItemSelect={handleProfessionSelect}
                    valueProperty='id'
                    contentProperty='name' />
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
