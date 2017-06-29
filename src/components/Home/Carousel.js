import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel} from 'antd-mobile'
import styles from './style.less'
import pic1 from 'layouts/images/1.jpg'
import pic2 from 'layouts/images/2.jpg'
import pic3 from 'layouts/images/3.jpg'
import pic4 from 'layouts/images/4.jpg'
export default class Index extends React.Component {
  state = {
    data: [],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [pic1,pic2,pic3,pic4]
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
        <Carousel
          className={styles["my-carousel"]}
          autoplay
          infinite
          selectedIndex={0}
          swipeSpeed={35}
        >
          {this.state.data.map((item,index) => (
            <a href="http://www.baidu.com" key={index} style={hProp}>
              <img
                src={item}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}


// HomeContainer.propTypes = {
//     navMain: PropTypes.array,
//     bookDetails: PropTypes.array,
//     match: PropTypes.object.isRequired,
//     location: PropTypes.object.isRequired
// }
