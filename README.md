# Herbolario Kuida-Té - Landing Page

Landing page moderna para la masterclass de rehabilitación neurológica con Pilar Carrasco.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite 6** - Build tool y dev server ultrarrápido
- **Tailwind CSS 3** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos
- **GitHub Pages** - Hosting gratuito

## 📋 Requisitos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions.

### Configuración inicial:

1. **Crear repositorio en GitHub** (por ejemplo: `Herbolario-Kuidate`)

2. **Actualizar `vite.config.js`** con el nombre de tu repositorio:
   ```js
   base: '/Herbolario-Kuidate/', // Cambia esto al nombre exacto de tu repo
   ```

3. **Habilitar GitHub Pages:**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

4. **Subir el código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/Herbolario-Kuidate.git
   git push -u origin main
   ```

5. **El sitio se desplegará automáticamente** en:
   `https://TU_USUARIO.github.io/Herbolario-Kuidate/`

## ⚙️ Configuración importante

### URL de Telegram

Actualiza la URL del canal de Telegram en `src/IctusLanding.jsx`:

```jsx
const TELEGRAM_URL = 'https://t.me/tu_canal_aqui';
```

### Captura de leads

El formulario actualmente:
- Guarda leads en `localStorage` del navegador
- Muestra los datos en la consola del navegador
- Redirige a Telegram después de capturar el email

**Para integrar con un servicio de email marketing**, modifica la función `handleSubmit` en `src/IctusLanding.jsx` para conectar con:
- Mailchimp
- SendGrid
- ConvertKit
- Brevo (Sendinblue)
- Tu backend personalizado

## 📁 Estructura del proyecto

```
Herbolario-Kuidate/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Actions para despliegue
│   └── copilot-instructions.md # Guía para AI agents
├── src/
│   ├── IctusLanding.jsx        # Componente principal de la landing
│   ├── main.jsx                # Entry point de React
│   └── index.css               # Estilos con Tailwind
├── index.html                  # HTML base
├── package.json                # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
└── postcss.config.js           # Configuración de PostCSS
```

## 🎨 Características

- ✅ Diseño moderno y responsive
- ✅ Modal de captura de leads con validación
- ✅ Animaciones suaves
- ✅ SEO optimizado
- ✅ Despliegue automático con GitHub Actions
- ✅ Performance optimizado con Vite

## 📝 Licencia

© 2025 Kuida-Té · Pilar Carrasco
