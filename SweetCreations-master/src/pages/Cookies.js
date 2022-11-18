import "./Recipes.css";
import { Link, useNavigate } from "react-router-dom";
import cookie from '../images/cookie.png'
import Review from './Rev'

export default function Cookies() {
  
  const navigate = useNavigate()

  function cookies(e){
    navigate('/Review');
  }

  return (
    <>
      <div class="header">
        <Link to="/Home" class="logoheader">
          Sweet
          <br></br>
          Creations
        </Link>
      </div>

      <br></br>
      <body class="body">
        <br></br>
        <h1>Chocolate Chip Cookies</h1>
        <img src={cookie} alt='' class='strawb'/>
        <p>
        <strong>Ingredients:</strong><br></br>
            1 cup salted butter softened<br></br>
            1 cup white (granulated) sugar<br></br>
            1 cup light brown sugar packed<br></br>
            2 tsp pure vanilla extract<br></br>
            2 large eggs<br></br>
            3 cups all-purpose flour<br></br>
            1 tsp baking soda<br></br>
            ½ tsp baking powder<br></br>
            1 tsp sea salt<br></br>
            2 cups chocolate chips (or chunks, or chopped chocolate)<br></br><br></br>
            <strong>Instructions:</strong><br></br>
          1. Preheat oven to 375 degrees F. Line a baking pan with parchment paper
          and set aside.<br></br>
          2. In a separate bowl mix flour, baking soda, salt, baking
          powder. Set aside.<br></br>
          3. Cream together butter and sugars until combined.<br></br>
          4. Beat in eggs and vanilla until fluffy.<br></br>
          5. Mix in the dry ingredients until combined.<br></br>
          6. Add 12 oz package of chocolate chips and mix well.<br></br>
          7. Roll 2-3 TBS (depending on how large you like your cookies) of dough
          at a time into balls and place them evenly spaced on your prepared
          cookie sheets. (alternately, use a small cookie scoop to make your
          cookies).<br></br>
          8. Bake in preheated oven for approximately 8-10 minutes. Take
          them out when they are just BARELY starting to turn brown.<br></br>
          9. Let them sit on the baking pan for 2 minutes before removing to cooling rack.<br></br>
        </p>
        <button onClick={cookies} class='butt'>Leave A Review</button>
        <Review></Review>
      </body>
    </>
  );
}
