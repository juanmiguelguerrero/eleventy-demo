# Apuntes Eleventy



### 1. Quickstart

La forma más rápida de comenzar con Eleventy es creando un nuevo proyecto:

```bash
$ mkdir eleventy
$ cd eleventy
$ npm init -y
```

Instamamos como dependencia de desarrollo Eleventy:

```bash
$ npm i -D @11ty/eleventy
```

Ahora podemos comprobar que la dependencia está instalada y conocer su versión:

```bash
$ npx @11ty/eleventy --version

0.9.0
```

Podemos ejecutar Eleventy:

```bash
$ npx @11ty/eleventy

Processed 0 files in 0.02 seconds (v0.9.0)
```

Al no existir ninguna plantilla Eleventy no tiene nada que procesar.

Creamos una plantilla ```index.html``` :

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	<h1>Hola Mundo</h1>
</body>
</html>
```

Y otra ```test.md```:

```markdown
# Soy una plantila tipo Markdown

---

Este contenido se convertirá a HTML por Eleventy.
```

Si probamos a ejecutar de nuevo Eleventy:

```bash
$ npx @11ty/eleventy

Writing _site/index.html from ./index.html.
Writing _site/test/index.html from ./test.md.
Processed 2 files in 0.07 seconds (v0.9.0)
```

Ahora Eleventy ha procesado las 2 plantillas que hemos generado. Por defecto guarda el resultado en la carpeta ```/_site```.

Si entramos en esta carpeta encontraremos un archivo `índex.html` en el raíz y otro dentro de la carpeta `/test`. Este último es el resultado de procesar nuestra plantillas `test.md`.

Como podemos comprobar, Elventy genera las rutas de los archivos abriendo carpetas que se corresponden con el nombre de cada archivo (ver más en https://www.11ty.io/docs/permalinks/).

Tenemos la opción de arrancar un servidor local donde podemos ver el resultado de nuestro trabajo. Para ello debemos ejecutar el siguiente comando:

```bash
$ npx @11ty/eleventy --serve
```

Ahora podemos ver el sitio web que hemos generado entrando en `http://localhost:8080` y `http://localhost:8080/test`.

Básicamente esto es Eleventy. A partir de aquí podemos ir modificando su configuración y combinarlo con otras herramientas de desarrollo hasta conseguir un entorno de desarrollo más completo.



### 2. Entorno de desarrollo ya configurado

Para facilitar el uso de Eleventy dispondemos de un entorno de desarrollo preconfugurado.

Podemos descargar un ejemplo en https://github.com/juanmiguelguerrero/netlify-eleventy

Este proyecto base incluye lo esencial para comenzar a trabajar: 

- Una organización de carpetas predefinidas.
- Configuración de webpack para entornos de desarrollo y producción.
- Prepocesado de SASS a CSS.
- Transpilado de Typescript a Javascript.
- Nunjucks como motor de plantillas.
- Compilación de Vue Single File Compoonents.
- Minificado de bundles css y javascript.
- Manejo y optimizado de assets.
- Archivo de configuración para publicación en Netlify.

Para comenzar solo tenemos que descargar el proyecto, instalar las dependencias y ejecutarlo en modo desarrollo con `$ npm run dev`.



### 3. Trabajando con plantillas

Generaremos la estructura de nuestro sitio web dentro de la carpeta `/src`.

Dentro de esta carpeta ya existen unas carpetas generadas por defecto:

- `/js` para el código fuente del Javascript que correrá en el navegador.
- `/css` para nuestros archivos SASS.
- `/_includes` donde almacenaremos los partials y layouts de nuestras plantillas. Todo lo que incluyamos en esta carpeta podemos utilizarlo desde Nunjucks o como layout.
- `/_data` el lugar para almacenar nuestras archivos de datos globales.

Al comenzar solo disponemos de una plantilla `index.njk` por defecto. Si abrimos esta plantilla nos encontramos lo siguiente:

```markdown
---
layout: layouts/default.njk
title: Index
---
<h1>{{ title }}</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nostrum aspernatur tempore ex alias dolores asperiores, soluta harum debitis sequi quos atque repellendus accusamus excepturi ipsam quasi tenetur natus ipsa.</p>
```

Lo más destacable de esta plantilla es el espacio de contenido enmarcado entre los símbolos `---`.

A este contenido se le denomina `Front Matter Data` y es interpretado por Eleventy cuando va a renderizar la plantilla.

En este caso definimos 2 variable: `layout` que es una propiedad de Eleventy que nos permite definir la plantilla sobre la que se cargará el contenido y `title` que es una propiedad que hemos definido nosotros de forma personalizada y que podemos utilizar en nuestra plantilla utilizando moustache syntax.

Por defecto, la sintaxis del Front Matter es YAML pero de forma alternativa podemos formatear utilizar formato JSON o JavaScript.

Existen diferente variables predefinidas por Eleventy que debemos conocer pues modifican el comportamiento de Eleventy al renderizar la plantillas.

Por ejemplo, `permalink` nos permite modificar la ruta final de nuestra plantilla incluso incluyendo variables.

Ver más en https://www.11ty.io/docs/data-frontmatter/



### 4. Trabajando con datos

Una plantilla puede utilizar diferentes fuentes de datos.

En orden prioritario las posibles fuentes de datos que podemos emplear son:

1. Front Matter Data incluido en la cabecera de la plantilla.
2. Front Matter Data incluido en el layout utiliza la plantilla.
3. Archivo de datos adjunto a una plantilla.
4. Archivo de datos incluido en el directorio.
5. Archivos de datos globales dentro de la carpeta `/_data`.

Eleventy nos proporciona algunas variables por defecto que podemos usar: `pkg`, `pagination`, `collections` y `page` que proporciona información sobre la página actual (por ejemplo `page.url` nos devuelve la URL para hacer un link con la página).











 





























