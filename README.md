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
    
   
        db.starters.insert({"name" : "Tartar de tomate","price" : "9.90€", "image" : "https://s3.eestatic.com/2015/08/18/cocinillas/Cocinillas_57254275_116206491_1024x576.jpg"})

        db.starters.insert({"name" : "Sopa de cebolla","price" : "6.90€", "image": "https://cocina-casera.com/wp-content/uploads/2018/01/sopa-de-cebolla-francesa-3.jpg"})

        db.starters.insert({"name" : "Dumplings de Angus en BBQ Japonés","price" : "8.60€", "image":'https://media-cdn.tripadvisor.com/media/photo-s/19/23/2e/68/dumplings.jpg})

        db.starters.insert({"name" : "Sardinas del Cantábrico ahumadas","price" : "10.80€", "image":"https://media-cdn.tripadvisor.com/media/photo-s/11/2c/e5/ae/lomo-de-sardina-ahumada.jpg})

        db.starters.insert({"name" : "Tempura picante de bogavante","price" : "15.70€","image":"https://www.inoutviajes.com/galerias-noticias/galerias/8613/THELOBSTARRRSS-13.jpg"})

        db.starters.insert({"name" : "Lomos de salmonete con piel tostada y sal volcánica","price" : "14.90€","image":"https://2.bp.blogspot.com/-YKBDPea4lPc/V4vqq9p2YuI/AAAAAAAAHjA/-zIagIVEM807vXZXNc5_6ZRCY7EhbAmjgCLcB/s1600/20160717_133614.jpg"})

        db.starters.insert({"name" : "Anchoas del Cantábrico Doble 0","price" : "11.90€", "image":"https://www.alimentacionselecta.com/wp-content/uploads/2015/05/ANCHOAS-00-DE-SANTO%C3%91A-GOURMET-BARATAS-ECONOMICAS-PRECIOS-HECHAS-A-MANO-ENVIOS-A-DOMICILIO-PORTES-GRATIS.jpg"})

    5.6 => Para crear la colección de mainCourses escribe en consola: 




         



        db.maincourses.insert({"name" : "Ostras al natural o con salsa ponzu","price" : "19.90€","image" : "https://media.timeout.com/images/103339718/630/472/image.jpg"})

        db.maincourses.insert({"name" : "Salpicón de bogavante","price" : "23.90€","image" : "https://s1.eestatic.com/2017/12/29/cocinillas/Cocinillas_273234737_116459622_1024x576.jpg"})

        db.maincourses.insert({"name" : "Almejas gallegas a la sartén","price" : "21.00€", "image": "https://www.pescaderiascorunesas.es/sites/default/files/2017-11/Almejas%20a%20la%20sarten02.jpg"})

        db.maincourses.insert({"name" : "Berberechos de la ría de Noia al vapor","price" : "17.90€", "image":"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/10/25/15404666555789.jpg"})

        db.maincourses.insert({"name" : "Navajas de la Ría a la sartén","price" : "32.90€", "image": "https://elcocinerocasero.com/imagen/receta/1000/1000/2017-11-12-20-00/navajas-a-la-marinera.jpeg"})

        db.maincourses.insert({"name" : "Steak Tartare","price" : "24.90€","image":"https://img.bekiacocina.com/cocina/0000/336-c.jpg"})

        db.maincourses.insert({"name" : "Tartar de atún picante","price" : "26.90€", "image": "https://bacira.es/wp-content/uploads/2018/01/Tartar-de-atun-picante-con-aguacate-wakame-y-pomelo-rosa-entera-15%E2%82%AC-y-media-racion-8%E2%82%AC.jpg"})

        db.maincourses.insert({"name" : "Tiradito de pez limón a la miel, salsa de ostras y pisco","price" : "28.90€","image":"https://live.mrf.io/statics/i/ps/www.ecestaticos.com/imagestatic/clipping/9db/0e3/9db0e3c77efb3a5c4f5a1a6e2ece3028/ruta-por-13-de-los-mejores-ceviches-de-madrid.jpg?mtime=1579565836"})

        db.maincourses.insert({"name" : "Ceviche de corvina salvaje","price" : "18.70€", "image", "5e7489086ed2564677c7a4bd"})

        db.maincourses.insert({"name" : "Ceviche de langosta","price" : "33.90€", "image" : "https://4.bp.blogspot.com/-0UGYKJlIgro/UgJrbir9s7I/AAAAAAAAAbQ/fBqzIscUwm4/s1600/ceviche_camaron.jpg"})

        db.maincourses.insert({"name" : "Carpaccio de lomo de vaca madurada","price" : "23.90€", "image":"https://www.codigococina.com/wp-content/uploads/2016/12/como_hacer_carpaccio.jpg"})

        db.maincourses.insert({"name" : "Aguachile de zamburiñas","price" : "31.90€", "image":"https://media-cdn.tripadvisor.com/media/photo-s/10/fc/a8/6b/aguachile-de-zamburinas.jpg"})

        db.maincourses.insert({"name" : "Tataki de atún de almadraba con ensalada de aguacate","price" : "27.90€","image":"https://lh4.googleusercontent.com/proxy/_iqePePNJvZkI2eplbCkQ1PprQTJbYCAzqHZEQ2RFVgRQTotI1C4LLUT25qSph7KqWl4QWznR5RK9v56CL2LTr75Z4jd0xcTiGVcS6wd2R_oC6liAaaC1griTTegSqZSvgIsTjnu5Y4IvCo"})

        db.maincourses.insert({"name" : "Arroz 'Chaufa' con pato Pekín y langostinos","price" : "21.50€","image": "https://micomidaperuana.com/wp-content/uploads/2019/09/aeropuerto-food-peruvian.jpg"})

        db.maincourses.insert({"name" : "Pluma ibérica con puré de boniato","price" : "26.30€", "image", "https://www.ibericommunity.com/wp-content/uploads/2019/07/Pluma-ib%C3%A9rica-2.jpg"})

    5.7 => Para crear la colección de dessserts escribe en consola: 







        db.desserts.insert({"name" : "Tarta de queso","price" : "6.90€", "image":"https://www.lolitalapastelera.com/wp-content/uploads/Galeria-5-76-680x1020.jpg"})
        db.desserts.insert({"name" : "Volcán de dulce de leche","price" : "7.90€", "image":"https://placeralplato.com/files/2018/06/Volcn-de-dulce-de-leche.jpg"})
        db.desserts.insert({"name" : "Key lime pie","price" : "9.90€", "image":"https://www.livewellbakeoften.com/wp-content/uploads/2019/12/Key-Lime-Pie-2.jpg"})
        db.desserts.insert({"name" : "Mousse de chocolate","price" : "5.50€", "image":"https://okdiario.com/img/recetas/2017/09/28/tarta-mousse-de-chocolate.jpg"})

     5.8 => Para crear la colección de dessserts escribe en consola: 

     db.drinks.update({_id: ObjectId("5e74b3376b40f21f84cfb307")},{$set:{image:"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/24/00118650500038____1__600x600.jpg"}})

        db.drinks.insert({"name" : "Coca cola","price" : "2.5€","image":"https://www.encopadebalon.com/3507-thickbox_default/coca-cola-pack-24-botellas-20cl.jpg"})

        db.drinks.insert({"name" : "Coca cola zero","price" : "2.75€","image":"https://www.encopadebalon.com/3901-thickbox_default/coca-cola-zero-pack-24-botellas-20cl.jpg"})

        db.drinks.insert({"name" : "Coca cola light","price" : "2.75€","image":"https://www.encopadebalon.com/3506-large_default/coca-cola-light-pack-24-botellas-20cl.jpg"})

        db.drinks.insert({"name" : "Fanta de naranja","price" : "2.5€","image":"https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/767x1021/9df78eab33525d08d6e5fb8d27136e95/2/3/x2398.jpg.pagespeed.ic.rEvH8jAYZz.jpg"})

        db.drinks.insert({"name" : "Mosto","price" : "2€","image":"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/24/00118650500038____1__600x600.jpg"})

        db.drinks.insert({"name" : "Agua","price" : "1.8€","image":"https://elalmacendebebidas.es/356-large_default/agua-bejis-10-l-garrafa-de-cristal-retornable.jpg"})

        db.drinks.insert({"name" : "Terras Gauda","price" : "18€","image":"https://admin.bodeboca.com/sites/default/files/bot-terrasgauda-et-negra-2017.jpg"})

        db.drinks.insert({"name" : "Cunqueiro III Milenio","price" : "25€","image":"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201802/20/00118769601750____2__600x600.jpg"})  

        db.drinks.insert({"name" : "Marqués de Murrieta Capellanía","price" : "27€","image":"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201611/02/00113349000052____4__640x640.jpg"})

         db.drinks.insert({"name" : "Muga Crianza","price" : "31€","image":"https://www.decantalo.com/352635-product_default/muga-crianza.jpg"})

         db.drinks.insert({"name" : "Emilio Moro","price" : "29€","image":"https://cdn2.mundovinum.com/4216-large_default/emilio-moro-2017.jpg"})

         db.drinks.insert({"name" : "Saint Joseph La Source","price" : "41€","image":"https://www.binnys.com/media/catalog/product/cache/eab16ae251e4410504af434c6d9419db/9/7/974797.jpg"})

         db.drinks.insert({"name" : "Mahou 5 estrellas","price" : "2.5€","image":"https://birrapedia.prevista.net/modulos/market/7c/43/mahou-5--estrellas-1-3-no-ret-caja-24-botellas-15471209364717-g.jpg"})

         db.drinks.insert({"name" : "Estrella Galicia 1906","price" : "3.5€","image":"https://www.encopadebalon.com/4990-large_default/cerveza-estrella-galicia-1906-pack-24-unidades-33cl.jpg"})

         db.drinks.insert({"name" : "Alhambra 1925","price" : "3.5€","image":"https://www.encopadebalon.com/3542-large_default/cerveza-alhambra-reserva-1925-pack-24-botellas.jpg"})

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
             
     



                