APLICACIÓN API SOBRE EL CLIMA DE ZARAGOZA

He creado en Visual Studio Code una API para saber que clima hace en Zaragoza en tiempo real. La Api la he conectado a esta web https://openweathermap.org/, con mi cuenta de usuario me han proporcionado una KEY que es la que se coloca en el archivo .env. 

El siguiente paso ha sido subir mi api ya creada a mi repositorio GitHub con el nombre de api-clima, ahí están los archivos del proyecto. 

Lo siguiente ha sido una cuenta en esta web https://render.com/, en esta web se puede desplegar mi API, lo que hace es vincularse con el repositorio de mi proyecto que está en GitHub y despliega un servidor en internet. En ese momento mi Api ya funciona correctamente.

Una vez terminada la API, he creado una página web con Visual Studio Code con un botón para obtener los datos del clima de Zaragoza. La he subido a un repositorio en GitHub llamado comprobarclimazaragoza y luego la he publicado en Pages, con el proceso de npm run build y npm run deploy, este es el enlace a el proyecto. https://vcanoramos83.github.io/compruebaclimazaragoza/.

El funcionamiento seria el siguiente: Mi API  esta desplegada en un servidor en la web de render, esta web de render obtiene la API del mi repositorio de GitHub llamado api-clima, que a la vez esta API esta vinculada a la página web que he creado y he desplegado en mi GitHub para poder obtener los datos a través de un interfaz pulsando un botón.