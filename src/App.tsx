import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { Navbar, Footer, PageLoader, ScrollToTop } from "./component";
import {
  Home,
  Job,
  Redeem,
  History,
  Research,
  Login,
  Register,
  Dashboard,
  Info,
} from "./view";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Suspense fallback={<PageLoader></PageLoader>}>
          <Switch>
            <Route path="/job" component={Job}></Route>
            <Route path="/research/:id" component={Research}></Route>
            <Route path="/redeem" component={Redeem}></Route>
            <Route path="/history" component={History}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/info" component={Info}></Route>
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
