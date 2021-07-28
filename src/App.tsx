import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar, Footer, PageLoader, ScrollToTop } from "./component";
import useAuth from "./hook/useAuth";
import { useAuthSelector } from "./state/hooks";
import permissionRoutes from "./routes";

function App() {
  const { checkAuth } = useAuth();
  checkAuth();
  const { isAuthenticated } = useAuthSelector();
  const { guest, member } = permissionRoutes;

  return (
    <>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Suspense fallback={<PageLoader></PageLoader>}>
          <Switch>
            {isAuthenticated
              ? member.routes.map((route: any, idx: number) => {
                  return (
                    route.component && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => <route.component {...props} />}
                      />
                    )
                  );
                })
              : guest.routes.map((route: any, idx: number) => {
                  return (
                    route.component && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => <route.component {...props} />}
                      />
                    )
                  );
                })}
            {isAuthenticated ? (
              <Redirect to={member.redirect.path}></Redirect>
            ) : (
              <Redirect to={guest.redirect.path}></Redirect>
            )}
          </Switch>
        </Suspense>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
