import React from 'react'
import { auth } from '../firebase/config';

const Messages = ({ data }) => {
    /* KUllancı mesajı ise sadece mesaj içeriğini ekrana renderla */
    if (auth.currentUser?.uid === data.sender.id) {
        return <p className='msg-user'>{data.text}</p>
    }
    /* Kullanıcı Mesajı değilse Kullanıcı bilgisi ile bereaber mesaj içeriğini renderla */
    return (
        <div className='msg-other'>
            <div>
                <img src={data.sender.photo} />
                <span className='msg-other'>{data.sender.name}</span>
            </div>
            <p>{data.text}</p>
        </div>
    )
}

export default Messages