import './App.css';
import calculateTotalSold from './helpers/calculate/calculateTotalSold.js';
import calculateTotalBought from './helpers/calculate/calculateTotalBought.js';
import {bestSellingTv, inventory} from './constants/inventory';
import DisplayCalculationBlock from "./components/DisplayCalculationBlock.jsx";
import combineBrandTypeName from "./helpers/manipulateStrings/combineBrandTypeName.js";
import formatPrice from "./helpers/manipulateStrings/formatPrice.js";
import combineScreenSizes from "./helpers/manipulateStrings/combineScreenSizes.js";
import {tvNames, tvTypes} from "./constants/manipulateInventory.js";
import {sortDescending, sortDescendingByLargestTvSize} from "./helpers/sort/sortDescending.js";
import {sortAscending} from "./helpers/sort/sortAscending.js";

import DisplayTvBlock from "./components/DisplayTvBlock.jsx";
import TechItEasy from './assets/svg/TechItEasy.jsx';
import {calculateRemainingTotal} from "./helpers/calculate/calculateRemaining.js";

function App() {
  return (
      <>

              ))
          }


      </>
  )
}


export default App
