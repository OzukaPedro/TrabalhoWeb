import './RegisterScreen.css'
import { useForm } from 'react-hook-form'
import './RegisterScreen.css'
import axios from 'axios';




function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    axios({
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        username: data.username,
        email: data.email,
        password:  data.password
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='box'>
        <input className='inputs' name='username'{...register("username")} />
        <input className='inputs' name='email' type='email' {...register("email")} />
        <input className= 'inputs' name='password' type='password' {...register("password")} />
        <input type="submit" onSubmit={onSubmit}/>
    </div>
      </form>
    </div>
    
    
  )
}

export default App
