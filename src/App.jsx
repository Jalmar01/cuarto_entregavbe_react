
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [isCloseForm, setIsCloseForm] = useState(true)

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech/'

  const [
    users, 
    getAllUser, 
    createNewUser, 
    deleteUserById, 
    updateUserById
  ] = useFetch(baseUrl)

  useEffect(() => {
    getAllUser('/users')
  },[])

  const handleOpenForm = () => {
    setIsCloseForm(false)
  }

  return (
   <div>
    <header className='header'>
    <div className='app'>
      <h1 className='app__title'>Users CRUD</h1>
      <button className='app__btn' onClick={handleOpenForm}>
        <h2>Create  Form</h2>
      </button>
    </div>
    </header>
    <div className={`form__container ${isCloseForm && 'form__close'}`}>
    <FormUsers
    createNewUser={createNewUser}
    updateInfo={updateInfo}
    updateUserById={updateUserById}
    setUpdateInfo={ setUpdateInfo}
    setIsCloseForm={setIsCloseForm}
    />
    </div>
    <div className='card__container'>
      {
        users?.map(user =>(
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setIsCloseForm={setIsCloseForm}
          />
        ))
      }
    </div>
      <link rel="stylesheet" href="https://github.com/Jalmar01/cuarto_entregavbe_react" />  
   </div>
  )
}

export default App
