import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {getDateDiff,RandomNumBoth,propOrStateIsChange} from 'utils/util'
import jsonp from 'jsonp'
import styles from './style.less'
import { Flex,WhiteSpace  } from 'antd-mobile';
const channelArr=['奇闻档案','海外网','新华网','光明网','实施趣事','新京报']
// const timeArr=['刚刚','4分钟前','1小时前','1个月前','1年前']
// const listArr=Array.from(new Array(9)).map((_val, i) => ({
//   title:`汽车里有个不起眼的小孔，平时要勤检查，疏忽了，没准要命的`,
//   imgArr:Array.from(new Array(9)).map((_val, i) => 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1447596376,3861306435&fm=26&gp=0.jpg'),
//   channel:channelArr[RandomNumBoth(0,5)],
//   comments:RandomNumBoth(0,1000),
//   time:
// }));
//listArr[1].title='汽车里有个不起眼的小孔，平时要勤检查，疏忽了，没准要命的汽车里有个不起眼的小孔，平时要勤检查，疏忽了，没准要命的';
export default class Index extends React.Component {
  constructor(...props) {
      super(...props)
  }
  state={
    listArr:[
      {
        title:`汽车里有个不起眼的小孔，平时要勤检查，疏忽了，没准要命的`,
        imgArr:Array.from(new Array(3)).map((_val, i) => 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1447596376,3861306435&fm=26&gp=0.jpg'),
        channel:channelArr[RandomNumBoth(0,5)],
        comments:RandomNumBoth(0,1000),
        time:'刚刚'
      }
    ]
  }
  componentWillMount=()=>{
    console.log('/')
    jsonp('http://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000),
      (err, res)=>{
          let listArr = [];
          for(let i=0;i<res.data.length;i++){
            // if(res.data[i].image_list.length===3){
              let obj={
                title:res.data[i].title,
                imgArr:res.data[i].image_list.map(val=>val.url),
                channel:res.data[i].source,
                comments:res.data[i].comment_count,
                time:getDateDiff(res.data[i].publish_time)
              }
              listArr.push(obj);
            // }
          }
          this.setState({
            listArr
          })
      }
    );
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return propOrStateIsChange(this,nextProps, nextState)
}
  render() {
    let {listArr}=this.state;
    console.log('///',listArr)
    return (
        <ul className={styles['news-list']}>
          {
            listArr.map((item,index)=>(
              <li key={index}>
                <h5>
                  {item.title}
                </h5>
                <WhiteSpace />
                {item.imgArr.length!=0&&
                  <Flex>
                    <Flex.Item>
                      <img src={item.imgArr[0]}/>
                    </Flex.Item>
                    <Flex.Item>
                      <img src={item.imgArr[1]}/>
                    </Flex.Item>
                    <Flex.Item>
                      <img src={item.imgArr[2]}/>
                    </Flex.Item>
                  </Flex>
                }
                <section>
                  <div>
                    <span>{item.channel}</span>
                    <span>评论</span>
                    <span>{item.comments}</span>
                  </div>
                  <div>{item.time}</div>
                </section>
              </li>
            ))
          }
        </ul>
    );
  }
}


// HomeContainer.propTypes = {
//     navMain: PropTypes.array,
//     bookDetails: PropTypes.array,
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired
// }
