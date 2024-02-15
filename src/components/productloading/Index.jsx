import { useEffect, useState } from "react";
import './stlye.css'
export default function Loader() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false)
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );
      let result = await response.json();
      if (result && result.products && result.products.length) {
        console.log("kiddo");
        setProducts((prevData)=>[...prevData,...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(()=>{
    if(products && products.length === 100 ){

    setDisabledButton(true)
}

  },[products])
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading please wait</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map(item => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disabledButton}onClick={()=>{setCount(count+1)}}>LOAD MORE DATA</button>
        {
            disabledButton ? <p>YOU HAVE REACHED THE LIMIT</p> : null 
        }
      </div>
    </div>
  );
}
