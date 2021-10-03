
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Mealbd from './Components/Mealbd/Mealbd';
import Header from './Components/Header/Header';
import SelectedCatagory from './Components/SelectedCatagory/SelectedCatagory';
import FoodDetails from './Components/FoodDetails/FoodDetails'
import Chart from './Components/Chart/Chart';






function App() {
  return (
    <div>

      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>


          </Route>
          <Route path="/home">
            <Home></Home>


          </Route>
          <Route path="/meal">
            <Mealbd></Mealbd>


          </Route>
          <Route path="/catagori/:cataName">
            <SelectedCatagory></SelectedCatagory>



          </Route>
          <Route path="/fooddetails/:foodName">
            <FoodDetails></FoodDetails>



          </Route>
          <Route path="/chart">
            <Chart></Chart>



          </Route>
        </Switch>




      </BrowserRouter>

    </div >
  );
}

export default App;
