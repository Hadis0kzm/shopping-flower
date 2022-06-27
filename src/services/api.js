import axios from "axios";

const BASEurl ="https://fakestoreapi.com";

const GetProducts = async ()=>{
 const response = await axios.get(`${BASEurl}/products)`)
 return response.data;
}

export {GetProducts};