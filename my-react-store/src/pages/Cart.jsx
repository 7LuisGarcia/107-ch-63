import { useContext } from "react"
import GlobalContext from "../state/globalContext" 

function Cart() {
    const cart = useContext(GlobalContext).cart
    const removeProduct = useContext(GlobalContext).removeProductFromCart

    function getTotalItems() {
    let sum = 0

    for(let i=0; i < cart.length; i++){
      sum = sum + cart [i].quantity
    }
    return sum
  }

  function getTotalPrice() {
    let total = 0

    for(let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity
    }
    return total.toFixed(2)
  }
  
    return (
        <div>
            <h1>Ready to complete the purchase</h1>

            {cart.map(product =>
                <div className="d-flex justify-content-between align-items-center gap-4 border-primary rounded-2 mb-4 pe-4 overflow-hidden bg-white">
                    <img width={"300"} height={"300"} src={'./images/' + product.image} alt="" />
                    <h6>{product.title}</h6>
                    <spam>QTY: #{product.quantity}</spam>
                    <spam>Price: ${product.price}</spam>
                    <spam>${product.price * product.quantity}</spam>
                    <button className="btn btn-danger btn-sm" onClick={() => removeProduct(product._id)}>Remove</button>
                </div>
            )}

            <h3>You have {getTotalItems()} products in the cart</h3>
            <h4>Total:<strong>${getTotalPrice()}</strong></h4>
        </div>
    )
}

export default Cart