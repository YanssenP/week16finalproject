import React from "react"
import "./Cars.css";
import { Container } from "react-bootstrap";

export function Cars() {
    return (

        <Container className="autobackground">
            <h1>Cars</h1>
            <div className="sumauto">
                <h3 className="h3auto">Summary</h3>
                <p>During the 1930s some of the most imprtant inovations were made relating to safty and proformance of Automobiles, Many cars of the 1930s had four-wheel hydraulic brakes. Low-pressure balloon tires took the place of hard-riding high-pressure tires. During the 1930’s most cars were also equipped with heaters and radios. At this time cars also began to take on a smoother shape, more aerodynamic in design, hence offering less wind resistance. The 1930 Cadillac 16 is the industry’s first production car to offer sixteen-cylinder engine and immediately sets a new standard for power, performance, and luxury. The improvment of technology allowed for car manufactuars to upgrade comfortablity featurs and style.  </p>

            </div>

            <div>

                <h1 className="autotitle">Popular American Car Manufacturers</h1>
                <div className="centerauto">
                    <h3 className="autobrand">Cadillac</h3>
                    <img className="autopics" height='450px' src="https://www.carbodydesign.com/media/2012/06/1933-Cadillac-V-16-Aero-Coupe-720x576.jpg" />
                    <h3 className="h3auto">1933 CAdillac V 16 Aero Coupe</h3>
                </div>
                <div className="centerauto">
                    <h3 className="autobrand">Chrysler</h3>
                    <img className="autopics" height='450px' src="https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/161294/161294_Front_3-4_Web.jpg" />
                    <h3 className="h3auto">1933 Chrysler</h3>
                </div>
                <div className="centerauto">
                    <h3 className="autobrand">Ford</h3>
                    <img className="autopics" height='450px' src="https://www.motortrend.com/uploads/sites/5/2014/05/1932-Model-18-side.jpg?fit=around%7C875:492" />
                    <h3 className="h3auto">1932 Ford Model 18</h3>
                </div>

                <h1 className="autotitle">Popular European Car Manufacturers</h1>
                <div className="centerauto">
                    <h3 className="autobrand">Volvo</h3>
                    <img className="autopics" height='450px' src="https://i.pinimg.com/736x/a2/b4/a6/a2b4a65683547065f375de498d0bdd7a---volvo.jpg" />
                    <h3 className="h3auto">1931 Volvo TR671</h3>
                </div>
                <div className="centerauto">
                    <h3 className="autobrand">BMW</h3>
                    <img className="autopics" height='450px' src="https://www.supercars.net/blog/wp-content/uploads/2016/03/1934_BMW_3151-0-1024.jpg" />
                    <h3 className="h3auto">1934 BMW 315/1</h3>
                </div>
                <div className="centerauto">
                    <h3 className="autobrand">Mercedes Benz</h3>
                    <img className="autopics" height='450px' src="https://www.supercars.net/blog/wp-content/uploads/2015/03/1938_Mercedes_Benz_540_KA.jpg" />
                    <h3 className="h3auto">1934 Mercedes Benz 540 KA</h3>
                </div>



            </div>

        </Container>


    )
}
