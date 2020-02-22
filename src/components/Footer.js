import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <p>이용약관</p>
                    <p>개인정보취급방침</p>
                    <p>점주관리자</p>
                    <p>Subway Listens</p>
                </div>
               
                <div className="footer-infomation">
                <div>
                <p>서울시 서초구 강남대로 535 프린스빌딩 15층 </p> <p>대표 : 콜린클락 </p> <p>전화 : 02-797-5036</p> <p>사업자등록번호 : 101-84-04143</p>
                <br/>
                <p>SUBWAY® is a Registered Trademark of Subway IP LLC. © 2019 Subway IP LLC. All Rights Reserved.</p>
                </div>
               <div>
               <a className="sns_instagram" href="https://www.instagram.com/subwaykorea"></a>
                <a className="sns_facebook" href="https://www.facebook.com/Subwaykr"></a>
               </div>
                </div>       
            </div>

        </div>
    );
};

export default Footer;