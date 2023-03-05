import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Topbar.js';
import Card from './Card.js';
import data from './data.js';
import Button from 'react-bootstrap/Button';
import { CartProvider } from 'react-use-cart';
import AddCart from './AddCart.js';
import Add from './Add.js';
// import Test from './Test.js'



function App() {
  
  
  return (
   <div>
    {/* <Test /> */}
    <Add/>
    <CartProvider>
    <Topbar />
<header className='bg-dark py-5'>
  <div className='container px-4 px-lg-5 my-5'>
    <div className='text-center text-white'>
    <h1 className='display-4 fw-bolder'>Shop in style</h1>
    <p className='lead fw-normal text-white-50 mb-0'>With this shop hompeage template</p>
    </div>
  </div>

</header>
<div className='py-4 container'>

<div className='row justify-content-center'>
{data.productDetails.map((item, index)=>{
      return(
        <Card  
        img={item.img} 
        title={item.title} 
        rating={item.rating} 
        popup={item.popup}
        price={item.price} 
        item={item}
        key={index} />
      )
    })}
    
</div>
</div>

</CartProvider>
   </div>
  );
}



export default App;
