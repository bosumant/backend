import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import CustomerList from './components/CustomerList'
import { useState,useEffect } from 'react';
import apiClient from './http-common'
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddCustomerForm from './components/AddCustomerForm';
//import EditCustomerForm from './components/EditCustomerForm';
function App() {
  
const [customers,setCustomers]=useState([]);

    
    useEffect(()=>{apiClient.get('/customers').then((response)=>{
      setCustomers(response.data);
    })},[])

    
const [editing,setEditing]=useState(false);
const initialFormState = {
  customerFirstName:'',
    customerLastName:'',
    customerEmailId:'',
    customerMobileNumber:'',
    customerAddress:''

}
const [currentCustomer,setCurrentCustomer] 
     =useState(initialFormState);

     
async function addCustomer(customer){
  try{
  const response=await apiClient.post('/customers',customer);
    setCustomers([...customers,response.data]);
    console.log(customers);
    
  }catch(err){
    console.log(err)
  }
  
}



async function deleteCustomer(userId){
  await apiClient.delete(`/customers/${userId}`);
    setCustomers(customers.filter((customer)=>customer.userId !== userId));
  }
  
  const editCustomer=(customer)=>{

    setEditing(true);
      setCurrentCustomer
      ({customerFirstName:customer.customerFirstName, customerLastName:customer.customerLastName, customerEmailId:customer.customerEmailId, customerMobileNumber:customer.customerMobileNumber, customerAddress:customer.customerAddress   })
     
  } 
  
 /*  const updateCustomers = (userId,updatedCustomers)=>{
  
    setEditing(false);
    apiClient.put(`/customers/${userId}`,updatedCustomers).then((response)=>
    {
  
      console.log('customer updated');
      setCustomers(customers.map((customer)=>
    (customer.userId === userId ? updatedCustomers : customer)));
    })
     
  } */
  
  
  
  
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/customers" className="navbar-brand">
          React App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/customers"} className="nav-link">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addCustomer"} className="nav-link">
              Add Customer
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
        <Route path='/' element={<CustomerList 
    customerData={customers} 
         editCustomer={editCustomer}
         deleteCustomer={deleteCustomer} />} ></Route>
          <Route exact path="addCustomer" element={<AddCustomerForm addCustomer={addCustomer}/>} />
         
         <Route path='/customer' element={<CustomerList 
    CustomerData={customers}
    editCustomers={editCustomer}
         deleteCustomer={deleteCustomer} />}>

         </Route>
         {/* <Route path="/customers/:id" element={<EditCustomerForm /> }></Route> */}
        </Routes>
      </div>
    
    </BrowserRouter>
    );
}

export default App;