import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {AppContainer } from "react-hot-loader"

import { Router,browserHistory } from 'react-router-dom'
import store from './store/configureStore'
import Routers from "./routes/index";
//解决移动端300毫秒延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

import 'normalize.css'
import './layouts/less/base.less'
// import 'amazeui-touch/dist/amazeui.touch.min.css'

render(
    <Provider store={store}>
      <Routers/>
    </Provider>,
    document.getElementById('root')
)
if (module.hot) {
    module.hot.accept(()=> {
      ReactDOM.render(
          <AppContainer>
            <Provider store={store}>
              <Routers/>
            </Provider>
          </AppContainer>,
          document.getElementById('root')
      );
    });
}
