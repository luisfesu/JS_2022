"use strict";

class Geolocalizacion {
    constructor() {
        this.centro = {lat: 43.3672702, lng: -5.8502461};
    }
            
    
}

let geolocalizador = new Geolocalizacion();


let mapaDinamicoGoogle = new Object();

function initMap() {
    let mapaOviedo = new google.maps.Map(document.querySelector("main"), {zoom: 8, center:geolocalizador.centro});
    let marcador = new google.maps.Marker({position:geolocalizador.centro, map:mapaOviedo});
}

mapaDinamicoGoogle.initilizeMap = initMap;
mapaDinamicoGoogle.initilizeMap();