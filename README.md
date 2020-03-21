# RestaurantApp


1- Elije un punto en tu equipo donde quieras alojar el proyecto, por ejemplo en 'Documentos'.
2- Una vez hayas elegido el lugar, abre una consola en ese punto.
3- Tienes que clonarte mi proyecto, para ello escribe en la consola: git clone https://github.com/joseluisolivares/RestaurantApp.git
4- Ya tienes clonado mi proyecto, ahora debes crearte la BBDD.
5- Crear la bbdd
    5.1 => Instalar Mongodb.
    5.2 => Abrir consola y escribir 'mongo' sin comillas.
    5.3 => En la consola escribir: 'use Restaurant' ===> Escribirlo sin comillas, esto es para crear una base de datos llamada Restaurant. Usando este comando te crea la BBDD y te lleva a ella. Es decir, en este punto has creado una BBDD en mongo y estás dentro de ella. 
    5.4 => El siguinte paso es crear las colecciones de la base de datos y los documentos.
    5.5 => Para crear la colección de starters escribe en consola: 
    
        db.starters.insert({"name" : "Alcachofas a la plancha","price" : "10.90€"})
        db.starters.insert({"name" : "Tartar de tomate","price" : "9.90€"})
        db.starters.insert({"name" : "Sopa de cebolla","price" : "6.90€"})
        db.starters.insert({"name" : "Dumplings de Angus en BBQ Japonés","price" : "8.60€"})
        db.starters.insert({"name" : "Sardinas del Cantábrico ahumadas","price" : "10.80€"})
        db.starters.insert({"name" : "Tempura picante de bogavante","price" : "15.70€"})
        db.starters.insert({"name" : "Lomos de salmonete con piel tostada y sal volcánica","price" : "14.90€"})
        db.starters.insert({"name" : "Anchoas del Cantábrico Doble 0","price" : "11.90€"})

    5.6 => Para crear la colección de mainCourses escribe en consola: 

        db.maincourses.insert({"name" : "Ostras al natural o con salsa ponzu","price" : "19.90€"})
        db.maincourses.insert({"name" : "Salpicón de bogavante","price" : "23.90€"})
        db.maincourses.insert({"name" : "Almejas gallegas a la sartén","price" : "21.00€"})
        db.maincourses.insert({"name" : "Berberechos de la ría de Noia al vapor","price" : "17.90€"})
        db.maincourses.insert({"name" : "Navajas de la Ría a la sartén","price" : "32.90€"})
        db.maincourses.insert({"name" : "Steak Tartare","price" : "24.90€"})
        db.maincourses.insert({"name" : "Tartar de atún picante","price" : "26.90€"})
        db.maincourses.insert({"name" : "Tiradito de pez limón a la miel, salsa de ostras y pisco","price" : "28.90€"})
        db.maincourses.insert({"name" : "Ceviche de corvina salvaje","price" : "18.70€"})
        db.maincourses.insert({"name" : "Ceviche de langosta","price" : "33.90€"})
        db.maincourses.insert({"name" : "Carpaccio de lomo de vaca madurada","price" : "23.90€"})
        db.maincourses.insert({"name" : "Aguachile de zamburiñas","price" : "31.90€"})
        db.maincourses.insert({"name" : "Tataki de atún de almadraba con ensalada de aguacate","price" : "27.90€"})
        db.maincourses.insert({"name" : "Arroz 'Chaufa' con pato Pekín y langostinos","price" : "21.50€"})
        db.maincourses.insert({"name" : "Pluma ibérica con puré de boniato","price" : "26.30€"})

    5.7 => Para crear la colección de dessserts escribe en consola: 

        db.desserts.insert({"name" : "Tarta de queso","price" : "6.90€"})
        db.desserts.insert({"name" : "Volcán de dulce de leche","price" : "7.90€"})
        db.desserts.insert({"name" : "Key lime pie","price" : "9.90€"})
        db.desserts.insert({"name" : "Mousse de chocolate","price" : "5.50€"})

     5.8 => Para crear la colección de dessserts escribe en consola: 

        db.drinks.insert({"name" : "Coca cola","price" : "2.5€"})
        db.drinks.insert({"name" : "Coca cola zero","price" : "2.75€"})
        db.drinks.insert({"name" : "Coca cola light","price" : "2.75€"})
        db.drinks.insert({"name" : "Fanta de naranja","price" : "2.5€"})
        db.drinks.insert({"name" : "Mosto","price" : "2€"})
        db.drinks.insert({"name" : "Agua","price" : "1.8€"})

        db.manage.insert({"name" : "admin","password" : "huecas"})


    
6- Ahora vamos a crearnos el entorno para conectar la api con la BBDD.
7- Abrimos nuestro editor de texto  o IDE favorito y creamos una carpeta con el name de nuestra app, aquí vamos a alojar nuestro proyecto.
8- Como nuestro proyecto va a ser un proyecto que se va a basar en Node, lo primero es escribir en consola: npm init.
9- Con el paso anterior hemos creado el archivo package.json, es la configuración básica de nuestro proyecto.
10- Ahora vamos a instalar a través de npm, mongoose y express.
11- Escribir en consola: npm install mongoose
12- Escribir en consola: npm install express
13- Si estás usando la consola de tu IDE o editor de texto es posible que te devuelva un error tipo:  Error: EPERM: operation not permitted. No te preocupes, abre el proyecto con la consola de tu sistema operativo y vuelve a instalar.
14- Si todo ha salido bien, en tu archivo package.json debe haberse añadido express y mongoose como dependencias.
15- Creamos un archivo llamado .gitignore y escribimos: node_modules/  esto es para cuando subamos commits no se suba el archivo node_modules, que como puedes ver tiene muchísimos archivos.
16- Creamos una carpeta llamada api, aquí vamos a tener todo lo relacionado con nuestra api. 
17- Creamos carpeta llamada config, aquí vamos a tener la configuración general de la bbdd y la de la api.
18- Dentro de config creamos dos archivos: apiConfig.js y dbConfig.js aquí vamos a tener las configuraciones generales de la api y de mongo.
19- Todo en Mongoose comienza con un esquema. Cada esquema se asigna a una colección MongoDB y define la forma de los documentos dentro de esa colección.
20- Creamos una carpeta llamada models y dentro de este dos archivos, uno por cada colección, en este caso: desserts.js, drinks.js, mainCourses.js, starters.js y admin
21- Creamos los esquemas.
22- 





db.admin.insert({"name" : "admin","password" : "huecas"})








**Para cambiar de nombre una coleción.**
db.starters.renameCollection("maincourses") 

**Para borrar un documento.**
db.admin.deleteOne({_id:ObjectId("5e6665e5fa6c93b1d388cb84")}) 

**Para actualizar un documento de una colección.**
db.drinks.updateOne({ name: "Coca cola" },{$set: { "price": "2.75€"},$currentDate: { lastModified: true }})    

**Para borrar una colección.**
db.admin.drop()
             
     



                