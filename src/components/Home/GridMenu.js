import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router-dom'

import styles from './style.less'

export default class Index extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	index:0
	  }
	}

  swipeCategory=(e)=>{
    console.log(e.target.getAttribute("data-index"))
		e.preventDefault();
		e.stopPropagation();
	}

  slide=()=>{
    console.log('//')
  }

	render(){
		const opt = {
      continuous:false,
			callback:(index)=>{
				this.setState({
					index
				})
			}
		}
		return (
				<div className={styles["home-category"]}>
					<ReactSwipe swipeOptions={opt} slide={this.slide}>
						<div className={styles["carousel-item"]}>
							<ul className='clear-fix'>
                <Link to="/search/meishi"><li className={styles["meishi"]+" float-left"}>美食</li></Link>
                <Link to="/search/dianying"><li className={styles["dianying"]+" float-left"}>电影</li></Link>
                <Link to="/search/jiudian"><li className={styles["jiudian"]+" float-left"}>酒店</li></Link>
                <Link to="/search/xuixianyule"><li className={styles["xiuxianyule"]+" float-left"}>休闲娱乐</li></Link>
                <Link to="/search/waimai"><li className={styles["waimai"]+" float-left"}>外卖</li></Link>
                <Link to="/search/huoguo"><li className={styles["huoguo"]+" float-left"}>火锅</li></Link>
                <Link to="/search/liren"><li className={styles["liren"]+" float-left"}>丽人</li></Link>
                <Link to="/search/zhoubianyou"><li className={styles["zhoubianyou"]+" float-left"}>周边游</li></Link>
                <Link to="/search/ktv"><li className={styles["ktv"]+" float-left"}>KTV</li></Link>
                <Link to="/search/jiehun"><li className={styles["hunshasheying"]+" float-left"}>婚纱摄影</li></Link>
							</ul>
						</div>
						<div className={styles["carousel-item"]}>
							<ul className='clear-fix'>
                <Link to="/search/shenghuofuwu"><li className={styles["shenghuofuwu"]+" float-left"}>生活服务</li></Link>
                <Link to="/search/jingdian"><li className={styles["jingdian"]+" float-left"}>景点</li></Link>
                <Link to="/search/aiche"><li className={styles["aiche"]+" float-left"}>爱车</li></Link>
                <Link to="/search/jianshenyundong"><li className={styles["yundongjianshen"]+" float-left"}>运动健身</li></Link>
                <Link to="/search/gouwu"><li className={styles["gouwu"]+" float-left"}>购物</li></Link>
                <Link to="/search/qinzi"><li className={styles["qinzi"]+" float-left"}>亲子</li></Link>
                <Link to="/search/jiazhuang"><li className={styles["jiazhuang"]+" float-left"}>家装</li></Link>
                <Link to="/search/xuexipeixun"><li className={styles["xuexipeixun"]+" float-left"}>学习培训</li></Link>
                <Link to="/search/zizhucan"><li className={styles["zizhucan"]+" float-left"}>自助餐</li></Link>
                <Link to="/search/quanbufenlei"><li className={styles["quanbufenlei"]+" float-left"}>全部分类</li></Link>
							</ul>
						</div>
					</ReactSwipe>
					<div className={styles["index-container"]}>
						<ul>
							<li className={this.state.index === 0 ? styles["selected"] : ''} data-index="0" onClick={this.swipeCategory}></li>
							<li className={this.state.index === 1 ? styles["selected"] : ''} data-index="1" onClick={this.swipeCategory}></li>
						</ul>
					</div>
				</div>
			)
	}


}


// HomeContainer.propTypes = {
//     navMain: PropTypes.array,
//     bookDetails: PropTypes.array,
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired
// }
