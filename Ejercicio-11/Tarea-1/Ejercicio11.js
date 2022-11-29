"use strict";

class Geolocalizacion {
    constructor() {
        this.mensaje = "Se ha realizado correctamente la geolocalizacion";
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }

    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
    }

    verErrores() {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no permite la petición de geolocalización"
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "Información de geolocalización no disponible"
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición de geolocalización ha caducado"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Se ha producido un error desconocido"
                break;
        }
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