# Copilot Instructions - Herbolario Kuida-Té

## Project Overview
Landing page moderna para masterclass de rehabilitación neurológica. Stack: **React 18 + Vite 6 + Tailwind CSS 3**.

Objetivo: Capturar leads (email) antes de redirigir a canal de Telegram con acceso a curso online.

## Architecture & Key Files

- `src/IctusLanding.jsx` - Componente principal único (single-page)
- `src/main.jsx` - Entry point que renderiza IctusLanding
- `src/index.css` - Tailwind directives + custom styles
- `vite.config.js` - **CRÍTICO:** `base` debe coincidir con nombre del repo GitHub para Pages

## Development Commands

```bash
npm install          # Instalar dependencias
npm run dev         # Dev server en http://localhost:5173
npm run build       # Build para producción en /dist
npm run preview     # Preview del build local
```

## Lead Capture Flow (Critical Pattern)

**Flujo implementado:**
1. Usuario hace clic en CTAs → Abre modal (`showModal`)
2. Modal muestra formulario de nombre + email
3. Al submit: guarda en `localStorage` + console.log (temporal)
4. Muestra pantalla de éxito 2 segundos
5. Redirige automáticamente a `TELEGRAM_URL`

**Para integración con email service:**
- Modificar función `handleSubmit` en `IctusLanding.jsx`
- Reemplazar el `console.log('Lead capturado:', formData)` con API call a Mailchimp/SendGrid/ConvertKit/etc
- Mantener el flujo de UX (loading → success → redirect)

## Configuration Points

### Telegram URL (MUST CHANGE)
```jsx
// src/IctusLanding.jsx línea ~15
const TELEGRAM_URL = 'https://t.me/tu_canal_aqui'; // ⚠️ ACTUALIZAR
```

### GitHub Pages Base Path
```js
// vite.config.js
base: '/Herbolario-Kuidate/', // ⚠️ Debe coincidir con nombre EXACTO del repo
```

## Deployment to GitHub Pages

**Automático via GitHub Actions** (`.github/workflows/deploy.yml`):
- Trigger: Push a `main` branch
- Build con Node 20, ejecuta `npm run build`
- Deploys `/dist` a GitHub Pages

**Setup inicial (una sola vez):**
1. Crear repo en GitHub
2. Settings → Pages → Source: "GitHub Actions"
3. Actualizar `base` en `vite.config.js` con nombre del repo
4. Push a `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USUARIO/NOMBRE-REPO.git
   git push -u origin main
   ```

**URL final:** `https://USUARIO.github.io/NOMBRE-REPO/`

## Styling Conventions

- **Tailwind utility-first:** Todo el diseño usa clases de Tailwind
- **Gradientes:** `from-indigo-600 to-blue-600` para CTAs principales
- **Animaciones inline:** `@keyframes` en `<style>` del componente (fadeIn, slideUp)
- **Responsive:** Mobile-first con breakpoint `md:` para desktop

## Component Structure Pattern

Componente monolítico funcional con hooks:
- `useState` para modal, form data, loading states
- `useEffect` para animaciones de entrada y control de scroll
- Event handlers inline (`onClick={handleCTAClick}`)
- Modal con portal-style positioning (`fixed inset-0 z-50`)

## Common Tasks

**Cambiar textos/copy:** Editar directamente JSX en `IctusLanding.jsx`  
**Añadir secciones:** Insertar entre las secciones comentadas (`{/* Hero Section */}`)  
**Modificar colores:** Buscar `indigo-600`, `blue-600` y reemplazar por colores Tailwind  
**Integrar analytics:** Añadir script en `index.html` o tracking en event handlers

## Performance Notes

- Vite hace HMR ultra-rápido en desarrollo
- Build de producción aplica tree-shaking, minification automática
- Lucide-react importa solo iconos usados (no todo el paquete)
- Tailwind purge automático elimina CSS no usado en build
