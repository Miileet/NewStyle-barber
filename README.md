# Página web para una barbería

Sitio web de una barbería con estética oscura, minimalista y responsive.
Prioridad de la primera etapa: **resultado visual**; el backend queda estructurado
y preparado para la segunda etapa (servicios, turnos, clientes, administrador).

## Tecnologías

| Capa | Tecnología |
| --- | --- |
| Backend | Node.js + Express |
| Motor de plantillas | EJS |
| ORM | Sequelize |
| Base de datos | MySQL (administrable desde MySQL Workbench) |
| Frontend | HTML + CSS + JavaScript (sin frameworks) |
| Módulos | CommonJS (`require` / `module.exports`) |

## Estructura

```text
proyecto-barberia/
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js        # Variables de entorno (Puerto y MySQL)
│   │   ├── controllers/           # Lógica de rutas (home + stubs preparados)
│   │   ├── data/
│   │   │   └── site.js            # ← TODO el contenido editable del sitio
│   │   ├── database/
│   │   │   └── sequelize.js       # Instancia de conexión a MySQL
│   │   ├── middlewares/           # Locales de vistas, 404 y errores
│   │   ├── models/                # Modelos Sequelize + registro de relaciones
│   │   ├── routes/                # Rutas de Express
│   │   ├── views/
│   │   │   ├── partials/          # navbar, footer, hero y secciones
│   │   │   └── pages/             # index.ejs, error.ejs
│   │   └── main.js                # Punto de entrada del servidor
│   │
│   ├── public/
│   │   ├── css/style.css          # Estilos propios (identidad visual)
│   │   ├── js/main.js             # Interacciones (menú, scroll, animaciones)
│   │   └── img/                   # Imágenes del sitio (placeholders incluidos)
│   │
│   ├── .env                       # Variables reales (NO se sube a GitHub)
│   ├── .env.example               # Plantilla de variables
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── app / src/main.js
│
└── README.md
```

## Instalación

```bash
cd server
npm install
```

## Variables de entorno

Copiá `.env.example` como `.env` y completalo según tu base de datos:

```env
PORT=3000

DB_NAME=barberia
DB_USER=root
DB_PASSWORD=
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DIALECT=mysql
```

El archivo `.env` está ignorado por Git: nunca se sube a GitHub.

## Ejecución

```bash
npm start        # producción
npm run dev      # desarrollo con nodemon
```

Servidor: `http://localhost:3000`

> El sitio funciona aunque MySQL esté apagado: la conexión se intenta al arrancar
> y, si falla, se muestra un aviso en consola sin cortar el servidor.

## Base de datos (MySQL + Workbench)

1. Crear la base de datos en MySQL Workbench:

   ```sql
   CREATE DATABASE barberia CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

2. Ajustar `DB_*` en `.env`.
3. Los modelos están en `src/models/` (`Servicio`, `Horario`).
   Las relaciones se agregan en `src/models/index.js`.

## Rutas

| Método | Ruta | Estado |
| --- | --- | --- |
| GET | `/` | Página principal |
| GET | `/api/servicios` | Preparada (respuesta básica) |
| GET | `/api/turnos` | Preparada (respuesta básica) |
| GET | `/api/clientes` | Preparada (respuesta básica) |
| GET | `/api/horarios` | Preparada (respuesta básica) |
| GET | `/api/administrador` | Preparada (respuesta básica) |
| * | cualquier otra | 404 con página de error |

## Contenido del sitio (New Style Studio)

Todo el contenido vive en `server/src/data/site.js`: nombre, frase, textos,
servicios con precios en ARS, horarios, equipo, características del local,
fotos, dirección, mapa y datos de contacto.

Los valores entre corchetes `[ ]` son **placeholders**: se muestran en la
página con un subrayado punteado como campos pendientes de completar
(teléfono, WhatsApp, email, redes sociales, medios de pago y fotos).

### Reemplazar las imágenes de ejemplo

Las imágenes actuales (`public/img/*.svg`) son placeholders generados con
etiqueta "reemplazar". Para usar fotos reales:

1. Subir la foto a `server/public/img/`.
2. Actualizar `src` en `src/data/site.js` (hero, nosotros y galería).
3. Para sumar fotos a la galería: agregar un objeto `{ src, alt }` al array `galeria`.

### Google Maps

Pegar el código de incrustación de Google Maps en `contacto.mapa`
(dentro de `src/data/site.js`). Mientras esté vacío, se muestra un espacio
reservado.

### Botones de contacto

`telefono`, `whatsapp`, `instagram` y `facebook` aceptan texto visible.
Para habilitar los botones, completar además `whatsappUrl`
(por ejemplo `https://wa.me/5491100000000`).

## Segunda etapa (pendiente)

- Sistema de turnos (modelos, controladores y vistas).
- Panel de administrador y autenticación.
- Carga de servicios y horarios desde la base de datos.
