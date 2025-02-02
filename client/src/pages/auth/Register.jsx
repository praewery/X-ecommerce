import React ,{ useState }from 'react'

const Register = () => {

  const [form,setForm] = useState({
    email:"",
    password:"",
    confirmPassword:""
  })
  const handleOnChange = (e)=>{
    // console.log(e.target.name,e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(form)
  }

  return (
    <div>
        Register
        <form onSubmit={ handleSubmit }>

            Email
            <input className='border'
            onChange={handleOnChange}
            name='email'
            type='email'
            />
            Password
            <input className='border'
            onChange={handleOnChange}
            name='password'
            type='text'
            />
            Confirm Password 
            <input className='border'
            onChange={handleOnChange}
            name='confirmPassword'
            type='text'
            />
            <buttuon className='bg-blue-500 rounded-md'>
              Register
            </buttuon>

            
        </form>

    </div>
  )
}

export default Register