import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { collection, addDoc, serverTimestamp, getDocs, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import Messages from "../components/Messages";
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiSunglasses } from "react-icons/bs";



const ChatPage = ({ isRoom, setIsRoom }) => {

    const [messagesLive, setMessagesLive] = useState()
    const [emo, setEmo] = useState(false)
    const [senEmo, setSendEmo] = useState()
    console.log(senEmo);
    // Formun DataBase Submit işlemi
    const handleSubmit = async (e) => {
        e.preventDefault();
        //!Koleksiyon referansı alma 
        const messagesCol = collection(db, 'messages')
        //REferansa belge ekleme
        await addDoc(messagesCol, {
            text: e.target[0].value,
            isRoom,
            sender: {
                id: auth.currentUser.uid,
                name: auth.currentUser.displayName,
                photo: auth.currentUser.photoURL,
            },
            createdAt: serverTimestamp(),
        });
        e.target.reset();
    }


    // Firebase gönderilen verileri çekme işlemi 
    useEffect(() => {
        //Koleksiyonun Referansını alma 
        const messageCol = collection(db, 'messages')
        /* Sorgu oluştur */
        const q = query(messageCol,
            where("isRoom", "==", isRoom),
            orderBy('createdAt', 'asc'))
        //referansı alınan koleksiyondan veri alma 
        onSnapshot(q, (snap) => {
            // DİZİ İÇERİSİNDE TEKBİR VERİYE DOGRUDAN ERİŞMEK YERİNE FOREACH İLE DİZİ İÇERİSİNDEKİ BÜTÜN VERİLERİ DÖNGÜYE AL ve boş bir diziye ekle
            const tempMsg = [];

            snap.docs.forEach((doc) => {
                tempMsg.push(doc.data())
            })
            setMessagesLive(tempMsg);
        })
    }, [])

    return (
        <div className='chat-page'>
            <header>
                <p>{auth.currentUser?.displayName}</p>
                <p>{isRoom}</p>
                <button onClick={() => setIsRoom(null)} >Farklı oda</button>
            </header>

            <main>
                {messagesLive?.map((data, i) => (<Messages key={i} data={data} />))}
            </main>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='MEsajınızı yazı' />

                <button>Gönder</button>
                <button onClick={() => setEmo(true)} className="embtn"><BsEmojiSunglasses /></button>
                {emo ? <EmojiPicker
                    searchPlaceHolder="Emojilerimizle eğlenin"
                    previewConfig={{
                        showPreview: false
                    }} /> : ''}
            </form>

        </div>
    )
}

export default ChatPage