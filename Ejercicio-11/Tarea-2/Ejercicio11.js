"use strict";

class Geolocalizacion {
    constructor() {
        this.mensaje = "Se ha realizado correctamente la geolocalizacion";
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }

    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
    }

    cargarLocalizacion() {
        let main = document.querySelector("main");
        
        main.innerHTML += "<p>" + this.mensaje + "</p>";
        
        main.innerHTML +='<p>Longitud: '+this.longitud +' grados</p>'; 
        main.innerHTML +='<p>Latitud: '+this.latitud +' grados</p>';
        main.innerHTML +='<p>Precisión de la latitud y longitud: '+ this.precision +' metros</p>';
        main.innerHTML +='<p>Altitud: '+ this.altitud +' metros</p>';
        main.innerHTML +='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
    }
}

let geolocalizador = new Geolocalizacion();