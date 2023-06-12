var cargarXML = function() {
    // Cargar el archivo XML
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "datos.xml", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xml = xhr.responseXML;

            // Obtener los elementos del XML
            var filas = xml.getElementsByTagName("fila");

            // Crear la tabla en el HTML
            var tabla = document.getElementById("Tabla_xml");

            // Recorrer las filas del XML y crear las filas en la tabla
            for (var i = 0; i < filas.length; i++) {
                var filaXML = filas[i];
                var filaHTML = document.createElement("tr");

                // Obtener las celdas de cada fila
                var celdasXML = filaXML.children;

                // Recorrer las celdas del XML y crear las celdas en la fila de la tabla
                for (var j = 0; j < celdasXML.length; j++) {
                    var celdaXML = celdasXML[j];
                    var celdaHTML = document.createElement(i === 0 ? "th" : "td");
                    celdaHTML.textContent = celdaXML.textContent;
                    filaHTML.appendChild(celdaHTML);
                }

                    // Agregar la fila a la tabla
                    tabla.appendChild(filaHTML);
            }
        }
    };
    xhr.send();
};


var cargarJSON = function() {
    // Cargar el archivo JSON
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "datos.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonData = JSON.parse(xhr.responseText);
            var tablaData = jsonData.tabla;

            // Obtener la tabla del JSON
            var tablaJSON = document.getElementById("Tabla_json");

            // Crear las filas y celdas en la tabla
            for (var i = 0; i < tablaData.length; i++) {
                var filaData = tablaData[i];
                var filaHTML = document.createElement("tr");

                for (var key in filaData) {
                    var celdaHTML = document.createElement(i === 0 ? "th" : "td");
                    celdaHTML.textContent = filaData[key];
                    filaHTML.appendChild(celdaHTML);
                }

                tablaJSON.appendChild(filaHTML);
            }
        }
    };
    xhr.send();
};
        // Ejecutar las funciones después de cargar la página
        document.addEventListener("DOMContentLoaded", function() {
            cargarXML();
            cargarJSON();
        });
