import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { Navbar, Footer, PageLoader } from "./component";
import {
  Home,
  Job,
  Redeem,
  History,
  Research,
  Login,
  Register,
  User,
} from "./view";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Suspense fallback={<PageLoader></PageLoader>}>
          <Switch>
            <Route path="/job" component={Job}></Route>
            <Route path="/research" component={Research}></Route>
            <Route path="/redeem" component={Redeem}></Route>
            <Route path="/history" component={History}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Suspense>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
