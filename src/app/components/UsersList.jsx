import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import api from '../api'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'
import SearchStatus from './SearchStatus'
import UsersTable from './UsersTable'
import _ from 'lodash'
import PropTypes from 'prop-types'
import TextField from './TextField'

const UsersList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [profession, setProfession] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
    const [searchName, setSearchName] = useState('')
    const pageSize = 8

    const [users, setUsers] = useState()
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark }
                }
                return user
            })
        )
        console.log(id)
    }

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf, searchName])

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        setSortBy(item)
    }

    if (users) {
        let filteredUsers
        const search = new RegExp(searchName, 'gi')

        if (searchName) {
            filteredUsers = users.filter((user) => search.test(user.name))
        } else {
            filteredUsers = selectedProf ? users.filter((user) => user.profession._id === selectedProf._id) : users
        }
        const count = filteredUsers.length
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
        const userCrop = paginate(sortedUsers, currentPage, pageSize)
        const clearFilter = () => {
            setSelectedProf()
        }
        const handleSearch = (e) => {
            clearFilter()
            setSearchName(e.target.value)
        }
        // const filteredUsers = selectedProf
        //     ? users.filter(
        //         (user) =>
        //             JSON.stringify(user.profession) ===
        //             JSON.stringify(selectedProf)
        //     )
        //     : users

        // const count = filteredUsers.length
        // const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
        // const userCrop = paginate(sortedUsers, currentPage, pageSize)
        // const clearFilter = () => {
        //     setSelectedProf()
        // }

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
                        <TextField onChange={handleSearch} value={searchName} name="search" placeholder="Search..." />
                        {count > 0 && (
                            <UsersTable
                                users={userCrop}
                                onSort={handleSort}
                                selectedSort={sortBy}
                                onDelete={handleDelete}
                                onToggleBookMark={handleToggleBookMark}
                            />
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
    return 'loading...'
}
UsersList.propTypes = {
    users: PropTypes.array
}
export default UsersList
