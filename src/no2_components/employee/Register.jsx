import React, { useState } from 'react'

const initialState = {
    id : null, name : '', email : '', job : '', pay : null
}

const Register = ({setInfos}) => {
    const [info, setInfo] = useState(initialState)

    const handleChange = () =>{
        const {name, value} = event.target;
        setInfo((prev)=>(
            {...prev, [name]: value}
        ))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setInfos((prev)=>(
            [...prev, info]
        ))
    }
  
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>id</label>
            <input 
            type="number" 
            name="id" 
            value={info.id}
            onChange={handleChange}
            /> 
        </div>
        <div>
            <label>name</label>
            <input 
            type="text" 
            name="name" 
            value={info.name}
            onChange={handleChange}
            /> 
        </div>
        <div>
            <label>job</label>
            <input 
            type="text" 
            name="job" 
            value={info.job}
            onChange={handleChange}
            /> 
        </div>
        <div>
            <label>email</label>
            <input 
            type="email" 
            name="email" 
            value={info.email}
            onChange={handleChange}
            /> 
        </div>
        <div>
            <label>pay</label>
            <input 
            type="number" 
            name="pay" 
            value={info.pay}
            onChange={handleChange}
            /> 
        </div>
        <button>생성</button>
    </form>
  )
}

export default Register
