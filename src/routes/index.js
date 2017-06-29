import React from 'react'
import { connect } from 'react-redux'
import {HashRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import {Browser} from 'utils/util'
// bundle模型用来异步加载组件
import Bundle from '../bundle';

// 不需要异步加载的组件
import FooterContainer from '../containers/Footer/index';

import HomeContainer from 'bundle-loader?lazy!../containers/Home/index'
import MovieContainer from 'bundle-loader?lazy!../containers/Movie/index'
import DiscoverContainer from 'bundle-loader?lazy!../containers/Discover/index'
import MineContainer from 'bundle-loader?lazy!../containers/Mine/index'

const Home = (props)=> (
	<Bundle load={HomeContainer}>
		{(Home)=><Home history={props.props.history}/>}
	</Bundle>
)
const Movie = (props)=> (
	<Bundle load={MovieContainer}>
		{(Movie)=><Movie history={props.props.history}/>}
	</Bundle>
)
const Discover = (props)=> (
	<Bundle load={DiscoverContainer}>
		{(Discover)=><Discover history={props.props.history}/>}
	</Bundle>
)
const Mine = (props)=> (
	<Bundle load={MineContainer}>
		{(Mine)=><Mine history={props.props.history}/>}
	</Bundle>
)
@connect (state => state)
export default class Routers extends React.Component {
  constructor(props, context) {
      super(props, context);
      // this.state = {
      //     initDone: false
      // }
  }
  render() {
      const history = createBrowserHistory();
      return (
          <Router history={history}>
              <div id='app'>
                <Switch>
										<Route exact path="/" render={() => (
										    <Redirect to="/home"/>
											)}
										/>
	                  <Route
	    								path="/home"
	    								render={props=>(
	    									<Home props={props} />
	    								)}
	    							/>
	                  <Route
	    								path="/movie"
	    								render={props=>(
	    									<Movie props={props} />
	    								)}
	    							/>
	                  <Route
	    								path="/discover"
	    								render={props=>(
	    									<Discover props={props} />
	    								)}
	    							/>
	                  <Route
	    								path="/mine"
	    								render={props=>(
	    									<Mine props={props} />
	    								)}
	    							/>
                </Switch>
								<Route
									render={props=>(
										<FooterContainer props={props} />
									)}
								/>
							</div>
        </Router>
    );
  }
}
