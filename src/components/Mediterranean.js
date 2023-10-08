import React from "react";
import "./Mediterranean.css";
import { Container } from "react-bootstrap";

export function Mediterranean() {
    return (
        <Container className="Mediterranean">
           <div className="firstdish">
                <h1>Five Favourite Mediterranean dishes</h1>

                <body>

                    <div>
                        <h1 className="dishnames">1.Moroccan Tagine</h1>
                        <img className="Moroccanpic" height='450px' src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-78b5511/theplanetd.com/images/mediterranean-food-morrocan-tagine.jpeg" />
                        <div className="Morocaninfo">
                         
                            <h4 className="h3citys">Moroccan Tagine story</h4>
                            <p>The Moroccan tagine is a culinary masterpiece with a rich history. It takes its name from the earthenware pot it's cooked in, which has a distinctive conical lid designed to circulate steam and keep dishes tender. This method of cooking has been used for centuries in North Africa. Tagines traditionally combine meats, like lamb or chicken, with a medley of spices, dried fruits, and vegetables, creating a harmonious blend of sweet and savory flavors. This dish reflects Morocco's diverse cultural influences, incorporating ingredients from Berber, Arab, and Mediterranean cuisines. Today, the tagine is a symbol of Moroccan hospitality and a globally adored culinary delight.  </p>
                        </div>
                    </div>


                    <div>
                        <h1 className="dishnames">2.Armenian Losh</h1>
                        <img className="ArmenianLoshpic" height='450px' src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-78b5511/theplanetd.com/images/mediterranean-food-meat-pattis.jpg" />
                        <div className="casArmenianLoshinfo">
                           
                            <h4 className="h3citys">Armenian Losh story</h4>
                            <p>
Losh, an Armenian flatbread, has a deep-rooted history in Armenian cuisine. It's been a staple for centuries, with its origins dating back to ancient times. Losh is characterized by its thin, unleavened dough, often made from just flour, water, and salt, rolled out and cooked on a griddle or stone surface. Traditionally, it was baked in communal ovens, often in large quantities, making it a vital part of Armenian culture and family gatherings. Losh is a versatile accompaniment to various dishes, from grilled meats to vegetables and dips. Its enduring presence in Armenian cuisine highlights its significance and the enduring connection between food, culture, and tradition.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="dishnames">3.Shakshuka</h1>
                        <img className="Shakshukapic" height='450px' src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-78b5511/theplanetd.com/images/mediterranean-food-shakshuka.jpg" />
                        <div className="Shakshukainfo">
                            
                            <h4 className="h3citys">Shakshuka story</h4>
                            <p> 
Shakshuka, a beloved Middle Eastern and North African dish, boasts a flavorful history that spans cultures and centuries. Originating from North Africa, its roots can be traced back to Tunisia. This dish features poached eggs in a spicy tomato and pepper sauce, typically seasoned with cumin, paprika, and chili peppers. Shakshuka's name is derived from Arabic, meaning "mixture," reflecting its diverse ingredients. It spread throughout the Middle East and beyond, gaining popularity as a hearty, one-pan breakfast or brunch option. Shakshuka's simplicity and bold flavors have made it a global sensation, celebrated for its versatility, comforting taste, and cultural significance in the region.  </p>
                        </div>
                    </div>

                    <div>
                        <h1 className="dishnames">4.Hummus</h1>
                        <img className="Hummuspic" height='450px' src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-78b5511/theplanetd.com/images/mediterranean-food-hummus-platter.jpeg" />
                        <div className="Hummusinfo">
                            
                            <h4 className="h3citys">Hummus history</h4>
                            <p>Hummus, a creamy dip made from mashed chickpeas, tahini, lemon juice, and garlic, has a rich history that spans millennia. Originating in the Middle East, particularly in ancient Egypt and Mesopotamia, it has been a staple food for centuries. The Arabic word "hummus" translates to "chickpea," emphasizing its primary ingredient. Hummus's popularity surged across the Mediterranean and Middle East, with regional variations emerging. In recent years, it has become a global phenomenon, appreciated for its nutritional value and versatility as a dip or spread. Beyond its culinary appeal, hummus embodies the cultural heritage of the Middle East, symbolizing unity and shared traditions.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className="dishnames">5.Paella</h1>
                        <img className="Paellapic" height='450px' src="https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/images/optimized/rev-78b5511/theplanetd.com/images/mediterranean-food-seafood-paella.jpeg" />
                        <div className="Paellainfo">
                          
                            <h4 className="h3citys">Paella story</h4>
                            <p> 
Paella, Spain's iconic rice dish, hails from the Valencia region. Its history can be traced back to the 18th century, when it was cooked over open fires by farm laborers. The word "paella" comes from the Old Valencian word for "pan." Traditional paella Valenciana features rice, saffron, rabbit, chicken, and vegetables, though seafood and mixed varieties have become popular. This dish symbolizes Spanish culture and communal dining, often prepared in large pans for family gatherings. Its fame spread globally, celebrated for the way it captures the essence of Spanish cuisine with its vibrant colors, bold flavors, and delightful social tradition. </p>
                        </div>
                    </div>

                </body>
            </div>
        </Container>
    )
}