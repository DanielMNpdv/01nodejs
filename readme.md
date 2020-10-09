
#############################COMANDOS IMPORTANTES#########################################

//Primero debemos instalar node.js, procedemos de la siguiente forma:
//1. Hay que permitir la ejecucion de scripts en powershell con el siguiente comando:

Set-ExecutionPolicy RemoteSigned -Force

//2. Descargar el .msi correspondiente en la pagina web oficial de node y seguir los pasos del instalador
https://nodejs.org/es/download/

//para instalar typescript
npm install -g typescript

//Instalar mongoose
npm install mongoose

//Instalar esto para que reconozca los tipos de mongoose
npm install @types/mongoose

//Para ejecutar npm
npm init --yes

//Crear carpeta src, y dentro de ella crear el index.ts

//Compilar con npx
npx tsc -w

//Ejecutar con:
node dist/index

//Instalar Typescript como modulo
npm install typescript -D

//Crear el ts.config
npx tsc --init (si no lo tienes instalado)

//En el tsconfig poner para que excluya el node_modules
"exclude": [
    "node_modules"
  ]
//Ahora instalaremos git para poder subir nuestros archivos a github
https://git-scm.com/download/win

//para compilar (una vez que termines el .ts)
tsc -w 

//para crear los archivos de configuracion
tsc --init

//Para subir los archivos a github

(solo la primera vez)
git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/DanielMNpdv/01nodejs.git (solo la primera vez)

git push -u origin master

//como borrar un repositorio
http://manuales-eneboo-pineboo.org/github-como-instalarlo-y-usarlo/github-como-sincronizar-dos-repositorios/github-avanzado-repos-y-ramas/borrar-repositorio-github/

//Para configurar los nombres
git config --global user.email "you@example.com" 
git config --global user.name "Your Name"

#############################################################################################################################################

#############################EXPLICACIÓN DEL PROYECTO#########################################

