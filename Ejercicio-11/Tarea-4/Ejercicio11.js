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

    cargarMapaEstatico() {
        let main = document.querySelector("main");

        let apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";

        let url = "https://maps.googleapis.com/maps/api/staticmap?";
        let centro = "center=" + this.latitud + "," + this.longitud;
        let zoom = "&zoom=10";
        let tamano = "&size=800x600";
        let marcador = "&markers=color=red%7Clabel:S%7C" + this.altitud + "," + this.longitud;
        let sensor = "&sensor=false"; 

        console.log(marcador);

        this.imagenMapa = url + centro + zoom + tamano + marcador + sensor + apiKey;

        main.innerHTML += "<img src='"+this.imagenMapa +"' alt='mapa estatico de google' />";

        document.querySelector("input[type='button']").disabled = true;
    }
}

let geolocalizador = new Geolocalizacion();