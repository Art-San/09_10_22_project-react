import React from 'react'
import { useParams } from 'react-router-dom'
import UsersList from '../components/UsersList'
import UserPage from '../components/UserPage'

const Users = () => {
    const { userId } = useParams()
    console.log('userId', userId)
    return <>{userId ? <UserPage id={userId} /> : <UsersList />}</>
}

export default Users
