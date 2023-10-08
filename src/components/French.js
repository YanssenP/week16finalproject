import React from "react"
import './French.css';
import { Container } from "react-bootstrap";


export function French() {
    return (
        <Container className="Frenchbackground">

<div className="firstdish">
                <h1>Five Favourite French dishes</h1>

                <body>

                    <div>
                        <h1 className="dishnames">1.Coq au Vin</h1>
                        <img className="sushipic" height='450px' src="https://www.expatica.com/app/uploads/sites/5/2014/05/coq-au-vin-1.jpg" />
                        <div className="Coqinfo">
                         
                            <h4 className="h3citys">Coq story</h4>
                            <p>Coq au Vin, a classic French dish, has a history rooted in rustic culinary traditions. Its origins trace back to medieval France, where it was initially known as "coq au vin jaune," made with yellow wine. Over time, it transformed into the "coq au vin" we know today, featuring chicken simmered in red wine, typically Burgundy, with mushrooms, onions, and bacon lardons. This hearty dish was originally prepared by peasants as a way to tenderize tough roosters. In the 20th century, Coq au Vin gained popularity as a symbol of French cuisine's elegance and became a staple in French bistros and kitchens worldwide, celebrated for its rich, wine-infused flavors.  </p>
                        </div>
                    </div>


                    <div>
                        <h1 className="dishnames">2.Cassoulet</h1>
                        <img className="cassouletpic" height='450px' src="https://www.expatica.com/app/uploads/sites/5/2014/05/cassoulet.jpg" />
                        <div className="cassouletinfo">
                           
                            <h4 className="h3citys">Cassoulet story</h4>
                            <p>Cassoulet is a comfort dish of white beans stewed slowly with meat. The dish typically uses pork or duck but can include sausages, goose, mutton or whatever else the chef has lying around. This peasant dish originates from southern France and is popular in Toulouse, Carcassonne, and Castelnaudary. The name of the dish comes from the pot (cassole) that it’s traditionally baked in. This pot is a staple in many French homes, highlighting the popularity of this rich, hearty meal that’s perfect for those colder months..</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="dishnames">3.Boeuf Bourguignon</h1>
                        <img className="boeufbourguignonpic" height='450px' src="https://www.expatica.com/app/uploads/sites/5/2014/05/boeuf-bourguignon.jpg" />
                        <div className="boeufbourguignoninfo">
                            
                            <h4 className="h3citys">Boeuf Bourguignon story</h4>
                            <p> Dishes don’t get much more typically French than bœuf bourguignon. The dish hails from the same region as coq au vin – that’s Burgundy in eastern France – and there are similarities between the two dishes. Bœuf bourguignon is essentially a stew made from beef braised in red wine, beef broth, and seasoned vegetables including pearl onions and mushrooms. Originally a peasant dish, this recipe is now a staple in French restaurants around the world. Traditionally, the cheap cuts of meat would be tenderized in wine for two days to intensify the flavors, although some shortcuts can be taken. Every August in Burgundy, the Fête du Charolais celebrates the dish, along with plenty of music and wine.  </p>
                        </div>
                    </div>

                    <div>
                        <h1 className="Chocolatesoufflenames">4.Chocolate Souffle</h1>
                        <img className="Chocolatesoufflepic" height='450px' src="https://www.expatica.com/app/uploads/sites/5/2014/05/chocolate-souffle.jpg" />
                        <div className="Chocolatesouffleinfo">
                            
                            <h4 className="h3citys">Chocolate Souffle history</h4>
                            <p>The word soufflé comes from the French verb ‘to blow’ and, as the name suggests, this is a light, airy dessert. The dish dates back to the early 18th century and nowadays is a staple on dessert menus around the world. The crispy chocolatey crust is perfect for letting the creamy chocolate ooze out for a rich surprise. However, it doesn’t have to be sweet. In fact, cheese soufflés are just as delicious if you’re looking for something a little saltie.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="confitdecanardnames">5.Confit de Canard</h1>
                        <img className="confitdecanardpic" height='450px' src="https://www.expatica.com/app/uploads/sites/5/2014/05/confit-de-canard.jpg" />
                        <div className="confitdecanardinfo">
                          
                            <h4 className="h3citys">Summary</h4>
                            <p> Confit de canard is a tasty French dish of duck – although some chefs use goose or pork – and is one of the finest French dishes. The meat is specially prepared using ancient preservation and slow-cooking process (confit). This sees the duck meat marinated in salt, garlic, and thyme for around 36 hours and then slow-cooked in its own fat at low temperatures. This is a healthier alternative to frying. It is typically served with confit roasted potatoes and garlic on the side. Today this dish is popular all over France, although you’ll find the best variations in the Gascony region. </p>
                        </div>
                    </div>

                </body>
            </div>

        </Container>
    )
}