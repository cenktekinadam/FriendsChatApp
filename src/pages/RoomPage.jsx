
const RoomPage = ({ setIsAuth, setIsRoom }) => {
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('token')
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const room = e.target[0].value.toUpperCase()
        setIsRoom(room);
    }

    return (
        <form onSubmit={handleSubmit} className='room-form'>

            <h1>Chat Odası</h1>
            <p>Hangi Odaya Gireceksiniz</p>
            <input type="text" placeholder='ör:London' required />
            <button>Odaya Gir</button>
            <button onClick={logout}>Çıkış Yap</button>
        </form>
    )
}

export default RoomPage