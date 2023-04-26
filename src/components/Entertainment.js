import React from "react"
import './Entertainment.css';
import { Container } from "react-bootstrap";


export function Entertainment() {
    return (
        <Container className="entertainmnetbackground">

            <h1 className="titlee">Entertainment in the 1930s</h1>

            <body>


                <h1 className="citynames">Television and Films</h1>

                <div className="tvphotos">
                    <div className="columntv">
                        <img width="100%" height='300px' src="https://images.mubicdn.net/images/film/919/cache-8458-1657550612/image-w1280.jpg?size=600x" />
                    </div>
                    <div className="columntv">
                        <img width="100%" height="300px" src="https://images.mubicdn.net/images/film/1758/cache-32987-1562327441/image-w1280.jpg?size=600x" />
                    </div>
                    <div className="columntv">
                        <img width="100%" height="300px" src="https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-latalante-1934/EB20001015REVIEWS0810150301AR.jpg" />
                    </div>
                    <div className="columntv">
                        <img width="100%" height="300px" src="https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/great-movie-duck-soup-1933/EB20000709REVIEWS087090301AR.jpg" />
                    </div>
                </div>
                <div>
                    <h3 className="pmat">Popular Movies and Televison of the 1930s</h3>
                    <p className="tvsummary">By the 1930s the film industry was starting to takeoff and become profitable, It was during this decade that new sound and visual revisions would be made making motion pictures much more pleasing to watch and listen to. The first half of all the movies filmed in the 1930s were filmed in black and white, It wasnt until the middle of the decade in 1935 with the release of the film "Becky Sharp (1935)" this film was the first to be released in technicolor, A new film making technique that allowed the film maker to capture more elaborate colors. This wouold be the start of an industry standerd for more then 5o years until the relolution of better technology. The 1930s produced some of the most beloved and acclaimed movies of all time, like such films as "Gone with the wind (1939)", "L'atalante (1934)" and "The wizard of oz (1939)". This is why this decade is often nostalgically labeled "The Golden Age of Hollywood" by film critics and film lovers.   </p>
                </div>

                <h1 className="citynames">Radio</h1>

                <div>
                    <div>
                        <img className="radiopic" height="500px" src="https://img.apmcdn.org/bfb4433ffd3c79b163d5ed3d137fa9bdc48069a1/uncropped/26e380-2014-11-listening-1920s2.jpg" />
                    </div>
                    <div>
                        <h3 className="pmat">The popularity of radio in the 1930s</h3>
                        <p className="tvsummary"> the 1930s were the golden age of radio. At the start of the decade 12 million American households owned a radio, and by 1939 this total had exploded to more than 28 million.As technology improved radios became smaller and cheaper. They became the central piece of furniture in the average family’s living room. Due to being one of the most common technoloiges accessable to the public, Radio during this decade was the number one way to hear news from across the country. Radio became popular this deacde due to the broadcast of very popular sporting and musical acts. After the 1930s the popularity of radio began to decline at the hands of newer, more visual technologies such as earlt model televisions</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img className="radiopic" height="500px" src="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2015/01/MFC356496.jpg" />
                    </div>
                    <div>
                        <h3 className="pmat">The popularity of Books and Comics in the 1930s</h3>
                        <p className="tvsummary">When not including technologies during the 1930s hte two most popular forms of entertainmnet were comic-books and Books, Many authors of thwe time were on hard times like many others due to the great depression, some even used some of thier own tragities and storys to influence some of the literature that would be writtin during the decade</p>
                    </div>
                </div>





            </body>

        </Container>
    )
}