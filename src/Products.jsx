import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Product from "./component/Product";
import Navbar from './component/Navbar';
import Home from './Home';
import "./style/Products.css";
import Child from './component/Product';
import { useDispatch } from 'react-redux';
import { AddCart } from './redux/action';
import { useSelector } from 'react-redux';
//import Card from 'react-bootstrap/Card';


const Products = () => {


    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const [cartTitle, setTitle] = useState([]);
    const [upDateInput, setUpdate] = useState([]);
    const [cartDec, setDec]=useState([]);
    const [cartWishlist, setWlist]=useState([]);

    // const dispatch = useDispatch();
    // const addProduct =(product)=> {
    //     dispatch(addCart(product));
    // }

    let ComponentMounted = true;
    let id = 1;


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (ComponentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);

            }
            return () => {
                ComponentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>

                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const addProduct = (product) => {
        dispatch(AddCart(product));
        setTitle(product);
        setUpdate([...upDateInput,
            product
        ])
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const onAdd = (product) => {

    }

    function viewData(product){
        setWlist(product);
        setDec([...cartDec,product])
    
      }

    const ShowProducts = ({ }) => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5s">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Mens</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>

                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                            
                                <div className="col-md-3 mb-4" >
                                    <div class="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                        
                                        <div class="card-body">
                                            <h5 class="card-title mb-2">{product.title.substring(0, 12)}...</h5>
                                            <p class="card-text lead fw-bold">
                                                 ${product.price}
                                            </p>

                                            <button className="btn btn-outline-dark px-4 py-2" onClick={() => { addProduct(product) }}>Add To Cart</button>

                                            <button onClick={()=>{viewData(product)}} className="btn btn-outline-dark px-4 py-2" variant="dark">
                                                Add To Wishlist</button>

                                            {/* <NavLink to={{ pathname: `/item`, state: "heyy" }} className="btn btn-outline-dark px-4 py-2">
                                                Buy Now
                                            </NavLink> */}
                                        </div>
                                    </div>
                                </div>

                            </>

                        )
                    })
                }

            </>

        )
    }



    return (

        
        <main className="block col-28">
<Navbar />
      {/* <Home /> */}
      {/* <div className="card text-bg-dark text-white border-0" >
                        <img src="https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-4.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                            className="card-img" alt="Background" height="3500px"/>
                        <div className="card-img-overlay d-flex flex-column" > */}
            <div className="row">
                <div className="col">
                    <div className="container my-5 py-2" >
                        <div className="row">
                            <div className="col-12 mb-2" >
                                <h1 className="display-6 fw-bolder text-center" >Latest Products</h1>
                                <hr />
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            {
                                loading ? <Loading /> : <ShowProducts />
                            }
                            {/* <Child data='1' /> */}



                        </div>

                    </div>
                </div>
                <div className="col">
                    <table>
                        <tbody>
                        <tr>
                            <th><h1>Cart</h1>
                            {/* <button className="btn btn-outline-dark px-4 py-2" variant="dark">Place Order({upDateInput.length})</button> */}
                            <NavLink className="btn btn-outline-dark px-4 py-2" to="/deliverydetails" >Place Order({upDateInput.length})</NavLink></th>
                            <th><h1>Wishlist</h1></th>
                        </tr>
                        <tr>
                        <th>
                            
                    {/* <div className='block col-15'> */}
                        {/* <div className="col-12 mb-5" >
                            <h1 className="display-6 fw-bolder text-center">Cart</h1>
                            <hr />
                            </div> */}
                        {
                            upDateInput.map(product => {
                                return (
                                <div className="container">
                                   
                                    <div className="col-md-3 mb-4" >
                                    
                                        <div class="card h-100 text-center p-4" key={product.id}>
                                            <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                            <div class="card-body">
                                                <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                                <p class="card-text lead fw-bold">

                                                    ${product.price}
                                                </p>
                                             
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )
                            })}
                    
                   
          {/* /          </div> */}
                    </th>
                    <th>
                        {/* <h1>Wishlist</h1> */}
                    
                    {/* <div className="col-12 mb-5" >
                        <h1 className="display-6 fw-bolder text-center">WishList</h1>
                        <hr />
                    </div> */}
                    {
                        cartDec.map(product => {
                            return (
                                <div className="container">
                                <div className="col-md-3 mb-4" >

                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold">

                                            ${product.price}
                                        </p>
                                        <button className="btn btn-outline-dark px-4 py-2" onClick={() => { addProduct(product) }}>Add To Cart</button>
                                        {/* <button className="addbtn" variant="dark">Buy Now</button> */}
                                    </div>
                                </div>
                            </div>
                            </div>
                            )
                        })}
              
                </th>
                </tr>
                </tbody>
                </table>
                </div>
            </div>
            {/* </div></div> */}
        </main >




    );



}

export default Products;