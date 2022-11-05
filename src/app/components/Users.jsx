import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import api from '../api'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'
import SearchStatus from './SearchStatus'
import UsersTable from './UsersTable'

const Users = ({ users: allUsers, ...rest }) => {
    // console.log('user.profession', allUsers)
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

    const handleSort = (item) => {
        console.log('onSort ', item)
    }
    const filteredUsers = selectedProf
        ? allUsers.filter(
            (user) =>
                JSON.stringify(user.profession) ===
                JSON.stringify(selectedProf)
        )
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
                        <UsersTable users={userCrop} onSort={handleSort} {...rest}/>
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
