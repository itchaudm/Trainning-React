import './GroupTable.css'
import { Fragment, useEffect, useState } from 'react'
import Modal from './Modal'
import UserTable from './UserTable'
import FormatDate from './FormatDate'

const GroupTable = () => {
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState('')
    const [selectRow, setSelectRow] = useState('')
    const [groupData, setGroupData] = useState([])
    const [itemUser, setItemUser] = useState({})

    const hanldeOnclickGroup = (item, index) => {
        if (item !== selectRow) {
            setSelectRow(item)
        } else {
            setSelectRow()
        }
    }

    const openModal = (user) => {
        setShowModal(!showModal)
        setUser(user)
    }
    const cancel = () => {
        setShowModal(!showModal)
    }

    const editUser = (itemUser) => {
        setItemUser(itemUser)

    }

    useEffect(() => {
        setGroupData(FormatDate)
    }, [])
    return (
        <div className="App">
            {
                showModal && <Modal cancel={cancel} itemUser={user} editUser={editUser} />
            }

            <table className='outner-table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>group_name</th>
                        <th>requirements</th>
                        <th>work_start_time</th>
                        <th>work_end_time</th>
                    </tr>
                </thead>
                <tbody>
                    {groupData && groupData.map((item, index) => {

                        return (
                            < Fragment key={index} >
                                <tr onClick={() => hanldeOnclickGroup(item.id, index)}>
                                    <td>{item.id}</td>
                                    <td>{item.group_name}</td>
                                    <td>{item.requirements}</td>
                                    <td>{item.work_start_time}</td>
                                    <td>{item.work_end_time}</td>
                                </tr>
                                {item.id === selectRow &&
                                    <tr >
                                        <td colSpan="5" style={{ padding: "8px" }}><UserTable group_id={item.id} openModal={openModal} itemUser={itemUser} /></td>
                                    </tr>
                                }

                            </Fragment>
                        )
                    })}


                </tbody>

            </table>
        </div >
    );
}

export default GroupTable