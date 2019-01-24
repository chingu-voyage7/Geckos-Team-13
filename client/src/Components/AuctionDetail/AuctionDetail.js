import React,{Component  } from "react";
import { Link } from "react-router-dom";
import AuctionData from "../AuctionData/AuctionData";
import AuctionCarousel from "../AuctionCarousel/AuctionCarousel";
class AuctionDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: "99999",
            title: "iPhone X",
            image:
              "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6009/6009875_sd.jpg;maxHeight=300;maxWidth=300",
            description: "The most overpriced phone money can buy",
            currentBid: "$999.99",
            countdown: "1:30"
          };
    }


    render(){
        return(
                <div className ="container">
                {/*Create and then invoke  the breadcrumb component here */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">  <Link to ="/">Come Back to Current Auctions</Link>  </li>
                        </ol>
                    </nav>
                    <div className = "row">                    
                        <div className = "col-sm-6">
                            <AuctionCarousel/>
                        </div>
                        <div className = "col-sm-6">
                            <AuctionData  />
                        </div>                     
                    </div>
                </div>
            )
    }
}

export default AuctionDetail;