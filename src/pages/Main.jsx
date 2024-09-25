import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import getProducts from '../redux/action';

const Main = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  
  const products = useSelector((store) => store.products)
    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase()))
      console.log(filteredProducts);
 
  const addToBasket = (product) => {
    dispatch( {type: "SET_PRODUCT_TO_BASKET", product: product} )
  }
  
  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
      <h1>Products</h1>
      <input type="text" style={{height: "30px"}} placeholder='search' value={inputValue} 
      onChange={ (e) => setInputValue(e.target.value)} />
      </div>
      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
        
        {filteredProducts.length > 0 ? filteredProducts.map(product => (
          <Card addToBasket={addToBasket} key={product.id} product={product}/>
        )) : <h2></h2>}
         
      </div>
    </div>
  
  )
}

export default Main