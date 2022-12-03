// import React from 'react'
// import { useParams } from 'react-router-dom'
// import UserPage from '../components/page/userPage'
// import UsersListPage from '../components/page/usersListPage'

// const Users = () => {
//     const paramms = useParams()
//     const { userId } = paramms
//     return (
//         <>
//             { userId ? <UserPage userId={userId}/> : <UsersListPage/> }
//         </>
//     )
// }

// export default Users

import React from 'react'
import { useParams } from 'react-router-dom'
import EditUserPage from '../components/page/editUserPage/EditUserPage'
import UserPage from '../components/page/userPage/UserPage'
import UsersListPage from '../components/page/usersListPage/UsersListPage'
const Users = () => {
    const params = useParams()
    const { userId, edit } = params
    return (
        <>
            {userId ? (
                edit ? (
                    <EditUserPage />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    )
}

export default Users
