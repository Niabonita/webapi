function poblarDatosPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true';
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(paises => {

       //crearListaPaises(paises);
       adicionarDatosTabla(paises);
       mostrarClavesMoneda(paises);
    });

    function crearListaPaises (paises){
        var ul = crearNodoGenerico('ul');

        for (const pais of paises) {
            var li = crearNodoTexto('li',pais.name.common);
            adicionarNodoAContenedor(li,ul);
            
        }

        adicionarNodoBody(ul);
    }

    function mostrarClavesMoneda(paises){
        for (const pais of paises) {
            var currencies = pais.currencies;
            var claves = Object.keys(currencies);

            for (const clave of claves) {
                console.log(currencies[clave].name)
            }
        }
    }

    function adicionarDatosTabla(paises){
        var tabla = document.getElementById("tablaPaises");
        for (const pais of paises) {
            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnIdioma = fila.insertCell(1)
            var columnMoneda= fila.insertCell(2)
            var columnaCapital = fila.insertCell(3);
            var columnaPoblacion = fila.insertCell(4);
            var columnaBanderas = fila.insertCell(5);
            
            columnaNombre.innerHTML = pais.name.official;
            columnIdioma.innerHTML = pais.languages;
            columnMoneda.innerHTML = pais.currencies;
            columnaCapital.innerHTML = pais.capital[0];
            columnaPoblacion.innerHTML = pais.population;
            columnaBanderas.innerHTML = pais.flags;
            

        }
    }
}