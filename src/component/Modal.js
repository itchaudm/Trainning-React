import { useState } from 'react';
import './Modal.css'
const Modal = ({ cancel, itemUser, editUser }) => {
    const [firstName, setFirstName] = useState(itemUser.first_name)
    const [lastName, setLastName] = useState(itemUser.last_name)
    const [birthday, setBirthday] = useState(itemUser.birthday)
    const [gender, setGender] = useState(itemUser.gender)

    const handleSubmit = () => {

        editUser({
            ...itemUser,
            first_name: firstName,
            last_name: lastName,
            birthday: birthday,
            gender: gender
        })
        cancel()
    }
    return (
        <>
            <div className="modal">
                <div className="modal_overlay"></div>
                <div className="modal_body">
                    <div className="edit_user">
                        <div className="edit_user_container">
                            <div className="edit_user_header">
                                <h3 className="edit_user_heading">{itemUser.user_name}</h3>
                            </div>
                            <div className="edit_user_form">
                                <div className="edit_user_group">
                                    <label className="edit_user_lable" htmlFor="">First Name</label>
                                    <input type="text" className="edit_user_input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="edit_user_group">
                                    <label className="edit_user_lable" htmlFor="">Last Name</label>
                                    <input type="text" className="edit_user_input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="edit_user_group">
                                    <label className="edit_user_lable" htmlFor="">Birthday</label>
                                    <input type="text" className="edit_user_input" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                                </div>
                                <div className="edit_user_group">
                                    <label className="edit_user_lable" htmlFor="">Gender</label>
                                    <input type="text" className="edit_user_input" value={gender} onChange={(e) => setGender(e.target.value)} />
                                </div>
                            </div>

                            <div className="edit_user_controls">
                                <button className="btn-cancel" onClick={() => cancel()}>cancel</button>
                                <button className="btn-save" onClick={() => handleSubmit()}>Save</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal