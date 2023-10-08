import React from "react"
import "./Home.css";
import { Container } from "react-bootstrap";

export function Home() {

    return (

        <Container className="homebackground">
            <h1 className="hometitle">All Food</h1>
            <h2 className="homesum">Summary</h2>
            <p className="homep">Asian Food, French Food, Italian Food and Middle Eastern Food. Each of these cuisines offers a unique culinary experience with its own set of flavors, techniques, and cultural influences, making them favorites for food enthusiasts around the world. </p>
            <div className="centerauto">
                <img className="autopics" height='450px' src="https://justbudapest.com/wp-content/uploads/thai_1-2048x1152.png" />
            </div>
            <div className="centerauto">
                <img className="autopics" height='450px' src="https://1.bp.blogspot.com/-GyYqMr54uEE/XQFkvTEJbSI/AAAAAAAAErs/_j2TeZjriL0bOsEiNcnsCh2ezviQrXUhgCLcBGAs/s1600/1.jpg" />
            </div>
            <div className="centerauto">
                <img className="autopics" height='450px' src="https://www.kitchenherald.com/wp-content/uploads/2023/08/f.jpg" />
</div>
                <div className="centerauto">
                <img className="autopics" height='450px' src="https://storage.googleapis.com/onmilwaukee-article-images/variants/8fy0aztzj5h5vi73533fu12htqow/ff35c9310a7d5016e76853b0df7d033449d793b6f6dc2e4a0b4bc844add6c385" />

            </div>



            <div>
                <h1 className="hometitle">Street Food</h1>
                <p className="homep">Street food is a global culinary phenomenon that brings authentic, affordable, and flavorful dishes to bustling urban landscapes. It's a vibrant tapestry of diverse tastes, cultures, and traditions served curbside.  </p>
            </div>


            <div className="centerauto">
                <img className="autopics" height='450px' src="https://pyxis.nymag.com/v1/imgs/66a/c95/385de949a24a80fe576b52b590b4d1c107-16-street-food-lede.2x.rhorizontal.w700.jpg" />
            </div>
           
            <div className="centerauto">
                <img className="autopics" height='450px' src="https://assets2.devourtours.com/wp-content/uploads/195329469_cf42027549_k-sabrett-hot-dog-Susan-Sermoneta-new-york-street-food.jpg" />
            </div>
     

        </Container>

    )
}