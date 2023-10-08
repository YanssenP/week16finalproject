import React from "react"
import './Asian.css';
import { Container } from "react-bootstrap";


export function Asian() {
    return (


        <Container >

            <div className="firstdish">
                <h1>Five Favourite Asian dishes</h1>

                <body>

                    <div>
                        <h1 className="dishnames">1.Sushi</h1>
                        <img className="sushipic" height='450px' src="https://www.timeoutabudhabi.com/cloud/timeoutabudhabi/2021/10/11/4vZtdEPY-best-sushi-abu-dhabi-holding-1200x900.jpg" />
                        <div className="sushiinfo">
                         
                            <h4 className="h3citys">Sushi story</h4>
                            <p>Sushi, an iconic Japanese dish, has a rich history dating back over a thousand years. Its origins can be traced to ancient Southeast Asia, where people preserved fish in fermented rice. In Japan, sushi evolved into a culinary art form during the Edo period (17th-19th centuries). Edo-style sushi featured vinegared rice combined with fresh seafood, emphasizing the natural flavors of the ingredients.Sushi became popular globally in the 20th century, with innovations like the California roll. Today, it's a symbol of precision, craftsmanship, and Japanese culinary culture enjoyed worldwide.  </p>
                        </div>
                    </div>


                    <div>
                        <h1 className="dishnames">2.Dim Sum</h1>
                        <img className="dimsumpic" height='450px' src="https://cdn.britannica.com/55/234755-050-ED5FBC23/dim-sum-chopsticks.jpg" />
                        <div className="dimsuminfo">
                           
                            <h4 className="h3citys">Dim Sum story</h4>
                            <p>Starting in the early part of the 1930s, Chicago would be introduced and soon after become the capital of organized crime, with citizens being publicly terrorized and innocent people offten becoming the victems of senslese violence as a result of disputes and tension of the crime families who occupied the city.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="dishnames">3.satay</h1>
                        <img className="sataypic" height='450px' src="https://www.chefspencil.com/wp-content/uploads/Satay.jpeg.webp" />
                        <div className="satayinfo">
                            
                            <h4 className="h3citys">Satay story</h4>
                            <p> Satay, a popular Southeast Asian dish, has a history deeply rooted in Indonesian and Malaysian cultures. Its origins can be traced back over a century to the Indonesian island of Java, where it was known as "sate." The dish typically consists of skewered and grilled meat, such as chicken, beef, or lamb, served with a flavorful peanut sauce and often accompanied by rice cakes or vegetables.  </p>
                        </div>
                    </div>

                    <div>
                        <h1 className="Ramennames">4.Ramen</h1>
                        <img className="ramenpic" height='450px' src="https://i0.wp.com/myspicetrunk.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-15-at-2.30.33-PM.jpeg?w=1359&ssl=1" />
                        <div className="Rameninfo">
                            
                            <h4 className="h3citys">Ramen story</h4>
                            <p>Ramen, the beloved Japanese noodle dish, has a history that originated in China before becoming a culinary sensation in Japan. It was introduced to Japan in the late 19th century by Chinese immigrants. Early Japanese ramen was served in soy-based broths with Chinese-style wheat noodles.Today, ramen is celebrated for its delicious and comforting combination of noodles, broth, and toppings.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="phonames">5.Pho</h1>
                        <img className="phopic" height='450px' src="https://www.chefspencil.com/wp-content/uploads/Pho-Vietnam.jpeg.webp" />
                        <div className="phoinfo">
                          
                            <h4 className="h3citys">Pho story</h4>
                            <p> Pho, a Vietnamese culinary treasure, has a history intertwined with Vietnam's complex past. Originating in the early 20th century in northern Vietnam, pho evolved from French colonial influences and Chinese noodle soups. The dish consists of rice noodles in a flavorful, aromatic broth, usually made from simmering beef or chicken with fragrant herbs and spices like star anise and cinnamon. After the partition of Vietnam in 1954, pho spread throughout the country and eventually gained international popularity. Today, it is a symbol of Vietnamese cuisine, celebrated for its harmonious blend of French, Chinese, and indigenous flavors, and enjoyed by people worldwide for its comforting, savory essence. </p>
                        </div>
                    </div>

                </body>
            </div>
        </Container >



    )
}