import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart';
import Add from './Add.js';
import Badge from 'react-bootstrap/Badge';



const Cart = (props) => {

  
  const { addItem } = useCart();
  


  

  return (
    <div className='col-11 col-md-4 col-lg-2 mx-0 mb-4 '>
      <div className='card p-0 overflow-hidden h-100 shadow'>
    <Card>
    <Badge className='bad' bg="secondary" >{props.popup}</Badge>
      <Card.Img className='img' src={props.img} variant="top"/>
      <Card.Body className='text-center'>
        <Card.Title className='fw-bolder'>{props.title}</Card.Title>
        <Card.Text className='d-flex justify-content-center small text-warning mb-2'>{props.rating}</Card.Text>
        <Card.Text className='prize'>{props.price}</Card.Text>
        
        <Button className='car' variant="outline-secondary" 
        onClick={()=>addItem(props.item)}>Add to cart</Button>

        
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}
// }
export default Cart;