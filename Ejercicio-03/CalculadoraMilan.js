"use strict"

class Calculadora {

    constructor(nombre) {
        
        this.ID_PANTALLA = 'screen';
        
        this.nombre = nombre;
        this.currentScreenNumber = "";
        this.operator = "";
        this.val1 = "";
        this.memory = 0;
        
        this.e = this.getKeydownEvent();
        console.log(this.e)
    
        document.addEventListener('keydown', this.e);
    }

    getKeydownEvent() {
        
        let event = (event) => {
            const keyName = event.key;

            switch (keyName) {
            case "1":
                calculadora.add(1);
                break;
            case "2":
                calculadora.add(2);
                break;
            case "3":
                calculadora.add(3);
                break;
            case "4":
                calculadora.add(4);
                break;
            case "5":
                calculadora.add(5);
                break;
            case "6":
                calculadora.add(6);
                break;
            case "7":
                calculadora.add(7);
                break;
            case "8":
                calculadora.add(8);
                break;
            case "9":
                calculadora.add(9);
                break;
            case "0":
                calculadora.add(0);
                break;
            case "/":
                calculadora.operacion('/');
                break;
            case "*":
                calculadora.operacion('*');
                break;
            case "-":
                calculadora.operacion('-');
                break;
            case "+":
                calculadora.operacion('+');
                break;
            case ".":
                calculadora.addDecimal();
                break;
            case "c":
                calculadora.clearCalculadora();
                break;
            case "Enter":

                break;
            }
        }

        return event;
    }

    clearCalculadora() {
        this.currentScreenNumber = "";
        this.operator = "";
        this.val1 = "";
        this.memory = 0;

        console.log(this.currentScreenNumber)

        // Actualizar la pantalla
        calculadora.mostrarEnPantalla(this.ID_PANTALLA);
      }

    mostrarEnPantalla(screenId) {
        document.getElementById(screenId).value = this.currentScreenNumber;
    }

    add(valor) {
        if (this.currentScreenNumber.length < 9) {
          this.currentScreenNumber += valor.toString();
        }

        // Actualizar la pantalla
        calculadora.mostrarEnPantalla(this.ID_PANTALLA);
    }

    addDecimal() {
        if (!this.currentScreenNumber.includes(".")) {
          this.currentScreenNumber += ".";
        } else if (this.currentScreenNumber.length <= 0) {
            this.currentScreenNumber += "0.";
        }

        // Actualizar la pantalla
        calculadora.mostrarEnPantalla(this.ID_PANTALLA);
    }

    operacion(operator) {
        // Cuando pulsamos un operador sin haber introducido ninugn numero
        if (this.val1.toString().length <= 0 && this.currentScreenNumber.length <= 0) { 
          this.val1 = "0";
          this.currentScreenNumber = "";
          this.operator = operator;
        } // Cuando aun no hemos almacenado nada en val1, ni hemos pulsado previamente el igual
        else if (this.val1.toString().length <= 0 || (this.val1.toString().length > 0 && this.currentScreenNumber.length > 0)) { 
          this.val1 = this.currentScreenNumber;
          this.currentScreenNumber = "";
          this.operator = operator;
        }// cuando ya tenemos un valor en val1 (resultado) y añadimos un operador sin que haya un numero en pantalla
         else { 
          this.currentScreenNumber = "";
          this.operator = operator;
        }

        // Actualizar la pantalla
        calculadora.mostrarEnPantalla(this.ID_PANTALLA);
      }

    igual() {
        if (this.operator.length > 0) {
            try {
            this.val1 = eval(
                Number(this.val1) + this.operator + Number(this.currentScreenNumber)
            );
            } catch (err) {
            this.val1 = "Error: " + err;
            }
    
            this.currentScreenNumber = "";
            this.operator = "";
        } else if (this.currentScreenNumber.length > 0) {
            try {
            this.val1 = eval(this.currentScreenNumber);
            } catch (Err) {
            this.val1 = "Error: " + Err;
            }
        }
    
        document.getElementById("screen").value = this.val1;
    }
    
}

var calculadora = new Calculadora("Calculadora Milan");