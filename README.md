# CRUDFAME

## Registro de Paciente con A.M.E.

Se trata de una aplicación pensada para registrar, editar, eliminar pacientes con AME; en ella se guardaran los datos basicos de los pacientes como ser Nombre, Apellido, Celular, Tipo de AME y Prestador de Salud.

### Crud

Se realiza el crud de CRUDFAME con Node js con npm init -y, luego se instalan las librerias con npm i más el nombre de las librerias y el --save -D, se usa el modelo de vista controlador

### Librerias Usadas

| Librerias            |
|----------------------|
| Express              |
| Express-Handlebars   |
| Express-Myconnection |
| Nodemon              |
| Hbs                  |
| Tailwindcss          |
| Mysql                |

### Base de datos

La base de datos y la tabla se crearon usando MySQL Workbench. Tambien se le ccreán a la tabla los campos id el cual es lleve primaria y autonumerico, nombre que es varchar con 45 caracteres, apellido que es varchar con 45 caracteres, celular que es init para solo almacenar numeros, tipo que es init para almacenar numeros y prestador que es varchar con 45 caracteres.

### Css

Se uso la libreria Tailwind CSS y de Fontawesome para mejorar la vista para el usuario, se usa el color purple que es el color del A.M.E.

#### Logica

En app.js
Construyo el servidor usando express y le indico el puerto a usar que es el puerto 3000, se configura las vistas con set y el motor de vista con views engine hbs, creo la conexion a la base de datos de mysql y le indico las rutas de las paginas.

En Registro.Controller.js
Creo las funciones para indexar, crear, editar, actulizar, almacenar y eliminar los pacientes y las conexiones a la base de datos regfame de mysql.
Uso:
 
| Herramientas    | Descriptción                                        |
| --------------- | --------------------------------------------------- |
| function        | para la funciones                                   |
| getConnection   | establezer las conexiones                           |
| query           | hago las busquedas                                  |
| render          |renderizo la información y las muestro en las paginas|

En Registro.router.js
Creo las rutas a las paginas y usando el metodo GET y POST  envio la información almacenada para ser vistas por el usuario en las paginas.

| Herramientas    | Descriptción                                        |
| --------------- | --------------------------------------------------- |
| get             | muestro, edito y creo el registro                   |
| post            | almaceno, elimino y actulizo el registro            |

En la carpeta views se encuenta las sub carpetas layouts y paciente en ellas se guardan las paginas que van a ser vista por el usuario y en ellas esta los metodos para el ingreso, modificación, visualizaión y eliminación de los pacientes.
En las paginas de index y de edit uso el metodo  {{#each reg}} para almacenar esos datos y enviarlos a Registro.Controller.js para ser enviados a la base de datos regfame de mysql.
El motor de vista usado para las paginas es hbs.

En .env se crea el puerto 3000 que es el que va a usar el servidor

#### Ejecutar

En package.json en depuracion se agrega el metodo start y dev para poder ejecutar con el metodo que queremos y que al ejecutar puedamos ir trabajando y automaticamente ver si sigue funcionando o si se cayo poder ver cual es el error y poder corregirlo.

