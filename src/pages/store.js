/*global kakao*/
/*global map*/
/*global infowindow*/
import React, { Component } from "react";
import "./store.css";

class store extends Component {
    
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=3ecbfeb0764c3466dfe8072131d55e7e&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let el = document.getElementById("map");
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});
        let map = new kakao.maps.Map(el, {
          center: new kakao.maps.Coords(523951.25, 1085073.75)
        });
        // 장소 검색 객체를 생성합니다
        let ps = new kakao.maps.services.Places(); 
        
// 키워드로 장소를 검색합니다
ps.keywordSearch('써브웨이', placesSearchCB); 
 // 키워드 검색 완료 시 호출되는 콜백함수 입니다
 function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      let bounds = new kakao.maps.LatLngBounds();

      for (let i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }
  }
  // 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
  
  // 마커를 생성하고 지도에 표시합니다
  let marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x) 
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, 'click', function() {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
      infowindow.open(map, marker);
  });
}
      });
     
    };
  }

  render() {
    return <div className="map" id="map"></div>;
  }
}

export default store;
