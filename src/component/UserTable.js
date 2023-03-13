import './UserTable.css'
import userData from '../api/users.json'
import { useEffect, useState } from 'react'

const UserTable = ({ group_id, openModal, itemUser }) => {

    const [dataUser, setDataUser] = useState(userData)

    const handlerOnclickUser = (item) => {
        openModal(item)
    }

    const setInforUser = () => {
        dataUser.map((item, index) => {
            if (item.id === itemUser.id) {
                if (item.first_name !== itemUser.first_name || item.last_name !== itemUser.last_name ||
                    item.birthday !== itemUser.birthday || item.gender !== itemUser.gender
                ) {
                    item.first_name = itemUser.first_name
                    item.last_name = itemUser.last_name
                    item.birthday = itemUser.birthday
                    item.gender = itemUser.gender
                }
            }
            return item
        })
        return dataUser
    }
    setInforUser()

    useEffect(() => {


        setDataUser(setInforUser())
    }, [dataUser])


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
                    return item.group_id === group_id && (

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


                })}


            </tbody>

        </table>
    )
}
export default UserTable