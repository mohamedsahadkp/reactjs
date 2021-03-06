import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Movie from "./components/movie/movie";
import MovieDetails from "./components/movie/movieDetails";
import MovieFrom from "./components/movie/movieForm";

import NavBar from "./components/navBar";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <Switch>
          <Route
            path="/registration"
            component={RegistrationForm}
            exact
          ></Route>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/login" component={LoginForm} exact></Route>
          <Route path="/home" component={Home} exact></Route>
          <Route path="/movies" component={Movie} exact></Route>
          <Route path="/movies/new" component={MovieFrom} exact></Route>
          <Route path="/movies/:id?" component={MovieDetails} exact></Route>
          <Route
            path="/about-us"
            component={(props) => (
              <AboutUs sortBy="test-message" {...props}></AboutUs>
            )}
            exact
          ></Route>
          <Route path="/not-found" component={NotFound} exact></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
