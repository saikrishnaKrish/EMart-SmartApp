import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';
import'./styles/cartStyles.scss';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const productList = useSelector((store)=>store.cartReducer.cartProducts)
const navigate = useNavigate();

  const TotalBill=()=>{
    let totalBill =0;
    let totalQty = 0;
     productList.forEach((product)=>{
      console.log("product",product.indQuantity )
      console.log("price",product.price)
      totalBill =totalBill+ (product.indQuantity * product.price);
      totalQty = totalQty+product.indQuantity;
    })

   

    return <TableContainer  className='cart-total'  component={Paper}
    style={{ flex: '1' }}>

    <Table aria-label="simple table">
    <TableHead>
          <TableRow>          
            <TableCell>Product Name</TableCell>
            <TableCell>Product Price </TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total price </TableCell>
          </TableRow>
      </TableHead>
        <TableBody>
          {productList.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.indQuantity} Qty</TableCell>
              <TableCell>${(product.indQuantity * product.price).toFixed(2)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell>{totalQty} Qty</TableCell>
              <TableCell>{totalBill.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  </TableContainer>
  }


  return (
    <>
        <div className='cart-container'>Cart Page
        <h2>Add to Product List</h2>
        <div className='cart-billed-qty'>
        <div className='cart_product_wrapper'> 
            <ProductList  productList={productList}/>
        </div>
        <div className='cart-total'>C
            <TotalBill/>
        <button onClick={()=>navigate("/checkout")}> Pay the Bill and Checkout</button>
        </div>
        </div>

        </div>
    </>
  )
}

export default Cart