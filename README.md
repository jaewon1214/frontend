import React from 'react'

const EmployeeRegister = () => {
  const [emp, setEmp] = useState(initialEmp);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmp((prev) => ({
      ...prev,
      [name]: value
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <>
        <form onSubmit={handleSubmit}>
            
            <div>
                <label>이름</label>
                <input
                    type="text"
                    name="name"
                    value={emp.name}
                    onChange={handleChange}
                    placeholder='이름'
                />  
            </div>
            <div>
                <label>email</label>
                <input
                    type="email"
                    name="email"
                    value={emp.email}
                    onChange={handleChange}
                    placeholder='email'
                />  
            </div>
            <div>
                <label>직업</label>
                <input
                    type="text"
                    name="job"
                    value={emp.job}
                    onChange={handleChange}
                    placeholder='직업'
                />  
            </div>
            <div>
                <label>급여</label>
                <input
                    type="number"
                    name="pay"
                    value={emp.pay}
                    onChange={handleChange}
                    placeholder='급여'
                />  
            </div>
            

        </form>
      
    </>
  )
}

export default EmployeeRegister