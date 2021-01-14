import React, { useState } from 'react';
import SignUp from './SignUp';
import './Form.css'
import FormSucces from './FormSucces';
const Form = () => {
const [isSubmeted,setIsSubmeted]=useState(false)


    function submitForm(){
        setIsSubmeted(true)
    }

    return (
       <>    
        <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {
             !isSubmeted ? <SignUp submitForm={submitForm}/>
                 : <FormSucces/>   
            }
      </div>
       </>
    );
};

export default Form;