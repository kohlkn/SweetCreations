import "./Recipes.css";
import { Link, useNavigate } from "react-router-dom";
import strawb from '../images/strawb.png'

export default function StrawberryCupcakes() {
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
        <h1>Strawberry Cupcakes</h1>
        <img src={strawb} alt='' class='strawb'/>
        <p>
          <strong>Ingredients For the Cupcakes:</strong><br></br>
          3 cups all-purpose flour (360g)<br></br>
          2 teaspoons baking powder<br></br>
          ¼ teaspoon baking soda<br></br>
          ½ teaspoon salt <br></br>
          1 cup butter unsalted room temperature (227g)<br></br>
          1 ½ cups granulated sugar (300g)<br></br>
          3 large eggs<br></br>
          1 tablespoon vanilla extract<br></br>
          ½ cup sour cream room temperature (120g)<br></br>
          ½ cup whole milk room temperature (120ml)<br></br>
          1 cup fresh strawberries finely chopped (220g)<br></br>
          1 drop soft pink food coloring optional<br></br><br></br>
          <strong>For the Strawberry Buttercream:</strong><br></br>
          1 ½ cups unsalted butter room temperature (340g)<br></br>
          ¼ teaspoon salt<br></br>
          6 cups powdered sugar (720g)<br></br>
          6 tablespoons pureed fresh strawberries (about 6 large berries/90ml)<br></br>
          ½ teaspoon vanilla extract<br></br><br></br>
          <strong>Instructions For the Cupcakes:</strong><br></br>
          1. Preheat the oven to 350F.<br></br>
          2. Line two 12-cup muffin pans with cupcake liners.<br></br>
          3. In a medium bowl, whisk together the flour, baking powder,
          baking soda, and salt.<br></br>
          4. In a large mixing bowl or the bowl of a stand
          mixer fitted with the paddle attachment, beat the butter on medium
          speed until creamy.<br></br>
          5. Add the sugar and beat until very light and fluffy, about 5 minutes.<br></br>
          6. Add the eggs, one at a time, beating until fully incorporated before
          adding the next. Stop and scrape down the
          bowl between each egg. Beat in the vanilla.<br></br>
          7. Stir together the sour
          cream and whole milk in a measuring cup or medium mixing bowl.<br></br>
          8. With the mixer on low speed, gradually add a third of the flour mixture to
          the butter mixture followed by half of the sour cream mixture. Repeat,
          alternating between the flour and sour cream. Scrape down the bowl.<br></br>
          9. Beat in the chopped strawberries and food coloring, if using. Divide
          the batter among the cupcake liners. (About ¼ cup per liner.)<br></br>
          10. Bake one pan at a time for 20 to 25 minutes or until a toothpick inserted into
          the center comes out clean. Let cool for a few minutes in the pan,
          then remove the cupcakes and continue cooling on a wire rack.<br></br><br></br>
          <strong>For the Strawberry Buttercream:</strong><br></br>
          1. In a large mixing bowl or the bowl of a stand
          mixer fitted with the whisk attachment, beat the butter and salt on
          medium speed until very creamy and pale, about 5 minutes. <br></br>
          2. With the mixer on low speed, gradually add in the powdered sugar and strawberry
          puree until fluffy combined. Stop and scrape down the bowl as
          needed.<br></br>
          3. Add the vanilla. Increase speed to medium and beat until
          fluffy and very spreadable, about 1 minute.<br></br>
          4. Transfer to a piping bag
          fitted with a decorative tip and pipe the frosting on top of the
          cooled cupcakes.<br></br>
          5. Garnish with fresh strawberries, if desired. Cupcakes
          can be stored in an airtight container at room temperature without the
          garnish for up to 3 days or refrigerated for up to 1 week.<br></br>
        </p>
      </body>
    </>
  );
}
