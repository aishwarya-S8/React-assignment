import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import queryString from 'query-string';


const Product = (props) => {

    

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter]=useState([]);

    // const value=queryString.parse(this.props.location.search);
    // id=value.id;
    // console.log('token',id)//123
    // let ComponentMounted = true;

    // useEffect(() => {
    //     const getProducts = async () => {
    //         setLoading(true);
    //         const response = await fetch('https://fakestoreapi.com/products');
    //         if (ComponentMounted) {
    //             setData(await response.clone().json());
    //             setFilter(await response.json());
    //             setLoading(false);
    //             console.log(filter);
    //         }
    //         return () => {
    //             ComponentMounted = false;
    //         }
    //     }

    //     getProducts();
    // }, []);

    const Loading = () => {
        return (

            <>
                Loading...

            </>

        )
    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/').then((result)=>{
                result.json().then((resp)=>{
                    setData(resp)
                })
            })
    }, []);
    console.log(data)
    console.log(props.state)
   // alert(props.id);
//    super(props);
//         this.state={
//             value:this.props.location.state,
//         }
 //  console.log(this.props.location.state.id);
  const ids = 1;
    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.id === cat);
        setFilter(updatedList);
    }


    const Child = (props) => {
        return(
          <h2> {props.data} </h2>
        );
    }

    const ShowProducts = ({ }) => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5s">
                    {/* <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button> */}
                    
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct(1)}>Mens</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>

                </div>
                {
                    filter.map((data,props) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4" >

                                    <div class="card h-100 text-center p-4" key={data.id}>
                                        <img src={data.image} class="card-img-top" alt={data.title} height="250px" />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{data.title.substring(0, 12)}...</h5>
                                            <p class="card-text lead fw-bold">

                                                ${data.price}
                                            </p>

                                                    <button className="btn btn-outline-dark px-4 py-2" >Add To Cart </button>
                                                    <h2> {props.data} </h2>

                                            {/* <NavLink to={`/item`} className="btn btn-outline-dark px-4 py-2">
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

    const ShowProduct = ({  }) => {
        {
            





            // data.map((item) => {
        return (
            <>
            {/* <h1>dfs</h1>
                <div className="buttons d-flex justify-content-center mb-5 pb-5s">
                    <button className="btn btn-outline-dark me-2" >All</button>
                </div>
               
                            <h1>fdjkh</h1>
                                <div className="col-md-3 mb-4" >
                                    <div class="card h-100 text-center p-4" key={item.id} >
                                        <img src={item.image} class="card-img-top" alt={item.title} height="250px" />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{item.title.substring(0, 12)}...hii</h5>
                                            <p class="card-text lead fw-bold">

                                                ${item.price}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            

                         */}
                         <h1>{data.id}</h1>
                         <img src={data.image} class="card-img-top"  height="250px" width="200px"/>
                   
            </>
    //     )
    // } )}
        )}
    }
    return (
        <div>
             
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>

            </div>

        </div>
    )




}

export default Product;