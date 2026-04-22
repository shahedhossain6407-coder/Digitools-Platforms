
import { IoIosCheckmark } from "react-icons/io";
import { use } from "react";
import Product from "./product/Product";
import StartPlan from "./startPlan/StartPlan";
const productsPromise = fetch(`product.json`).then(res=>res.json())

const Home = () => {
    const product = use(productsPromise);

    return(
        <div>
            <div className="grid grid-cols-3 gap-20 container mx-auto">
          {product.map(item=><Product item={item}></Product>)}   
        </div>
        <StartPlan></StartPlan>
        </div>
        
    )


};

export default Home;