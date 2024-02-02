# Mayoral Frontend Assignment

|              Desktop              |             Mobile              |
| :-------------------------------: | :-----------------------------: |
| ![Desktop](./.github/desktop.png) | ![Mobile](./.github/mobile.png) |

Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.

Tecnologías/Librerías requeridas:

- React
- Typescript
- Next.js

Funcionalidad a implementar:

- Separa en componentes de una forma óptima y organizada
- La vista debe asemejarse lo más parecido posible a las fotos adjuntas
- Implementar búsqueda de productos por nombre
- Consumir un JSON con los datos de productos (JSON local o externo)
- Cambiar la vista con los iconos indicados en la foto:
  - Escritorio de 4 a 3 elementos
  - Móvil de 3 a 2 elementos
- Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente)
- Crea los test unitarios que creas conveniente

# Dev Docs y Consideraciones del Ejercicio

## Despliegue del proyecto

- El proyecto se encuentra alojado en Vercel: (NT - Mayoral Assignment)[https://nt-mayoral-assignment.vercel.app/]
- Se ha dejado el archivo `.env.local` de manera excepcional en el repositorio para que se pueda correr la aplicación de manera local. En un entorno de producción, este archivo no se incluiría. La variable de entorno que contiene la URL de la API se encuentra configurada en Vercel.

## Entorno de desarrollo

- Se ha utilizado `Next 12`, por ser la versión ya preestablecida en el `package.json`. Sin embargo, en la versión 13 de Next.js se podría resolver de forma distinta aplicando `Server Components` y `App Routing` en lugar de `Page Routing` así como utilizar nuevas funciones nativas respecto a la modificación de los `SearchParams` en la URL.
- El JSON que se consume está alojado en Mocky.io para simular una respuesta a una API.
- El estilado utiliza **CSS Modules** y el archivo `styles/global.css` alberga un sencillo sistema de diseño basado las imágenes proporcionadas.

## Decisiones de desarrollo

- Para las funciones de **búsqueda y filtro** se ha optado por hacerlo en server a través de urlParams, simulando el comportamiento de la respuesta de una API si ésta proporcionara los resultados filtrados, paginados y ordenado (por ejemplo Shopify). Además este enfoque permitiría posteriormente introducir paginado, o infinite loading.
- Para la modificación de la vista, se ha optado por un enfoque muy sencillo a través de CSS y clases para resolver el caso de uso pedido. Para un caso en el que se contemplaran más número de columnas, la solución debería tener un enfoque más complejo, creando la tabla o modificando sus columnas de manera programática y dinámica.
- Se opta por utilizar `getServerSideProps` al ser un e-commerce donde los productos cambian con frecuencia versus otras estrategias posibles en NextJS. Descarto la llamada de productos en cliente para poder aprovechar las ventajas del SSR respecto al SEO. Descarto también el renderizado estático, a pesar de la velocidad, por no correr el riesgo de que se cacheen los elementos. No obstante, la nueva versión de Next cambia el enfoque de la entrategia de renderizado.
- Se ha includo un enlace de imagen "roto", para mostrar el uso del componente `ImageWithFallback` que muestra una imagen de fallback cuando la imagen da un error.
![image](https://github.com/NanyThery/mayoral-assignment/assets/47493473/58ecb53a-1840-45c0-8dd6-56b22ff93ccd)

