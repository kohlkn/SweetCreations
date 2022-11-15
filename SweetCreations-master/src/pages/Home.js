import './Home.css';
//import Button from './components/button';
import cake from '../images/cake.png'
import strawb from '../images/strawb.png'
import cookie from '../images/cookie.png'
import brownies from '../images/brownies.png'
import pie from '../images/pie.png'
import { useNavigate } from 'react-router-dom'


export default function Home() {

  const navigate = useNavigate()

  function handleClick(e){
    navigate('/Login');
  }

  function strawberrycupcakes(e){
    navigate('/StrawberryCupcakes');
  }

  function cookies(e){
    navigate('/Cookies');
  }

  function brownie(e){
    navigate('/Brownies');
  }

  return (
    <>
      <header class='head'>
        <label class='logo'>
            Sweet
            <br></br>
            Creations
        </label>
        <div class='topbutt'>
          <button onClick={handleClick} class='butt'>Log in / sign up</button>
        </div>
      </header>

      <body class='bod'>
        <div class='body-container'>
          <div class='left'>
            <h1>Hi There!</h1>
            <h2>Welcome to Sweet Creations! Discover delicious homemade recipes for cakes, cookies, muffins, small batch baking, and more!</h2>
          </div>
          <div class='right'>
          <img src={cake} alt='' class='cake'/>
          </div>
        </div>

        <div class='bod'>
          <div class='body-container'>
            <div class='left'>
              <center>
              <h1>
                Strawberry
                <br></br>
                Cupcakes
              </h1>
              <h2>Soft, fluffy, and moist, these fresh Strawberry Cupcakes will melt in your mouth!</h2>
              <button onClick={strawberrycupcakes} class='butt'>View Recipe</button>
              </center>
            </div>
            <div class='right'>
              <img src={strawb} alt='' class='strawb'/>
            </div>
          </div>
        </div>

        <div class='bod'>
          <div class='body-container'>
            <div class='right'>
              <img src={cookie} alt='' class='strawb'/>
            </div>
            <div class='left'>
              <center>
              <h1>
                Chocolate Chip
                <br></br>
                Cookies
              </h1>
              <h2>These are everything a chocolate chip cookie should be. Crispy and chewy. Doughy yet fully baked. Perfectly buttery and sweet.</h2>
              <button onClick={cookies} class='butt'>View Recipe</button>
              </center>
            </div>
          </div>
        </div>

        <div class='bod'>
          <div class='body-container'>
            <div class='right'>
              <img src={brownies} alt='' class='strawb'/>
            </div>
            <div class='left'>
              <center>
              <h1>
                Brownies
              </h1>
              <h2>The Best Brownie Recipe Ever has the perfect crackly top with bites of fudgy, chewy chocolate goodness. This easy one-bowl recipe means you'll never buy a boxed brownie mix again!</h2>
              <button onClick={brownie} class='butt'>View Recipe</button>
              </center>
            </div>
          </div>
        </div>

        <div class='last'>
          <img src={pie} alt='' class='strawb'/>
        </div>
      </body>

      <footer class='foot'>
        <label class='logo'>
            Sweet
            <br></br>
            Creations
        </label>
        <div class='flex-container'>
          <label class='git'>Get in Touch</label>

          <div>
            <h1>Mailing Address</h1>
            <h2>
              123 Anywhere St Any City, State,
              <br></br>
              Country 12345
            </h2>
          </div>

          <div>
            <h1>Email Address</h1>
            <h2>hello@reallygreatsite.com</h2>
          </div>

          <div>
            <h1>Phone Number</h1>
            <h2>(123) 456 7890</h2>
          </div>
        </div>

      </footer>
    </>
  );
}