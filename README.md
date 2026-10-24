# Dimelsa Villamizar — Comunicación con propósito

Página de marca personal profesional para una comunicadora social, docente universitaria y gestora académica.

## Contenido

- **Quién soy:** perfil profesional y principios de trabajo.
- **Academia:** formación superior, docencia y áreas de conocimiento.
- **Logros:** aportes académicos, administrativos y de investigación.
- **Contactos:** formulario base para conectar un canal profesional.

## Protección de datos

El contenido se redactó a partir del CV aportado, pero la versión pública excluye número de identificación, teléfonos, direcciones, firmas, fechas de nacimiento, números de contrato, documentos anexos y cualquier otro dato sensible o innecesario para la presentación profesional.

## Uso local

No requiere dependencias. Desde la carpeta del proyecto, ejecuta:

```bash
python3 -m http.server 3000 --bind 0.0.0.0
```

Luego abre `http://localhost:3000`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube `index.html`, `styles.css`, `script.js`, la carpeta `public/`, `app.config.ts` y este README.
3. En **Settings → Pages**, selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Antes de publicar, conecta el formulario de `index.html` a un correo profesional o a un servicio de formularios.

La tipografía se carga desde Google Fonts; si se requiere una versión completamente offline, descarga Cormorant Garamond y DM Sans y reemplaza el enlace del `<head>` por archivos locales.
