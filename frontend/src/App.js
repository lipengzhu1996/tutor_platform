import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer, { DEFAULT_STATE } from './reducers'

import Header from './components/Home/Nav0';
import Footer from './components/Home/Footer1';
import HomePageContainer from './components/HomePageContainer';
import TutorListContainer from './components/TutorListContainer';
import TutorInfoContainer from './components/TutorInfoContainer';
import TutorRegistrationContainer from './components/TutorRegistrationContainer';

import {
  Nav00DataSource,
  Footer10DataSource,
} from './components/Home/data.source.js';
import LoginSignupContainer from './components/LoginSignupContainer';

const store = createStore(rootReducer, DEFAULT_STATE, applyMiddleware(thunk))

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    const homePageComponent = props => <HomePageContainer {...props} />
    const tutorListComponent = props => <TutorListContainer {...props} />
    const tutorInfoComponent = props => <TutorInfoContainer {...props} />
    const tutorRegistrationComponent = props => <TutorRegistrationContainer {...props} />
    const loginComponent = props => <LoginSignupContainer {...props} />

    return (
      <div>
        <Router>
          <Provider store={store}>
            <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
            <Route exact path="/" component={homePageComponent} />
            <Route exact path="/tutors" component={tutorListComponent} />
            <Route exact path="/tutor" component={tutorInfoComponent} />
            <Route exact path="/registration" component={tutorRegistrationComponent} />
            <Route exact path="/log_in" component={loginComponent} />
            <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
          </Provider>
        </Router>
      </div>
    );
  }
}

export default App
