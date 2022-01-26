import Product from "./Components/Product";
import Images from "./images";
import {data} from "./Components/data"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

    const Home = () => {
    return ( 
        <div>
            <div id="top">
                <div id="side1">
                    <div className="sect-1"> 
                        <p>Furniture that <br/> everyone <br/> Loves</p>
                    </div>

                    <div className="sect-2">
                        <p>We have 5000+ Review and our customers trust on our Furniture and Quality products.</p>
                    </div>

                    <div className="btn">
                        <button id="buy">Buy Now</button>
                        <button id="explore">Explore</button>
                    </div>
                </div>

                <div id="side2">
                    <div className="sect-3">
                        <img src={Images.Couch} alt="couch"/>
                    </div>
                </div>
            </div>

            <div className="sect-4">
                <a href="google.com" id="buy-btn">Buy Now</a>
                <a href="google.com" id="ex-btn">Explore</a>
            </div>

            <section>
                <div>
                    <h2>Why we are <br/> best in our <br/> Town</h2>
                    <p>We have 5000+ Reviews and our Customers trust on our Quality product and trust our own product. If you order More than $500 we can deliver free like Express delivery.</p>
                    <div id="arrow"><FontAwesomeIcon icon={faArrowRight} size="lg" style={{color:"fff"}}></FontAwesomeIcon>
                    </div>

                    
                </div>

                {/* <div id="product">
                    <img src={Images.Stool} alt="stool"/>
                    <div className="stool-detail">
                        <p>Green chair <br/> with metal</p>
                        <p id="pricetag">$36</p>
                    </div>
                </div>

                <div id="product">
                    <img src={Images.Basket} alt="stool"/>
                    <div className="stool-detail">
                        <p>Saguaro with <br/> wooden stand</p>
                        <p id="pricetag">$20</p>
                    </div>
                </div>

                <div id="product">
                    <img src={Images.LeafBasket} alt="stool"/>
                    <div className="stool-detail">
                        <p>Corn tree with<br/> wooden rack</p>
                        <p id="pricetag">$10</p>
                    </div>
                </div> */}

                <div className="content">
                    <Product data={data}/>
                </div>

            </section>
        </div>
     );
}
 
export default Home;