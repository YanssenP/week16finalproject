import React from "react"
import "./Italian.css";
import { Container } from "react-bootstrap";

export function Italian() {
    return (

        <Container className="italianbackground">
            <div className="firstdish">
                <h1>Five Favourite Italian dishes</h1>

                <body>

                    <div>
                        <h1 className="dishnames">1.Pizza Margherita</h1>
                        <img className="pizzapic" height='450px' src="https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Pizza-Margherita.jpg" />
                        <div className="Pizzainfo">
                         
                            <h4 className="h3citys">Pizza Margherita story</h4>
                            <p>
Pizza Margherita, an iconic Italian creation, has a storied origin tied to Naples in the late 19th century. It was crafted in honor of Queen Margherita of Savoy during her visit to the city in 1889. Pizzaiolo Raffaele Esposito created the pizza with a patriotic twist, using the colors of the Italian flag: red tomatoes, white mozzarella cheese, and green basil. The Queen's love for this pizza elevated it to royal status and contributed to its worldwide fame. Today, the Margherita pizza remains a symbol of Italian gastronomy, cherished for its simplicity, vibrant flavors, and cultural significance.  </p>
                        </div>
                    </div>


                    <div>
                        <h1 className="dishnames">2.Lasagne alla Bolognese</h1>
                        <img className="Lasagnepic" height='450px' src="https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/10-Famous-Italian-Dishes-You-Must-Try-Lasagne-alla-Bolognese.jpg" />
                        <div className="Lasagneinfo">
                           
                            <h4 className="h3citys">Lasagne story</h4>
                            <p>Lasagne alla Bolognese, a beloved Italian dish, originated in the city of Bologna. Its history dates back to the Middle Ages, with mentions of layered pasta dishes in early Italian cookbooks. However, the modern Bolognese version, featuring flat lasagna noodles layered with a rich meat sauce (ragù) made from beef, pork, and tomatoes, gained prominence in the 18th century. This hearty and flavorful dish became a staple of Italian cuisine, eventually spreading internationally. Its combination of tender pasta and savory sauce, typically interlaced with béchamel and Parmesan cheese, has made Lasagne alla Bolognese a symbol of Italian comfort food, cherished by food enthusiasts worldwide.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="dishnames">3.Fettucine al Pomodoro</h1>
                        <img className="Fettucinepic" height='450px' src="https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Top-Italian-Dishes-Fettuccine-al-Pomodoro.jpg" />
                        <div className="Fettucineinfo">
                            
                            <h4 className="h3citys">Fettucine al Pomodoro story</h4>
                            <p> 
Fettuccine al Pomodoro, a classic Italian pasta dish, has a simple yet delicious history. It hails from central Italy, where fresh, ripe tomatoes abound. The dish features wide ribbons of fettuccine pasta bathed in a vibrant tomato sauce. The sauce is typically made with tomatoes, garlic, basil, and olive oil, often with a touch of red pepper flakes for a hint of heat. This uncomplicated yet flavorful combination highlights the essence of Italian cuisine—quality ingredients prepared with care. Fettuccine al Pomodoro is a timeless favorite, celebrated for its exquisite taste and the way it captures the essence of Italian culinary traditions.  </p>
                        </div>
                    </div>

                    <div>
                        <h1 className="dishnames">4.Tiramisu</h1>
                        <img className="Tiramisupic" height='450px' src="https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Tiramis%C3%B9.jpg" />
                        <div className="Tiramusuinfo">
                            
                            <h4 className="h3citys">Tiramisu story</h4>
                            <p>The word soufflé comes from the French verb ‘to blow’ and, as the name suggests, this is a light, airy dessert. The dish dates back to the early 18th century and nowadays is a staple on dessert menus around the world. The crispy chocolatey crust is perfect for letting the creamy chocolate ooze out for a rich surprise. However, it doesn’t have to be sweet. In fact, cheese soufflés are just as delicious if you’re looking for something a little saltie.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="dishnames">5.Pannacotta</h1>
                        <img className="Pannacottapic" height='450px' src="https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/08/Pannacotta.jpg" />
                        <div className="Pannacottainfo">
                          
                            <h4 className="h3citys">Pannacotta story</h4>
                            <p> Panna cotta, a delectable Italian dessert, has a history rooted in the Piedmont region of Northern Italy. Its name translates to "cooked cream," which aptly describes its main ingredient. Panna cotta is believed to have ancient origins, with early variations using fish gelatin instead of modern-day gelatin or agar-agar. In the 20th century, it gained popularity and evolved into the creamy, silky dessert we know today. The classic preparation involves simmering cream, sugar, and vanilla, then setting it with gelatin. The result is a delicate, wobbly custard that's often served with fruit coulis or caramel. Panna cotta remains a symbol of Italian elegance and culinary mastery, celebrated for its simplicity and luscious texture. </p>
                        </div>
                    </div>

                </body>
            </div>

        </Container>


    )
}
