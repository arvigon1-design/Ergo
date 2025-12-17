# Instrucciones de Despliegue - Prototipo Selector Evaluación Ergonómica

## 📦 Contenido del Proyecto

Este proyecto es una aplicación web React + TypeScript + Vite que implementa un selector de metodologías de evaluación ergonómica.

## 🔧 Requisitos Previos

- Node.js (versión 16 o superior)
- npm (viene con Node.js)
- Git (opcional, para control de versiones)

## 📥 Instalación y Despliegue

### 1. Descomprimir el archivo

```bash
tar -xzf prototipo-ergonomico.tar.gz
cd webapp
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: http://localhost:3000

### 4. Generar build de producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `build/`

## 🌐 Opciones de Despliegue

### Opción 1: Servidor estático (Nginx, Apache, etc.)

1. Ejecuta `npm run build`
2. Copia el contenido de la carpeta `build/` a tu servidor web
3. Configura el servidor para servir `index.html` como fallback para todas las rutas

Ejemplo de configuración Nginx:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /ruta/a/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Opción 2: Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto ejecuta: `vercel`
3. Sigue las instrucciones en pantalla

### Opción 3: Netlify

1. Instala Netlify CLI: `npm i -g netlify-cli`
2. En la carpeta del proyecto ejecuta: `netlify deploy`
3. Especifica `build` como directorio de publicación

### Opción 4: GitHub Pages

1. Sube el proyecto a GitHub
2. En la configuración del repositorio, habilita GitHub Pages
3. Selecciona la rama y carpeta (generalmente `main` y `/build` o `/docs`)

## 📋 Estructura del Proyecto

```
webapp/
├── src/
│   ├── components/        # Componentes React
│   │   ├── Welcome.tsx           # Pantalla de bienvenida
│   │   ├── Step0PersonConditions.tsx    # Paso 1: Persona
│   │   ├── Step1PhysicalTaskLoad.tsx    # Paso 2: Tarea
│   │   ├── Step2TMEIntroduction.tsx     # Paso 3: Formulario HubSpot
│   │   ├── Step3Results.tsx             # Paso 4: Resultados
│   │   └── ui/            # Componentes de UI reutilizables
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
│   └── types.ts          # Tipos TypeScript
├── public/               # Archivos estáticos
├── package.json          # Dependencias del proyecto
├── vite.config.ts        # Configuración de Vite
└── tsconfig.json         # Configuración de TypeScript
```

## 🔑 Configuración del Formulario HubSpot

El formulario de HubSpot está configurado en `src/components/Step2TMEIntroduction.tsx`:

```javascript
portalId: "26581627"
formId: "147c48fe-d67f-4f51-8b2d-68b99cafab35"
region: "eu1"
```

Para cambiar estos valores, edita el archivo mencionado y busca la función `createForm()`.

## 🐛 Solución de Problemas

### El formulario de HubSpot no se carga

- Verifica que tu dominio tenga acceso a `//js-eu1.hsforms.net/`
- Revisa la consola del navegador para ver errores
- Asegúrate de que el `portalId` y `formId` sean correctos

### Error al compilar

- Ejecuta `rm -rf node_modules package-lock.json`
- Vuelve a instalar: `npm install`

### Puerto 3000 ya en uso

- Cambia el puerto en `vite.config.ts` en la sección `server.port`
- O especifica otro puerto: `npm run dev -- --port 3001`

## 📞 Soporte

Para más información sobre el proyecto:
- Instituto de Biomecánica de Valencia (IBV)
- Web: https://www.ergoibv.com/es/

