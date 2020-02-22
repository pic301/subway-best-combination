import React from 'react';
import { Link } from 'react-router-dom'

const HomeLayout = () => {

  const prepareAlert = () =>{
    alert("아직 준비중입니다")
  }
    return (
        <div className="header-content clearfix">
        <div className="header-logo">
          <Link className="header-link" to="/">subway</Link>
        </div>

        <ul className="header-menu ">
          <li>
            <Link to="/store">매장찾기</Link>
          </li>
          <li>
            <Link to="/franchiseInquiry">꿀조합신청ㆍ문의</Link>
          </li>
          <li>
            <Link onClick={prepareAlert} to="##">고객센터</Link>
          </li>
          <li>
            <a
              className="global_subway"
              href="http://www.subway.com/en-us/exploreourworld"
              target="_blank"
              rel="noopener noreferrer"
              title="Global Subway"
            >
              Global Subway
            </a>
          </li>
        </ul>
      </div>
    )
}
export default HomeLayout;