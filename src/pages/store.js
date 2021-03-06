/*global kakao*/
import React, { Component } from "react";
import "./store.css";

// ========================================
//     MaterialUI
// ========================================
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';


const styles = (theme) => ({
  root: {
    
  },
  title: {
    fontSize: "2rem",
    fontWeight:"bold",
    color:"#ffc20e"
  },

});

class store extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      markers: []
    };
  }
  handelKeywordChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };
  LoadMap = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=3ecbfeb0764c3466dfe8072131d55e7e&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        let el = document.getElementById("map");

        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        });
        // 장소 검색 객체를 생성합니다
        let ps = new kakao.maps.services.Places();
        //검색결과 목록이나 마커를 클릭했을때 장소명을 표출할 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        // 키워드 검색을 요청하는 함수입니다
        const searchPlaces = () => {
          let keyword = `${this.state.keyword}써브웨이`;
          this.setState({ keyword: this.state.keyword });
          if (!keyword.replace(/^\s+|\s+$/g, "")) {
            alert("키워드를 입력해주세요!");
            return false;
          }

          // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
          ps.keywordSearch(keyword, placesSearchCB);
        };
        // 키워드로 장소를 검색합니다
        searchPlaces();

        //===========================================
        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        //===========================================

        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면
            // 검색 목록과 마커를 표출합니다
            displayPlaces(data);
            displayPagination(pagination);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색 결과가 존재하지 않습니다.");
            return;
          } else if (status === kakao.maps.services.Status.ERROR) {
            alert("검색 결과 중 오류가 발생했습니다.");
            return;
          }
        }

        //=========================================
        // 검색 결과 목록과 마커를 표출하는 함수입니다
        //=========================================

        const displayPlaces = places => {
          var listEl = document.getElementById("placesList"),
            menuEl = document.getElementById("menu_wrap"),
            fragment = document.createDocumentFragment(),
            bounds = new kakao.maps.LatLngBounds(),
            listStr = "";

          // 검색결과 목록의 자식 Element를 제거하는 함수입니다

          // 검색 결과 목록에 추가된 항목들을 제거합니다
          removeAllChildNods(listEl);

          // 지도에 표시되고 있는 마커를 제거합니다
          removeMarker();

          for (var i = 0; i < places.length; i++) {
            // 마커를 생성하고 지도에 표시합니다
            var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
              marker = addMarker(placePosition, i),
              itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);

            // 마커와 검색결과 항목에 mouseover 했을때
            // 해당 장소에 인포윈도우에 장소명을 표시합니다
            // mouseout 했을 때는 인포윈도우를 닫습니다
            (function(marker, title) {
              kakao.maps.event.addListener(marker, "mouseover", function() {
                displayInfowindow(marker, title);
              });

              kakao.maps.event.addListener(marker, "mouseout", function() {
                infowindow.close();
              });

              itemEl.onmouseover = function() {
                displayInfowindow(marker, title);
              };

              itemEl.onmouseout = function() {
                infowindow.close();
              };
            })(marker, places[i].place_name);

            fragment.appendChild(itemEl);
          }

          // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
          listEl.appendChild(fragment);
          menuEl.scrollTop = 0;

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        };

        //=========================================
        // 검색결과 항목을 Element로 반환하는 함수입니다
        //=========================================

        const getListItem = (index, places) => {
          let el = document.createElement("li"),
            itemStr = `<span className="markerbg marker_${index + 1}"></span>
            <div className="info"> 
            <h5>${places.place_name} </h5>`;

          if (places.road_address_name) {
            itemStr += `<span> ${places.road_address_name} </span> 
                   <span className="jibun gray"> ${places.address_name} </span>`;
          } else {
            itemStr += `<span> ${places.address_name}</span> `;
          }
          itemStr += `<span className="tel"> ${places.phone} </span>
              </div>`;
          el.innerHTML = itemStr;
          el.className = "item";

          return el;
        };

        //==================================================
        // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
        // 인포윈도우에 장소명을 표시합니다
        //==================================================
        const displayInfowindow = (marker, title) => {
          let content = `<div style={{padding:"5px",z-index:"1"}}>${title}</div>`;
          infowindow.setContent(content);
          infowindow.open(map, marker);
        };
        // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        const addMarker = (position, idx, title) => {
          let imageSrc =
              "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
            imgOptions = {
              spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
              spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
              offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imgOptions
            ),
            marker = new kakao.maps.Marker({
              position: position, // 마커의 위치
              image: markerImage
            });

          marker.setMap(map); // 지도 위에 마커를 표출합니다
          this.state.markers.push(marker); // 배열에 생성된 마커를 추가합니다

          return marker;
        };

        // ====================================
        // 검색결과 하단에 페이지번호를 표시하는 함수입니다
        // ====================================

        function displayPagination(pagination) {
          var paginationEl = document.getElementById("pagination"),
            fragment = document.createDocumentFragment(),
            i;

          // 기존에 추가된 페이지번호를 삭제합니다
          while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild(paginationEl.lastChild);
          }

          for (i = 1; i <= pagination.last; i++) {
            var el = document.createElement("a");
            el.href = "#";
            el.innerHTML = i;

            if (i === pagination.current) {
              el.className = "on";
            } else {
              el.onclick = (function(i) {
                return function() {
                  pagination.gotoPage(i);
                };
              })(i);
            }

            fragment.appendChild(el);
          }
          paginationEl.appendChild(fragment);
        }
        function removeAllChildNods(el) {
          while (el.hasChildNodes()) {
            el.removeChild(el.lastChild);
          }
        }
        const removeMarker = () => {
          for (var i = 0; i < this.state.markers.length; i++) {
            this.state.markers[i].setMap(null);
          }
          this.setState({ markers: [] });
        };
      });
    };
  };
  componentDidMount() {
    this.LoadMap();
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ keyword: this.state.keyword });
    this.LoadMap();
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="map_wrap" style={{border:"3px solid #009223"}}>
          <div
            id="map"
            className="map"
          ></div>

          <div id="menu_wrap" className="bg_white">
            <div className="option">
              <div>
                <form className="search_form" onSubmit={this.onSubmit} >
                <Typography className={classes.title} >매장찾기</Typography>
                  <Input
                    type="text"
                    value={this.state.keyword}
                    onChange={this.handelKeywordChange}
                    id="keyword"
                    size="15"
                  />
                  <Button className="btn_search" type="submit">검색하기</Button>
                </form>
              </div>
            </div>
            <hr />
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.franchiseTitle}
                  color="textSecondary"
                  gutterBottom
                >
                  <ul id="placesList"></ul>
                </Typography>
              </CardContent>
            </Card>
            <div id="pagination"></div>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(store);
