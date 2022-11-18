import "./Recipes.css";
import { Link, useNavigate } from "react-router-dom";
import brownies from '../images/brownies.png'
import Review from './Rev'

export default function Brownies() {

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
        <h1>Brownies</h1>
        <img src={brownies} alt='' class='strawb'/>
        <p>
        <strong>Ingredients:</strong><br></br>
          1 1/2 cups granulated sugar<br></br>
          3/4 cup all-purpose flour<br></br>
          2/3 cup cocoa powder, sifted if lumpy<br></br>
          1/2 cup powdered sugar, sifted if lumpy<br></br>
          1/2 cup dark chocolate chips<br></br>
          3/4 teaspoons sea salt<br></br>
          2 large eggs<br></br>
          1/2 cup canola oil or extra-virgin olive oil<br></br>
          2 tablespoons water<br></br>
          1/2 teaspoon vanilla<br></br><br></br>
          <strong>Instructions</strong><br></br>
          1. Preheat the oven to 325°F. Lightly spray an 8x8 baking
          dish (not a 9x9 dish or your brownies will overcook) with cooking
          spray and line it with parchment paper. Spray the parchment paper.<br></br>
          2. In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar,
          chocolate chips, and salt.<br></br>
          3. In a large bowl, whisk together the eggs,
          olive oil, water, and vanilla.<br></br>
          4. Sprinkle the dry mix over the wet mix
          and stir until just combined.<br></br>
          5. Pour the batter into the prepared pan
          (it'll be thick - that's ok) and use a spatula to smooth the top. Bake
          for 40 to 48 minutes, or until a toothpick comes out with only a few
          crumbs attached (note: it's better to pull the brownies out early than
          to leave them in too long). Cool completely before slicing.*** Store
          in an airtight container at room temperature for up to 3 days. These
          also freeze well!<br></br>
        </p>
        <button onClick={cookies} class='butt'>Leave A Review</button>

        <Review></Review>
      </body>
    </>
  );
}
