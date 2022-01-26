import Images from "../images";
// import {data} from "./data";

const Product = ({data}) => {
    return ( 
        <div className="one">
            {data.map(data=>{
                return(
                    <div className="card" key={data.id}>
                        <img src={Images.Stool} alt="stool"/>
                        <p>{data.detail}</p>
                        <p id="pricetag">{data.price}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Product;