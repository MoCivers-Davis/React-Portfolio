import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact";



function App() {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
            <Footer />
        </Router>
    );
}





export default App;