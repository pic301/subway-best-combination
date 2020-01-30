/*global kakao*/
import React, { Component } from 'react';
import './store.css';

class store extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=3ecbfeb0764c3466dfe8072131d55e7e&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(523951.25, 1085073.75)
                });
            });
        };
    }

    render() {
        return (
            <div className="map" id="map"></div>
        );
    }
}

export default store;