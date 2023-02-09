import React from 'react'

const Form = () => {

    const [formData, setFormData]=React.useState({
        email:"",
        password:"",
        confirmedPassword:"",
        isChecked: false
    })
 

  function handleChange(event){
    const {name,value, type, checked}=event.target
        setFormData(prevData=>{
            return{
                ...prevData,
                [name]: type === "checkbox" ? checked : value  //event.target.name:event.target.checked : event.target.value ; daca e text pun in setUseState valoarea(textul); altfel pun checked(true sau false)
            }
        })
  }
     
  function handleSubmit(event){
        event.preventDefault();
        if(formData.password === formData.confirmedPassword){
            console.log("Successfully logged in!")
        }else {
            console.log("Password no not match")
            return
        }
        {formData.isChecked && console.log("Thanks for signin up!") }
    }

  return (
    <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder='Email address'
                className='form--input'
                onChange={handleChange}
                name="email" //numele trebuie sa fie ca cel din state
                value={formData.email} //trebuie sa ii punem valoarea ca cea din state
            />
            <input
                type="password"
                placeholder='Password'
                className='form--input'
                onChange={handleChange}
                name="password"
                value={formData.password}

            />
            <input
                type="password"
                placeholder='Confirm password'
                className='form--input'
                onChange={handleChange}
                name="confirmedPassword"
                value={formData.confirmedPassword}

            />

            <div className='form--marketing'>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    id="isChecked"
                    checked={formData.checkbox}
                    name="isChecked"
                />
                <label htmlFor='isChecked'>Do you agree with terms and conditions?</label>
            </div>
            <button>Submit</button>
           
        </form>
    </div>
  )
}

export default Form
