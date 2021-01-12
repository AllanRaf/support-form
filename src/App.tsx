import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SupportPage } from "./pages/SupportForm/SupportForm";
import { ContactSubmitSuccessPage } from "./pages/SubmitSuccessPage/ContactSubmitSuccessPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SupportPage} />
          <Route path="/contactsent" component={ContactSubmitSuccessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
