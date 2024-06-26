import { useSelector } from "react-redux";
import CartCard from "./CartCard";

// cart summary component which includes cart list as table
const CartSummary = ()=>{
    const cartItems = useSelector((state)=>state.cart);
    const total = cartItems.reduce((total, item) => total+(item.price*item.quantity),0);

    return (
        <>
            <div className="container">
                <div className="row d-flex mt-3">
                    <div className="col">
                    {cartItems.length === 0? <h2 className="text-center">Cart is Empty</h2>:
                        <div className="table-responsive">
                            <table className="table table-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center">Cart Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col" className="text-nowrap">Unit Price</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {cartItems.map((item) => (
                                    <CartCard product={item} key={item.id} />
                                   ))}
                                </tbody>
                            </table>
                        </div>}
                        
                        <div className="card mb-2">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex justify-content-between">
                                            <p>Sub Total:</p>
                                            <p className="fs-5">&#x20B9;{total}</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p>Shipping:</p>
                                            <p>Free</p>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <p>Total:</p>
                                            <p className="fs-5">&#x20B9;{total}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartSummary;