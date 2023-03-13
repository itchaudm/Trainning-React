import './UserTable.css'
import userData from '../api/users.json'
import { useEffect, useState } from 'react'

const UserTable = ({ group_id, openModal, itemUser }) => {


    const [items, setItems] = useState([])

    const [first, setFirst] = useState(true)

    const handlerOnclickUser = (item) => {
        openModal(item)
    }



    const setInforUser = () => {
        const data = items.map((item, index) => {
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
        console.log("check item ", data);
        setItems(data)
    }
    // setInforUser()

    useEffect(() => {

        const itemClone = userData.filter(function (el) {
            return el.group_id == group_id
        });

        setItems(itemClone)

        console.log("a")
    }, [])

    useEffect(() => {

        if (!first) {
            setInforUser()
        }

        setFirst(false)
    }, [itemUser])
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
                {items.map((item, index) => {
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


                })}


            </tbody>

        </table>
    )
}
export default UserTable