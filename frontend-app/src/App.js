import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Devices } from './Components/Devices/Devices';
import { Users } from './Components/Users/Users';
import { Inventory } from './Components/Inventory/Inventory';
import { Header } from './Components/Header';
import { Brand } from './Components/Brand/Brand';
import { Status } from './Components/Status/Status';
import { InventoryUpdate } from './Components/Devices/InventoryUpdate';

export const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Inventory} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/brand" component={Brand} />
          <Route exact path="/devices" component={Devices} />
          <Route exact path="/status" component={Status} />
          <Route exact path="/inventory/edit/:inventoryId" component={InventoryUpdate} />          
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
}

  
