/* eslint-disable no-undef */
import React from 'react'
import Qualitie from './Qualitie'
import BookMark from './Bookmark'

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map((qual) => (
                    <Qualitie key={qual._id} {...qual} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>
                <BookMark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    )
}
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    profession: PropTypes.object.isRequired,
    bookmark: PropTypes.bool.isRequired,
    qualities: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
}
export default User
