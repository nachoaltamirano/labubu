# Desplegar en Render (instrucciones en español)

Estos son los pasos para desplegar este proyecto Next.js en Render.com.

1. Regístrate o inicia sesión en https://render.com
2. Conecta tu repositorio (GitHub/GitLab).
3. Crea un nuevo Web Service (Web Service > New > Web Service) y selecciona el repositorio `labubu`.
4. Rellena estos campos:
   - Branch: `main`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - Environment: `Node`
   - Region: elige el que prefieras (por ejemplo `Oregon`).
5. Asegúrate de que el archivo `render.yaml` esté presente en la raíz del repositorio (ya incluido).
6. Opcional: en la pestaña de Environment, añade variables de entorno si tu app las necesita.
7. Haz click en "Create Web Service". Render instalará dependencias, ejecutará `npm run build` y lanzará el servicio.

Notas técnicas:
- El `start` usa `PORT` proporcionado por Render. En `package.json` el script `start` está configurado para usar `$PORT`.
- `engines.node` está fijado a `20.x` para asegurar compatibilidad.

Si quieres que yo prepare el push a GitHub (crear commit y push), dime el remoto a usar o confirma que quieres que haga un commit local y te muestre los comandos para empujar.
