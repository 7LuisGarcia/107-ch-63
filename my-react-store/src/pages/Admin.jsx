import { useState } from "react"

function Admin() {
    const [couponCode, setCouponCode] = useState("")
    const [couponDiscount, setCouponDiscount] = useState(0)
    const[coupons, setCoupons] = useState([])
    
    // Product State
  const [productTitle, setProductTitle] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productPrice, setProductPrice] = useState(0)
  const [products, setProducts] = useState([]) 

    function saveCoupon(){
        console.log(couponCode)
        console.log(couponDiscount)

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount    
        }

        setCoupons([...coupons, newCoupon])
    }  
    
    function saveProduct() {
        const newProduct = {
            title: productTitle,
            categorory: productCategory,
            image: productImage,
            price: productPrice
        }

        setProducts([...products, newProduct])

        setProductTitle("")
        setProductCategory("")
        setProductImage("")
        setProductPrice(0)
    }

    return(
        <div>
            <h1>Store Administration</h1>


            <div className="d-flex gap-4">
            <section className="w-50">
                <h3>Add Products</h3>
            <div className="border bg-white p4">
            <div className="bg-succes m-4">
                <label className="form-label">Product Title</label>
                <input type="text" className="form-control" value={productTitle} onChange={(e) => setProductTitle(e.target.value)}/>   
            </div>

            <div className="border bg-white p4 bg-succes m-4">
                <label className="form-label">Product Category</label>
                <input type="text" className="form-control" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}/>   
            </div>

            <div className="border bg-white p-4 bg-succes m4">
                <label className="form-label">Product Image</label>
                <input type="text" className="form-control"image placeholder="https://google.com/cleat-image" value={productImage} onChange={(e) => setProductImage(e.target.value)}/>   
            </div>

            <div className="border bg-white p-4 bg-succes m-4">
                <label className="form-label">Product Price</label>
                <input type="number" className="form-control" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>   
            </div>

            <button className="btn btn-info" onClick={saveProduct}>Save Product</button>
            </div>
            <div>
                 <h5>Product List</h5>
            {
                products.length == 0
                ? <p>There's no products</p>
                :
                products.map(product => (
                    <div>
                    <li>{product.title} - {product.category}</li>
                    <img width={200} src={product.image} alt="" />
                    <p>{product.price}</p>
                    </div>
                ))
            }
            </div>
            </section> 

            <section className="w-50">
                <h3>Add Coupons</h3>

              <div className="border bg-white p-4">
                <div className="bg-dark.bg-gradient mb-4">
                <label className="form-label">Code</label>
                <input
                 type="text" className="form-control"
                 value={couponCode}
                 onChange={(e)=> setCouponCode(e.target.value)}
                  />  
                </div>

                <div className="mb-4">
                    <label className="form-label">Discount</label>
                    <input
                     type="number" 
                     className="form-control"
                     value={couponDiscount}
                     onChange={(e)=> setCouponDiscount(e.target.value)}
                     />
                </div>

                <button className="btn btn-info" onClick={saveCoupon}>Save Coupon</button>
            </div>

            <div>
            <h5> Coupon List</h5>
            {
                coupons.length == 0
                ? <p>There's no coupons</p>
                :
                coupons.map(coupon => (
                    <li>{coupon.code} - {coupon.discount}</li>
                ))
            }
            </div>
            </section>
        </div>
        
      </div>  
    )
}

export default Admin