import React from 'react';

const HomeLayout = () => {
    return (
        <div className="header-content clearfix">
        <div className="header-logo">
          <a href="#sdf">subway</a>
        </div>

        <ul className="header-menu ">
          <li>
            <a href="#a">매장찾기</a>
          </li>
          <li>
            <a href="#a">가맹신청ㆍ문의</a>
          </li>
          <li>
            <a href="#a">고객센터</a>
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