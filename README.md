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

Intrucciones para instalar las versiones de Ghost:

- instalar docker usando el link de acuerdo a su sistema operativo: 

https://docs.docker.com/desktop/mac/install/
https://docs.docker.com/desktop/linux/install/
https://docs.docker.com/desktop/windows/install/

- instalar contenedor ghost 3.42 puerto 3001

docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42

- configurar usuario admin ghost 3.42. Nota: documentar el email y password configurado para luego ajustar el archivo cypress.json

- logout ghost 3.42

- instalar contenedor ghost 4.44 puerto 3002

docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0

- configurar usuario admin ghost 3.42. Nota: documentar el email y password configurado para luego ajustar el archivo cypress.json

- logout ghost 4.44


Intrucciones para para instalar el proyecto de pruebas E2E con Cypress:

- Descargar, en la ruta donde trabajará las pruebas, el repositorio como archivo zip y descomprima o ejecutando en su consola:  

  git clone https://github.com/aforero31/E2E-Ghosh-Cypress

- Ingresar a la carpeta del proyecto

cd E2E-Ghosh-Cypress

- instalar cypress desde la ruta E2E-Ghosh-Cypress 

npm install cypress --save-dev

* En el directorio donde instaló Cypress, encontrará una carpeta llamada integration, allí pegue los archivos que 
  se encuentran en la misma carpeta del proyecto clonado
* Dentro de la carpeta raíz del proyecto reemplace los archivos cypress.json
* En este directorio (donde instaló Cypress) abra una consola y ejecute la instruccion cypress run

* copiar el archivo cypress.json en la raiz de instalación de cipress
* copiar el script commands.js en cypress\support
* copiar el script pages.spec.js en cypress\integration\


Intrucciones para para ejecutar las pruebas E2E con Cypress

- para ejecutar pruebas sobre ghost 3.42, configurar el archivo cypress.json

  "baseUrl": "http://localhost:3001",
  "env": {
    "ghost-version" : "3.42",
    ...

- para ejecutar pruebas sobre ghost 4.44, configurar el archivo cypress.json

  "baseUrl": "http://localhost:3002",
  "env": {
    "ghost-version" : "4.44",
    ...

- ejecutar pruebas cypress (no olvide ajustar el puerto y la versión en el archivo cypress.json)

C:\Users\agonm\OneDrive\Escritorio\MISO\pruebasAutoSW\tests-e2e\cypress\node_modules\.bin\cypress run --headless --spec "cypress/integration/pages.spec.js"

* al finalizar la prueba, copiar los screenshots en una carpeta con la version, fuera del proyecto


Instrucciones para reinstalar los contenedores 

- en caso de necesitar re-ejecutar las pruebas es necesario detener y borrar los contenedores: 

docker rm -f ghost_3.42
docker rm -f ghost_4.44.0

y ejecutar nuevamente los pasos descritos al inicio de este documento para cada una de las versiones ghost: 
instalar contenedor ghost, configurar usuario admin, logout 


Sobre la implementación de las pruebas Cypress: 

- se implementó el patrón given-when-then para indicar la precondición o contexto del escenario, la acción sobre la aplicación bajo pruebas y el resultado esperado:

 ghost admin pages
    Given admin accesses pages list option
      When admin creates new page
        √ Then admin sees new draft page in list (10040ms)
      When admin creates new schedule page
        √ Then admin sees new schedule page in list (9556ms)
      When admin creates new published page
        √ Then admin sees new published page in list (9090ms)

- también se implementaron commands para agrupar funcionalidades, delegar la responsabilidad del llamado a los selectores (incluyendo los cambios de versión) y simplificar el código de pruebas: 

cypress/integration/pages.spec.js:

...
	context('Given admin accesses pages list option', () => {
		beforeEach(()=>{
			cy.listPages()
			cy.newPage()
		})		

		context('When admin creates new page', () => {
			beforeEach(() => {
				cy.createPage(version, draft, desc)
			})  
			it('Then admin sees new draft page in list', () => {
				cy.listPagesAndCheck(draft);
			})
		})
...

cypress/support/commands.js

Cypress.Commands.add('listPages', () => {
    cy.get('a[href="#/pages/"]').click()
    cy.url().should('include', 'pages')
    cy.wait(1000)
    cy.screenshot()
})

Cypress.Commands.add('listPagesAndCheck', (page) => {
    cy.wait(1000)
    cy.get('a[href="#/pages/"]').click()
    cy.url().should('include', 'pages')
    cy.contains(page)
    cy.screenshot()
})
...

para manejar los cambios en los selectores segun la versión, se configuró una variable de ambiente y se ajustaron los comandos impactados:
- createPage/editPage: placeholder del titulo
- deletePage: titulo/clase del botón settings
- schedulePage/publishPage: clase del boton de confirmación
