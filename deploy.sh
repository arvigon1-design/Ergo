#!/bin/bash

# Script de despliegue a GitHub Pages
# Uso: bash deploy.sh

echo "🚀 Iniciando despliegue a GitHub Pages..."
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado"
    echo "Por favor, ejecuta este script desde la raíz del proyecto"
    exit 1
fi

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Generar build de producción
echo "🔨 Generando build de producción..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error al generar el build"
    exit 1
fi

echo "✅ Build generado exitosamente"
echo ""

# Instalar gh-pages si no está instalado
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Instalando gh-pages..."
    npm install -D gh-pages
fi

# Desplegar a GitHub Pages
echo "🚀 Desplegando a GitHub Pages..."
npx gh-pages -d build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Despliegue exitoso!"
    echo ""
    echo "🌐 Tu sitio estará disponible en:"
    echo "   https://arvigon1-design.github.io/Ergo/"
    echo ""
    echo "⏱️  Espera 1-2 minutos para que GitHub Pages procese los cambios"
    echo ""
    echo "📋 Pasos finales:"
    echo "   1. Ve a: https://github.com/arvigon1-design/Ergo/settings/pages"
    echo "   2. En 'Source', selecciona 'Deploy from a branch'"
    echo "   3. En 'Branch', selecciona 'gh-pages' y '/ (root)'"
    echo "   4. Haz clic en 'Save'"
else
    echo ""
    echo "❌ Error en el despliegue"
    exit 1
fi
