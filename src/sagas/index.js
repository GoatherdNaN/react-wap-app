import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';


function* rootSaga() {
  /*The saga is waiting for a action called LOAD_DASHBOARD to be activated */
  yield [
    //Fork 执行一个非阻塞操作。
    
  ];
}

export default rootSaga;
