import React from "react";
import { useCart } from "react-use-cart";



const AddCart = () =>{
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
} = useCart();
if (isEmpty) return  <button><i class="bi bi-cart-plus-fill"></i>cart {} {totalItems}</button>

    return(
        <section>
        <div>
            <div>
                <button><i class="bi bi-cart-plus-fill"></i>cart {} {totalItems}</button>
                    <div>
                        {items.map((item, index)=>{
                        return(
                            <div key = { index }>
                            <button 
                                    className="btn btn-danger ms-2"
                                    onClick={() => removeItem (item.id)}
                                    >Remove Item</button>
                            </div>
                        )}
                        )}
                    </div>

            </div>
        </div>
        </section>
    );
};
export default AddCart;