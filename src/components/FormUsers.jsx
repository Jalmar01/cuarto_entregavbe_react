import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUsers.css'


const FormUsers = ({
  createNewUser, 
  updateInfo, 
  updateUserById, 
   setUpdateInfo,
   setIsCloseForm
  }) => {

    const { register, reset, handleSubmit } = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])
    

    const submit = data => {
        // actualiza
        if(updateInfo) {
            updateUserById('/users', updateInfo.id, data )
            setUpdateInfo()
            reset({
              email: '',
              password: '',
              last_name: '',
              first_name: '',
              birthday: ''
          });
        }else {
            //crea
            createNewUser('/users', data)
            reset({
                email: '',
                password: '',
                last_name: '',
                first_name: '',
                birthday: ''
            });
            
        }
        setIsCloseForm(true)
    }

    const handleExit = () => {
      reset({
        email: '',
        password: '',
        last_name: '',
        first_name: '',
        birthday: ''
      });
      setIsCloseForm(true)
      setUpdateInfo()
    }
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="form__title">Form User</h2>
      <div onClick={handleExit} className="form__x">X</div>
      <div className="form__section">
        <label className="form__label" htmlFor="email">Email</label>
        <input className="form__input" {...register('email')} id="email" type="text" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="password">Password</label>
        <input className="form__input" {...register('password')} id="password" type="password" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="first_name">First Name</label>
        <input className="form__input" {...register('first_name')} id="first_nam" type="text" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="last_name">Last Name</label>
        <input className="form__input" {...register('last_name')} id="last_name" type="text" />
      </div>
      <div className="form__section">
        <label className="form__label" htmlFor="birthday">Birthday</label>
        <input className="form__input" {...register('birthday')} id="birthday" type="date" />
      </div>
      <button className="form__btn"> {updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUsers