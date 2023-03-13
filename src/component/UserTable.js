import './UserTable.css'
import userData from '../api/users.json'
import { useEffect, useState } from 'react'

const UserTable = ({ group_id, openModal, itemUser, check }) => {

    const [dataUser, setDataUser] = useState(userData)
    const [checkT, setCheckT] = useState(false)
    const handlerOnclickUser = (item) => {
        openModal(item)
    }

    if (check !== checkT) {
        setCheckT(check)
    }
    useEffect(() => {
        dataUser.map((item, index) => {
            if (item.id === itemUser.id) {
                if (item.first_name !== itemUser.first_name) {
                    item.first_name = itemUser.first_name
                }
            }
            return item
        })

        setDataUser(dataUser)
    }, [check])


    return (
        <table className='inner-table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Fist Name</th>
                    <th>Last Name</th>
                    <th>Birthday</th>
                    <th>Gender</th>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Group id</th>
                </tr>
            </thead>
            <tbody>
                {dataUser.map((item, index) => {
                    if (item.group_id === group_id) {
                        return (

                            <tr key={index} onClick={() => handlerOnclickUser(item)} >
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.birthday}</td>
                                <td>{item.gender}</td>
                                <td>{item.user_name}</td>
                                <td>{item.password}</td>
                                <td>{item.group_id}</td>
                            </tr>

                        )
                    }

                })}


            </tbody>

        </table>
    )
}
export default UserTable