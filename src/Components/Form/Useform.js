
import { useState ,useEffect } from "react";

const Useform = validate => {
const [values,setValues] =useState({
    username:'',
    email: '',
    password: '',
    password2: ''
})
const [errors,setErrors] =useState({})
const [isSubmiting,setIsSubmiting]=useState(false)
const handleChange=(e)=>{
const {name,value}=e.target
    setValues({
        ...values,
        [name]:value
    })
}

const handleSubmit=(e)=>{
   
    e.preventDefault()
    setErrors(validate(values));
    setIsSubmiting(true)
}
return {handleChange,values,handleSubmit,errors}
};

export default Useform;


