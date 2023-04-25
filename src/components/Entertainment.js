import React from "react"
import './Entertainment.css';
import { Container } from "react-bootstrap";


export function Entertainment() {
    return (
        <Container className="entertainmnetbackground">

            <h1>Entertainment in the 1930s</h1>

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
                    <h3>Popular Movies and Televison of the 1930s</h3>

                    <h4>Summary</h4>


                </div>





            </body>

        </Container>
    )
}