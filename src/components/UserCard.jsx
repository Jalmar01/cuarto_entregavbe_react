import './styles/UserCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setIsCloseForm={setIsCloseForm}}) => {


    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleEdit = () => {
        setUpdateInfo(user)
        setIsCloseForm(false)
    }

  return (
    <article className="card">
        <h2 className="card__title">{`${user.first_name} ${user.last_name}`}</h2>
        <div className='card__linea'></div>
        <ul className="card__ul">
            <li className="card__li">
                <span className='card__label'>Email:</span>
                <span className='card__value'>{user.email}</span>
            </li>
            <li className="card__li">
                <span className='card__label'>Birthday:</span>
                <span className='card__value'>{user.birthday}</span>
            </li>
        </ul>
        <div className='card__linea'></div>
        <div className='card__container-btn'>
            <button className='card__btn-delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
            <button className='card__btn-edit' onClick={handleEdit}><i className='bx bx-edit'></i></button>
        </div>
    </article>
  )
}

export default UserCard