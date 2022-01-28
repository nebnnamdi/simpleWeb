
const Product = ({data}) => {
    return ( 
        <div className="one">
            {data.map(data=>{
                return(
                    <div className="card" key={data.id}>
                        <img src={`https://nebnnamdi.github.io/simpleWeb/static/media/${data.id}.png`} alt="stool"/>
                        <p>{data.detail}</p>
                        <p id="pricetag">{data.price}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Product;