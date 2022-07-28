import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../actions/customers';

export default function AddCustomerForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
    password:'',
    userId:0,
    role:'',
    customerFirstName:'',
    customerLastName:'',
    customerEmailId:'',
    customerMobileNumber:'',
    customerAddress:''
}
 
const [customer,setCustomer]=useState(initialFormState);
//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setCustomer({...customer,[name]:value});
}
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
if( !customer.password || !customer.userId || !customer.role || !customer.customerFirstName || !customer.customerLastName || !customer.customerEmailId || !customer.customerMobileNumber || ! customer.customerAddress
    ) return;
 console.log(customer+'from addCustomerForm')
props.addCustomer(customer);
dispatch(addCustomer(customer));
setCustomer(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<label>userId</label>
<input 
type='number'
name='userId'
value={customer.userId}
onChange={handleInputChange}/><br></br>

<label>password</label>
<input 
type='text'
name='password'
value={customer.password}
onChange={handleInputChange}/><br></br>


<label>role</label>
<input 
type='text'
name='role'
value={customer.role}
onChange={handleInputChange}/><br></br>


<label>customerFirstName</label>
<input 
type='text'
name='customerFirstName'
value={customer.customerFirstName}
onChange={handleInputChange}/><br></br>



<label>customerLastName</label>
<input 
type='text'
name='customerLastName'
value={customer.customerLastName}
onChange={handleInputChange}/><br></br>

<label>customerEmailId</label>
<input 
type='text'
name='customerEmailId'
value={customer.customerEmailId}
onChange={handleInputChange}/><br></br>

<label>customerMobileNumber</label>
<input 
type='text'
name='customerMobileNumber'
value={customer.customerMobileNumber}
onChange={handleInputChange}/><br></br>

<label>customerAddress</label>
<input 
type='text'
name='customerAddress'
value={customer.customerAddress}
onChange={handleInputChange}/><br></br>

<button>Add New Customer</button>

</form>


</>
)


}