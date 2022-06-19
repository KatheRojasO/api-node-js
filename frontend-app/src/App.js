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
import { StatusUpdate } from './Components/Status/StatusUpdate';
import { BrandUpdate } from './Components/Brand/BrandUpdate';
import { UserUpdate } from './Components/Users/UserUpdate';

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
          <Route exact path="/deviceStatus/edit/:deviceStatusId" component={StatusUpdate} />
          <Route exact path="/deviceBrand/edit/:deviceBrandId" component={BrandUpdate} />
          <Route exact path="/user/edit/:userId" component={UserUpdate} />              
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  );
}

  
