# Proyecto final 2da parte

2da parte del proyecto final de coderhouse.

## Resúmen

La 2da parte del proyecto final consta de entregar la misma funcionalidad del 1er proyecto con la diferencia de poder persistir en n bases de datos.

### Bases de datos

Para conectarse a una base de datos, hay que especificar mediante un número que consta de 0 a 3. Donde 0= memoria, 1=mongodb, 2=mongodb atlas y 3=MySQL.
Por defecto, en caso de no encontrar la base de datos, va a instanciarse en memoría.

La configuración se encuenta en la raíz principal del proyecto dentro de la carpeta "config".

### API

#### GET https://charm-slender-scaffold.glitch.me/productos/listar

#### GET https://charm-slender-scaffold.glitch.me/productos/listar/:id

#### POST https://charm-slender-scaffold.glitch.me/productos/guardar

El id del producto es autonúmerico.
timestamp now por defecto.

headers:

```
Content-Type: application/json
administrador: true
```

json

```
 {
  "nombre": "test",
  "descripcion": "test",
  "codigo":"123",
  "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WDu8nC8fZc2mQqfxPaqrVIRdQm9zHbkMr3zR0crFRwfcxSSC5optlgl_MgErZ1E8nDL_zlquepUo1A&usqp=CAU",
  "precio": 150,
  "stock": 15
}
```

#### PUT https://charm-slender-scaffold.glitch.me/productos/actualizar/:id

headers:

```
Content-Type: application/json
administrador: true
```

json

```
 {
  "nombre": "test updated",
  "descripcion": "test updated",
  "codigo":"123",
  "foto": "nohayfoto.jpg",
  "precio": 150,
  "stock": 15
}
```

#### DELETE https://charm-slender-scaffold.glitch.me/productos/borrar/:id

headers:

```
administrador: true
```

#### GET https://charm-slender-scaffold.glitch.me/carrito/listar

#### GET https://charm-slender-scaffold.glitch.me/carrito/listar/:id

#### POST https://charm-slender-scaffold.glitch.me/carrito/guardar

timestamp_producto y timestamp_carrito (timestamp now) se generan por defecto

headers:

```
Content-Type: application/json
```

json

```
{
    "nombre": "test",
    "descripcion": "test",
    "codigo": "123",
    "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WDu8nC8fZc2mQqfxPaqrVIRdQm9zHbkMr3zR0crFRwfcxSSC5optlgl_MgErZ1E8nDL_zlquepUo1A&usqp=CAU",
    "precio": 150,
    "stock": 15
}
```

#### DELETE https://charm-slender-scaffold.glitch.me/carrito/borrar/id

### Para correr el proyecto

```
npm start
```
