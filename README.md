# Prueba Tecnica para Finix Group
Esta prueba tecnica se realizó para su revisión en el proceso de postulación para el cargo de desarrollador en Finix Group

## Lista de contenidos

<ul>
  <li>Backend:
    <ul>
      <li>Inicialización</li>
      <li>Endpoints:
        <ul>
          <li>Bank</li>
          <li>User</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Frontend:
    <ul>
      <li>Inicialización</li>
      <li>Conexión a la base de datos</li>
    </ul>
  </li>
</ul>

## Backend
El backend fue desarrollado bajo el framework .NET Framework 6.0, utilizando el lenguaje de programación C#. Las consultas a la base de datos se hicieron con la librería Dapper y la base de datos que utiliza es SQLite

### Inicialización
El backend se desarrolló con el fin de que cada vez que se ejecuta una query por primera vez, se cargan los datos de bancos de [Random Data Api](https://random-data-api.com/documentation) y el usuario con permisos para agregar, editar y eliminar bancos del registro de la base de datos. Las credenciales del usuario son:
`User: admin@admin.com Pass: Admin1234`.
Se recomienda que para utilizar por primera vez la API, se ejecute el endpoint: `/bank/all`. Al ejecutar ese endpoint, retornará un Array vacío, pero ya estarán cargados los datos para su funcionamiento normal.

### Endpoints
Los Endpoints que utiliza la API son los siguientes:
1. Bank
   1. **(GET) /bank/all**: Retorna los registros de bancos en la base de datos. Retorna los datos paginados. Parámetros: **page**: la pagina actual de la consulta, **size**: tamaño de registros que retornará la consulta
   2. **(GET) /bank/{uid}**: Retorna el banco que se encuentre en el registro que contenga el UID que se envía. Parámetros: **uid**: Codigo UID que represente al banco que se desee buscar.
   3. **(POST) /bank/add**: Agrega un banco en el registro de la base de datos.
   4. **(PUT) /bank/edit**: Edita el nombre del banco que el usuario desee cambiar.
2. User
   1. **(GET) /user/login**: Inicio de sesión del usuario
   2. **(GET) /user/register**: Registro de usuario
## Frontend
El frontend esta desarrollado con el framework de React. Utilizando la librería de ChakraUI para los estilos.
El proyecto de frontend viene con opción para cambiar el idioma de español a ingles si el usuario desea.
### Inicialización
Antes de iniciar el proyecto, debe tener instalado [NodeJs](https://nodejs.org/en). Con la terminal apuntando en el directorio raíz del proyecto frontend, se debe ejecutar el siguiente comando: `npm install`. o `npm i`. Se instalarán todas las librerías necesarias para que el proyecto pueda funcionar de buena forma.
una vez instaladas las librerías, se ejecuta el comando `npm run dev` para iniciar el proyecto
### Conexión a la base de datos
`./src/connections/conn.js`: en ese archivo se encuentra la ruta que conecta el backend con el frontend. En caso de que en el backend esté apuntando a otra dirección, cambiar la ruta por la que utilice el backend.
