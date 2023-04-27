import React from "react";
import "./Event.css";
import { Container } from "react-bootstrap";

export function Event() {
    return (
        <Container className="eventb">
            <div>
                <h1 className="titleevent">Significant Events of the 1930s</h1>
            </div>
            <div>
                <h1 className="eventh">The Hindinburg Disaster</h1>
            </div>
            <div className="centerauto">

                <img className="autopics" height='450px' src="https://www.gannett-cdn.com/-mm-/2991231af257ab114339975f7d7b4da7f2d96209/c=0-313-2909-1957/local/-/media/2015/05/06/USATODAY/USATODAY/635665085108581658-hindenburgx0008.jpg" />
                <p className="eventp">One of the most famous events around the world in the 1930s was the Hindenburg disaster, The Hindenburg was an 800-foot zeppelin shaped airship which could travel at 84 miles per hour at top speed and at the time was the largest airship in the entire world. The airship was manufactured and launched by the country Germany.  The airship was a modern wonder at the time, the zeppelin was filled with hydrogen gas.  While traveling across the eastern united states, Live on television the Hindenburg zeppelin became ingulfed in flames and would crash on an airfield in new jersey tragically killing 26 passengers and crew members.</p>
            </div>


            <div>
                <h1 className="eventh">The Dust Bowl 1930</h1>
            </div>
            <div className="centerauto">

                <img className="autopics" height='450px' src="https://drought.unl.edu/Images/DustBowl/DB6.png" />
                <p className="eventp">The dust bowl was a natural disaster which brought devastating drought and strong winds which stretched across most of the Midwest and the southern border of Canada. These storms and droughts caused significant damage to the ecology and agriculture. Most affected were the wheat and maize production which dropped by over 48% in one year alone. Another devastating fact about the dust bowl is that it left over 2 million Americans homeless and starving. </p>
            </div>

            <div>
                <h1 className="eventh">The end of the prohibition 1933</h1>
            </div>
            <div className="centerauto">

                <img className="autopics" height='450px' src="https://www.whizzpast.com/wp-content/uploads/2015/02/best1930spics.jpg" />
                <p className="eventp">One of the most famous events of the early 1930s was the prohibition, which made illegal the sale of all alcohol and stopped all manufacturing of any alcohol goods. The United States government in early 1920s passed the 18th amendment which included a strict punishable law which banned the sale of all alcohol. The ban of all alcohol had a very large group of citizens who did not support and even rebelled against the prohibition. The prohibition ended on December 5 1933 when the 21st amendment was introduced putting an end to the prohibition. </p>
            </div>


        </Container>
    )
}