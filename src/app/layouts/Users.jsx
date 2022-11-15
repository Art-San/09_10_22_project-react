import React from 'react'
import { useParams } from 'react-router-dom'
import UserPage from '../components/UserPage'
import UsersList from '../components/UsersList'

const Users = () => {
    const paramms = useParams()
    const { userId } = paramms
    return (
        <>
            { userId ? <UserPage userId={userId}/> : <UsersList/> }
        </>
    )
}

export default Users
