# 🚀 Inicio Rápido - Robote.ar

## Para Ver el Sitio Ahora

```bash
cd C:\Users\luisw\repos\chatbot\WebRobotear
npm run dev
```

Abrí: **http://localhost:4321**

## Proximos Pasos Inmediatos

### 1. ✅ HECHO - Estructura Base
- [x] Landing page comercial
- [x] Catálogo de 7 robots
- [x] Página educativa de robótica
- [x] Blog con 3 artículos SEO
- [x] SEO completo (sitemap, robots.txt, meta tags)

### 2. ⏳ PENDIENTE - Configurar Formulario

**Archivo:** `src/pages/index.astro` línea ~270

```astro
<!-- Reemplazar esto -->
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

<!-- Por tu key de Web3Forms -->
<input type="hidden" name="access_key" value="TU_KEY_REAL" />
```

**Obtener key gratis:**
1. Ir a https://web3forms.com
2. Registrarse con email
3. Copiar Access Key
4. Pegar en el código

### 3. ⏳ PENDIENTE - Imágenes de Robots

**Opción más rápida:** Usar emojis actuales (ya funciona)

**Opción mejorada:**
- Generar imágenes con IA (DALL-E, MidJourney)
- Guardar en `public/robots/`
- Actualizar `src/data/robots.ts`

### 4. ⏳ PENDIENTE - Actualizar Links de Demos

**Archivo:** `src/data/robots.ts`

```typescript
// Actualizar con tus bots reales
demoTelegram: 'https://t.me/tu_bot_real',
demoWhatsApp: 'https://wa.me/549XXXXXXXXX?text=Hola',
```

### 5. ⏳ OPCIONAL - Logos y Favicon

Crear:
- `public/favicon.svg` → Logo pequeño para pestaña
- `public/logo.png` → Logo para SEO
- `public/og-image.jpg` → Imagen para compartir en redes

## Deploy a Producción

### Vercel (100% Gratis, Recomendado)

```bash
# Push a GitHub
git add .
git commit -m "Sitio Robote.ar completo"
git push origin main

# Deploy con Vercel
npm i -g vercel
vercel --prod
```

Después configurar dominio robote.ar en Vercel Settings.

## Estructura de Carpetas

```
WebRobotear/
├── src/
│   ├── pages/          # Páginas del sitio
│   │   ├── index.astro         # Landing (INICIO)
│   │   ├── robots.astro        # Catálogo
│   │   ├── robots/[slug].astro # Robots individuales
│   │   ├── robotica.astro      # Página educativa
│   │   └── blog/               # Blog
│   ├── components/     # Componentes reutilizables
│   ├── data/          # Datos de robots
│   └── content/       # Artículos del blog
└── public/            # Assets estáticos
```

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Ver errores TypeScript
npx astro check
```

## Decisiones de Diseño

### Estilo Actual: Moderno/Minimalista
- Gradientes blue-cyan
- Espaciado generoso
- Cards con shadow
- CTAs con gradientes

### Para Cambiar a Estilo Argentino:
1. Cambiar gradientes a celeste/blanco
2. Agregar bandera 🇦🇷 en más lugares
3. Usar tipografía más bold/impactante

## Keywords SEO Implementadas

**Primarias:**
- chatbot argentina
- bot whatsapp para negocios
- automatización pymes argentina
- chatbot para restaurantes

**Long-tail:**
- bot whatsapp para muebleria argentina
- chatbot telegram para negocios
- automatizar verduleria con whatsapp

## Próximos Artículos de Blog (Ideas)

1. "Cuánto Cuesta Implementar un Bot de IA" (precios argentinos)
2. "Casos de Éxito: PyMEs Argentinas + IA"
3. "Cómo los Robots Aumentan Reservas en Cabañas"
4. "Bot para Restaurantes: ROI en 30 Días"
5. "LangChain vs LlamaIndex para Bots Argentinos"

## Monitoreo Post-Launch

1. Google Search Console (submit sitemap)
2. Google Analytics (trackear conversiones)
3. Hotjar (heatmaps de clicks)
4. Meta Pixel (si hacés ads en Facebook/Instagram)

## Contacto

Si tenés dudas técnicas, consultá el README.md completo o escribime.

---

**Status Actual: ✅ LISTO PARA DEPLOY**

Solo falta:
- Configurar Web3Forms key (2 min)
- Actualizar links de demos (5 min)
- Deploy a Vercel (10 min)

**TOTAL: ~20 minutos para estar en producción**
