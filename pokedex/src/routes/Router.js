import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/pokedex'>
          <PokedexPage />
        </Route>

        <Route
          exact path="/pokemon/:name/:telaPokedex?"
          component={DetailsPage}
        />

        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
