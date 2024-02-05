import './App.css';
import calculateTotalSold from './helpers/calculate/calculateTotalSold.js';
import calculateTotalBought from './helpers/calculate/calculateTotalBought.js';
import calculateRemaining from './helpers/calculate/calculateRemaining.js';
import {bestSellingTv, inventory} from './constants/inventory';
import DisplayCalculationBlock from "./components/DisplayCalculationBlock.jsx";
import combineBrandTypeName from "./helpers/manipulateStrings/combineBrandTypeName.js";
import formatPrice from "./helpers/manipulateStrings/formatPrice.js";
import combineScreenSizes from "./helpers/manipulateStrings/combineScreenSizes.js";
import {tvNames, tvTypes} from "./constants/manipulateInventory.js";
import {sortDescending} from "./helpers/sort/sortDescending.js";
import {sortAscending} from "./helpers/sort/sortAscending.js";
import determineIconForOption from "./helpers/determineIcon/determineIconForOption.jsx";
import DisplayTvBlock from "./components/DisplayTvBlock.jsx";
import TechItEasy from './assets/svg/TechItEasy.jsx';

function App() {
  return (
      <>
          <h1><TechItEasy /> </h1>
          <div className="bought-sold">
              <DisplayCalculationBlock label="Total Sold" value={calculateTotalSold(inventory)} color="green"
                                       styling={"numberBlock backGroundcolorRed skewedBlock"}/>
              <DisplayCalculationBlock label="Total Bought" value={calculateTotalBought(inventory)} color="blue"
                                       styling={"numberBlock backgroundColorYellow skewedBlock"}/>
              <DisplayCalculationBlock label="Remaining" value={calculateRemaining(inventory)} color="red"
                                       styling={"numberBlock backgroundColorGreen skewedBlock"}/>
          </div>
          <div className="best-selling-tv-outer">
              <DisplayTvBlock url={bestSellingTv.sourceImg}
                              title={combineBrandTypeName(bestSellingTv)}
                              price={formatPrice(bestSellingTv.price)}
                              screenSizes={combineScreenSizes(bestSellingTv)}
                              styling={"best-selling-tv-inner"}/>
          </div>
          <div class="btn-block">
              <button onClick={() => console.log(sortDescending(inventory, 'sold'))}>Meest verkocht eerst</button>
              <button onClick={() => console.log(sortAscending(inventory, 'price'))}>Goedkoopste eerst</button>
              <button onClick={() => console.log(sortDescending(inventory, 'refreshRate'))}>Meest geschikt voor sport
                  eerst
              </button>
          </div>


          {
              inventory.map((tv, index) => (
                  <div className="outer-other-tvs-box" key={index}>

                      <DisplayTvBlock url={tv.sourceImg}
                                      title={combineBrandTypeName(tv)}
                                      price={formatPrice(tv.price)}
                                      screenSizes={combineScreenSizes(tv)}
                                      object={tv}
                                      styling={"inner-other-tvs-box"}
                      />
                  </div>
              ))
          }


      </>
  )
}


export default App
