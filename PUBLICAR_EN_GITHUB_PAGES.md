# 🚀 Cómo Publicar en GitHub Pages

## ✅ Cambios Ya Aplicados

Los siguientes cambios ya están en el repositorio:
- ✅ Configuración de `base: '/Ergo/'` en `vite.config.ts`
- ✅ Archivo `.nojekyll` para compatibilidad
- ✅ Archivo `.gitignore` para excluir archivos innecesarios

---

## 📋 Opción 1: Despliegue Manual (Más Simple)

### Paso 1: Generar el Build

En tu computadora local, después de clonar el repositorio:

```bash
git clone https://github.com/arvigon1-design/Ergo.git
cd Ergo
npm install
npm run build
```

### Paso 2: Subir a Rama gh-pages

```bash
# Instalar gh-pages (solo primera vez)
npm install -D gh-pages

# Desplegar
npx gh-pages -d build
```

### Paso 3: Habilitar GitHub Pages

1. Ve a: **https://github.com/arvigon1-design/Ergo/settings/pages**
2. En **"Source"**, selecciona: **"Deploy from a branch"**
3. En **"Branch"**, selecciona: **`gh-pages`** y **`/ (root)`**
4. Haz clic en **"Save"**
5. Espera 1-2 minutos

### ✅ Tu sitio estará disponible en:
**https://arvigon1-design.github.io/Ergo/**

---

## 📋 Opción 2: Despliegue Automático con GitHub Actions

### Paso 1: Habilitar GitHub Pages desde GitHub Actions

1. Ve a: **https://github.com/arvigon1-design/Ergo/settings/pages**
2. En **"Source"**, selecciona: **"GitHub Actions"**

### Paso 2: Crear el Workflow

Crea el archivo `.github/workflows/deploy.yml` con este contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './build'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Paso 3: Commit y Push

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: Añadir workflow de GitHub Actions"
git push origin main
```

### Paso 4: Verificar el Despliegue

1. Ve a: **https://github.com/arvigon1-design/Ergo/actions**
2. Verás el workflow ejecutándose
3. Cuando termine (tarda ~2-3 minutos), tu sitio estará en:

**https://arvigon1-design.github.io/Ergo/**

---

## 🔄 Actualizar el Sitio

### Si usas Opción 1 (Manual):
```bash
npm run build
npx gh-pages -d build
```

### Si usas Opción 2 (Automático):
```bash
git add .
git commit -m "Actualizar contenido"
git push origin main
# GitHub Actions desplegará automáticamente
```

---

## ⚠️ Solución de Problemas

### El sitio muestra 404
- Verifica que la configuración de GitHub Pages apunte a la rama correcta
- Espera 2-3 minutos después de hacer cambios

### Los recursos no cargan (CSS, JS, imágenes)
- Verifica que `base: '/Ergo/'` esté en `vite.config.ts`
- Regenera el build: `npm run build`

### El workflow falla
- Revisa los logs en: https://github.com/arvigon1-design/Ergo/actions
- Verifica que los permisos de GitHub Actions estén habilitados en Settings > Actions > General

---

## 📌 Resumen

**URL Final:** https://arvigon1-design.github.io/Ergo/

**Recomendación:** Usa la **Opción 1 (Manual)** si es tu primer despliegue. Es más simple y directo.

Una vez que funcione, puedes migrar a la **Opción 2 (Automático)** para facilitar futuras actualizaciones.
