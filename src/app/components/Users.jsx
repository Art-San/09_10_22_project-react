import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Pagination from './Pagination'
import User from './User'
import api from '../api'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'

const Users = ({ users, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [profession] = useState(api.professions.fetchAll())
    const count = users.length
    const pageSize = 4

    const handleProfessionSelect = (params) => {
        console.log('params', params)
    }
    console.log('profession', profession)
    const handlePageChange = (pageIndex) => {
        console.log(pageIndex)
        setCurrentPage(pageIndex)
    }

    const userCrop = paginate(users, currentPage, pageSize)
    return (
        <>
            <GroupList items={profession} onItemSelect={handleProfessionSelect} />
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
