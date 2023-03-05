import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart';
import Badge from 'react-bootstrap/Badge';



export default function Add() {
  const Cart = (props) => {
const { addItem } = useCart();
  
  return (
    <div className='col-11 col-md-4 col-lg-2 mx-0 mb-4 '>
      <div className='card p-0 overflow-hidden h-100 shadow'>
    <Card>
    
    <Badge>{props.popup}</Badge>
    {/* <Card.Text className='offer'>{props.popup}</Card.Text> */}
      <Card.Img src={props.img} variant="top"/>
      <Card.Body className='text-center'>
        <Card.Title className='fw-bolder'>{props.title}</Card.Title>
        <Card.Text className='d-flex justify-content-center small text-warning mb-2'>{props.rating}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
        <Button variant="outline-secondary" 
        onClick={()=>addItem(props.item)(props.add)}>Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

// function App(){
//   function disable()
//   const [disable, setDisable] = useState(false); 

//   const disabled = () =>{
//     setDisable(true)
//   }
// return (<Cart
// add = {disabled}/>
// )

// }

};