function sumaTodosImpares(array) {
    // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
    // y debe devolver la suma total entre todos los numeros impares.
    // ej:
    // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15
  
    // Tu código aca: 
        let suma = 0;
        for (let i = 0; i < array.length; i++) {
          if (array[i] % 2 !== 0) {
            suma += array[i];
          }
        }
        return suma;

  };
  
  
  //-----------------------------------------------------------------------------------------------------------------------
  function stringMasLarga(str) {
    // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
    // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
    // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
    // Tip: podes usar el metodo de String 'split'
  
    // Tu código aca:    
        const palabras = str.split(' '); // Divide la frase en un array de palabras
        
        let palabraMasLarga = '';
        for (let i = 0; i < palabras.length; i++) {
          if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
          }
        }
        
        return palabraMasLarga;

      }
    
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function estaOffline(usuarios, nombre) {
    // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
    // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
    // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
    // ej:
    // var usuarios = [
    //     {
    //       nombre: 'toni',
    //       online: true
    //     },
    //     {
    //       nombre: 'emi',
    //       online: true
    //     },
    //     {
    //       nombre: 'agus',
    //       online: false
    //     }
    // ];
    // estaOffline(usuarios, 'agus') retorna true
    // estaOffline(usuarios, 'emi') retorna false
  }
  
    // Tu código aca:
    for (var i = 0; i < usuarios.length; i++) {

      if (usuarios[i].nombre === nombre) {

        if (!usuarios[i].online) {
          return true; 
        } else {
          return false; 
        }
      }

      return false; 

    }

  
    
  
    //-----------------------------------------------------------------------------------------------------------------------
  
    function actividadesEnComun(persona1, persona2) {
    // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
    // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
    // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
    //     persona2 = ['comer', 'dormir', 'futbol']
    // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
    // Tip: podes usar ciclos for anidados.
    // Tu código aca:
    actividadesEnComun = [];

    for (var i = 0; i < persona1.length; i++) {
      var actividad = persona1[i];

      if (persona2.includes(actividad)){

        if(!actividadesComunes.includes(actividad)){
          actividadesComunes.push(actividad);
        }
      }
    }
   
    return actividadesComunes;
  
  }
  //-----------------------------------------------------------------------------------------------------------------------
  
  function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    // Tu código aca:
      var resultado = [];

      for (var i = 0; i < arreglo.length; i++) {
        var elemento = arreglo[i];

        if (elemento !== num) {
          resultado.push(elemento);
        }
      }
    
      return resultado;

    }
  //-----------------------------------------------------------------------------------------------------------------------
  
  function sumaDeArrays(array) {
      // El array recibido por parametro es un array multidimencional con array's que 
      //contienen elementos de tipo number
      // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
      // Sumando los elementos de cada array que contenga dos elementos,
      // y devolviendo la suma del mismo
      // OJO: Si el elemento dentro del array que ingresa por prop, 
      //ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
      //let a = [[5, 5], 4, [10, 15], [25, 10]]. 
      // Tu codigo aca:
    
      //ME TRABO EL CEREBRO JE


  }
  //-----------------------------------------------------------------------------------------------------------------------
  
  function mismoValorMismosElementos(numero, divisor) {
      // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
      // Todos los elementos deben tener el mismo valor
      // OJO: Si el resultado de la division no es un entero, deben devolver false
      // Tu Codigo aca:
        var resultado = [];
      
        if (numero % divisor !== 0) {
          return false;
        }
      
        for (var i = 0; i < divisor; i++) {
          resultado.push(numero / divisor);
        }
      
        return resultado;

      }
  //-----------------------------------------------------------------------------------------------------------------------
  
  
  function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código: 
    var array = []

    for(var i = 0; i < array.length; i++){
      var elemennto = array[i];

      var resultado = cb(elemento);

      nuevoArray.push(resultado);
    }

    return nuevoArray;

  }
  
  //-----------------------------------------------------------------------------------------------------------------------
  
  
  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    var resultado = array.filter(function(elemento) {

      return elemento.startsWith('a');
    });
  
    return resultado;

  }

  
  
  //-----------------------------------------------------------------------------------------------------------------------
  
  
  function sumarElTipo(arreglo) {
    // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
    // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
    // de veces que se repita cada tipo.
    // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
    // Ej:
    // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
    // Tip: podes usar el ciclo for o el metodo de Array 'reduce'
  
    // Tu código aca: 
    var resultado = arreglo.reduce(function(objetoContador, tipo) {

      if (objetoContador[tipo]) {

        objetoContador[tipo]++;
        
      } else {

        objetoContador[tipo] = 1;
      }
      return objetoContador;
    }, {});
  
    return resultado;

  }
    
    
  
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
    function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código: 
    var gato = {
      nombre: nombre,
      edad: edad,
      meow: function() {
        return "Meow!";
      }
    };
  
    return gato;

  }
  
  
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto 
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código: 
    //objeto [property]= null;  

    objeto[property] = null;
      return objeto;

    }
      
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function invocarMetodo(objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código: 
    objeto[metodo]();

  }
   
   
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
    return objetoMisterioso.numeroMisterioso * 5;

  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function eliminarPropiedad(objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
    // tip: tenes que usar bracket notation = Notacion de corchetes. 
    // Devuelve el objeto 
    // Tu código:
    delete objeto[unaPropiedad];
    return objeto;
  
  }
  
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los 
    // argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    var usuario = {
      nombre: nombre,
      email: email,
      password: password
    };
  
    return usuario;
  
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    return typeof usuario.email !== 'undefined';
    
  } 
  
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function tienePropiedad(objeto, propiedad) {
    // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
    //cuyo nombre es igual al valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:
    return propiedad in objeto;
   
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código: 
    return usuario.password === password;
    
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password = nuevaPassword;
      
    return usuario;

  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    usuario.amigos.push(nuevoAmigo);
    
    return usuario;
  
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function pasarUsuarioAPremium(usuarios) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el  array de usuarios
    // Tu código: 
    for (var i = 0; i < usuarios.length; i++) {
      usuarios[i].esPremium = true;
    }
    return usuarios;
    
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function sumarLikesDeUsuario(usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código: 
    var totalLikes = 0;

    for (var i = 0; i < usuario.posts.length; i++) {
      totalLikes += usuario.posts[i].likes;
    } 

    return totalLikes;

}
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------
  function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código: 
    producto.calcularPrecioDescuento = function() {
      return producto.precio - (producto.precio * producto.porcentajeDeDescuento);
    };
  
    return producto;

  }
  
  
  
  //-------------------------------------------Interacción con el DOM--------------------------------------------------------
  // En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
  // Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
  // agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
  // Tu código acá: 
  
  //-----------------------------------------------------------------------------------------------------------------------
  
  // La función debe realizar lo siguiente:
  //    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
  //    2) Asignarle a 'toDoShell' la clase 'toDoShell'
  //    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
  //    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
  //       asignándole el valor de la propiedad 'description' del objeto ToDo.
  //    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
  //    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
  //          - Si es true: asignarle a 'toDoText' la clase 'completeText'
  //          - Si es false: no asignarle ninguna clase
  //    7) Agregar 'toDoText' como hijo de 'toDoShell'
  //    8) Devolver la variable toDoShell
  
  
  function buildToDo(todo, index) { //todo es un objeto de la clase TODO. //index numerico 
    // Tu código acá:
    // Paso 1 y 2: Crear el elemento 'div' y asignarlo a la variable 'toDoShell'
    var toDoShell = document.createElement('div');
    toDoShell.classList.add('toDoShell');

    // Paso 3 y 4: Crear el elemento 'span' y asignarlo a la variable 'toDoText'
    var toDoText = document.createElement('span');
    toDoText.innerHTML = todo.description;

    // Paso 5: Asignarle el id 'index' al elemento 'span'
    toDoText.id = index;

    // Paso 6: Según el atributo 'complete' del objeto ToDo, asignarle la clase 'completeText' o no asignarle ninguna clase
    if (todo.complete) {
      toDoText.classList.add('completeText');
    }

    // Paso 7: Agregar el elemento 'span' como hijo del elemento 'div'
    toDoShell.appendChild(toDoText);

    // Paso 8: Devolver la variable 'toDoShell'
    return toDoShell;
    
  
  }
  
  //-----------------------------------------------------------------------------------------------------------------------
  
  // La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
  //  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
  //  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
  //  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
  //  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
  //  5) Al final de este archivo, escribe una línea para hacer el llamado a esta funcion (displayToDos)
  //  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página
  
  function displayToDos() {
  // Tu código acá:
  // Paso 1: Seleccionar el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
  var toDoContainer = document.getElementById('toDoContainer');

  // Paso 2: Setear el innerHTML de 'toDoContainer' como un string vacío ("")
  toDoContainer.innerHTML = '';

  // Paso 3: Llamar a la función previamente creada 'buildToDos' pasándole como argumento el array toDoItems
  var todos = buildToDos(toDoItems);

  // Paso 4: Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregando cada elemento a 'toDoContainer'
  for (var i = 0; i < todos.length; i++) {
    toDoContainer.appendChild(todos[i]);
  }
};

  // Paso 5: Llamar a la función displayToDos para mostrar los toDo's en pantalla
  displayToDos();
 
  
  //-----------------------------------------------------------------------------------------------------------------------