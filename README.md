# E2E-Ghosh-Cypress

Integrantes:

* ANDERSON GIOVANNY CASTIBLANCO PRIETO (ag.castiblanco1207@uniandes.edu.co)
* MARLON MAURICIO AGON FLOREZ (m.agonf@uniandes.edu.co)
* CESAR ALFONSO SOLANO RUIZ (c.solanor@uniandes.edu.co)
* ANA LUCIA FORERO NEME (a.foreron@uniandes.edu.co)

Repositorio pruebas Kraken - Cypress.

Funcionalidades y escenarios:

  - Ingresar a la aplicacion:
      - Login exitoso y Logout
      - Login erroneo por password incorrecto
      - Login erroneo por username inexistente en DB
      - Login sin usuario 
      - Login sin contraseña
      - Login con formato de usuario no valido

  - Administración Post
     - Listar Post
     - Crear post sin publicar
     - Crear post y publicar
     - Crear post repetidos
     - Crear post y añadir etiquetas (tags)
     - Crear post y publicar 2 minutos después
     - Actualizar un post
     - Crear eliminar el post

   - Tags
     - Listar Tags
     - Crear un Tag
     - Editar Tag
     - Eliminar Tag

Intrucciones para ejecutar las pruebas creadas con Kraken:

- Instale Cypress en su computador siguiendo las instrucciones que se encuentra en: https://misovirtual.virtual.uniandes.edu.co/codelabs/cypress-tutorial/index.html#0
- Despliegue la aplicación Ghost de forma local siguiendo este tutorial: https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#0
- Descargue este repositorio ejecutando en su consola el comando git clone https://github.com/aforero31/E2E-Ghosh-Cypress o como archivo zip y descomprima.
- En el directorio donde instaló Cypress, encontrará una carpeta llamada integration, allí pegue los archivos que se encuentran en la misma carpeta del proyecto clonado
- Dentro de la carpeta raíz del proyecto reemplace los archivos cypress.json
- En este directorio (donde instaló Cypress) abra una consola y ejecute la instruccion cypress run
