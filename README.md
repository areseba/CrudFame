# CRUDFAME

## Registro de Paciente con A.M.E.

Se trata de una aplicación pensada para registrar, editar, eliminar pacientes con AME; en ella se guardaran los datos basicos de los pacientes como ser Nombre, Apellido, Celular, Tipo de AME y Prestador de Salud.

### Crud

Se realiza el crud de CRUDFAME con Node js con npm init -y, luego se instalan las librerias con npm i más el nombre de las librerias y el --save -D, se usa el modelo de vista controlador

### Librerias Usadas

Express
Express-Handlebars
Express-Myconnection
Nodemon
Tailwindcss

### Base de datos

La base de datos y la tabla se crearon usando MySQL Workbench.

### Css

Se uso la libreria Tailwind CSS y de Fontawesome.

#### Logica

En app.js
Construyo el servidor y le indico el puerto a usar que es el 3000, se configura las vistas y el motor de vista, creo la conexion a la base de datos y le indico las rutas.

En Registro.Controller.js
Creo las funciones para indexar, crear, editar, actulizar, almacenar y eliminar los pacientes y las conexiones a la base de datos regfame.

En Registro.router.js
Creo las rutas a las paginas y usando el metodo GET y POST los envio la información almacenada para cer vistas por el usuario

En la carpeta views se encuenta las sub carpetas layouts y paciente en ellasguardan las paginas que van a ser vista por el usuario y en ellas esta los metodos para el ingreso, modificación, visualizaión y eliminación de los pacientes.
En las paginas de index y de editar uso el metodo  {{#each reg}} para almacenar esos datos y enviarlos a Registro.Controller.js para ser enviados a la base de datos.

En .env se crea el puerto 3000

#### Ejecutar

En package.json en depuracion se agrega el metodo start y dev para poder ejecutar con el metodo que queremos y que al ejecutar puedamos ir trabajando y automaticamente ver si sigue funcionando o si se cayo poder ver cual es el error.

