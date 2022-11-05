import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import User from './User'
import api from '../api'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'
import SearchStatus from './SearchStatus'

const Users = ({ users: allUsers, ...rest }) => {
    console.log('user.profession', allUsers)
    const [currentPage, setCurrentPage] = useState(1)
    const [profession, setProfession] = useState()
    const [selectedProf, setSelectedProf] = useState()
    // console.log('selectedProf', selectedProf)
    const pageSize = 2
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }
    // const filteredUsers = selectedProf
    // ? allUsers.filter(
    //     (user) =>
    //         JSON.stringify(user.profession) ===
    //         JSON.stringify(selectedProf)
    // )
    // : allUsers
    const filteredUsers = selectedProf
        ? allUsers.filter((user) => {
            console.log(user.profession)
            console.log(selectedProf)
            console.log(user.profession === selectedProf)
            console.log('=============')
            if (user.profession === selectedProf) return true
            return false
        })
        : allUsers

    const count = filteredUsers.length
    const userCrop = paginate(filteredUsers, currentPage, pageSize)
    const clearFilter = () => {
        setSelectedProf()
    }

    return (
        <>
            <div className="d-flex">
                {profession && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={profession}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
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
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
Users.propTypes = {
    users: PropTypes.array.isRequired
}
export default Users
