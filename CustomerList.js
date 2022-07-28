import React ,{useState,useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom' 

import {
    retrieveCustomers,

}from '../actions/customers'
export default function CustomerList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    
    
    const [currentCustomer,setCurrentCustomer]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const customers = useSelector((state)=>state.customers);
     

    useEffect(()=>{
        dispatch(retrieveCustomers());
      },[]);

    
    const refreshData=()=>{
        setCurrentCustomer(null);
        setCurrentIndex(-1);
    }
 

    const setActiveCustomer = (customer,index)=>{
        setCurrentCustomer(customer);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 


return(
    
<table>
    <thead>
        <tr>
            <th>userId</th>
            <th>password</th>
            <th>role</th>
            <th>customerFirstName</th>
            <th>customerLastName</th>
            <th>customerEmailId</th>
            <th>customerMobileNumber</th>
            <th>customerAddress</th>
        </tr>
    </thead>
    <tbody>
{/*  {props?.productData?.length >0 ?(
        props.productData.map((product)=>(
   */}

  {customers?.length > 0 ? (
    customers.map((customer)=>(
    <tr key={customer.userId}>
        <td>{customer.userId}</td>
        <td>{customer.password}</td>
        <td>{customer.role}</td>
        <td>{customer.customerFirstName}</td>
        <td>{customer.customerLastName}</td>
        <td>{customer.customerEmailId}</td>
        <td>{customer.customerMobileNumber}</td>
        <td>{customer.customerAddress}</td>
        <td><button 
         onClick={()=>{props.editCustomer(customer)}}
        className="button muted-button">Edit</button></td>
        <td><button 
        onClick={()=>props.deleteCustomer(customer.userId)}
        className="button muted-button">Delete</button></td>
        
     </tr>))):(
        <tr>
            <td colSpan={5}>No customers</td>
        </tr>
     )}

    </tbody>
</table>

)

}