import { Switch, Route, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";
const Routes = ({ dogs }) => {
    return (
        <Switch>
            <Route exact path="/dogs">
                <h1>Select a dog from the nav bar!</h1>
            </Route>
            <Route exact path="/dogs/:name">
                <DogDetails dogs={dogs} />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
};
export default Routes;
