# Prueba de Concepto: Interacción entre Componentes con LitElement 2

Este proyecto es una prueba de concepto (POC) que demuestra la interacción entre dos componentes web separados utilizando **LitElement 2**. El objetivo es mostrar cómo un componente puede emitir un evento personalizado y otro componente puede escuchar ese evento y reaccionar en consecuencia.

## Descripción del Flujo

1. **Componente A** emite un evento personalizado que contiene un ID (por ejemplo, `id="123"`).
2. **Componente B** escucha el evento emitido por el Componente A.
3. Al hacer clic en un botón dentro del Componente B, se realiza una llamada `fetch` utilizando el ID recibido.

---

## Requisitos Previos

- **Node.js** instalado en tu sistema.
- **Navegador web moderno** que soporte módulos ES6 y Custom Elements (Chrome, Firefox, Edge, etc.).

---

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 1. Clona el Repositorio (o Descarga el Código)

```bash
git clone https://github.com/tu-usuario/lit-element-poc.git
cd lit-element-poc
```

### 2. Instala las Dependencias

```bash
npm install
```

---

## Ejecución

### Inicia el Servidor de Desarrollo

Utilizamos `@web/dev-server` para resolver las importaciones de módulos desde `node_modules`.

```bash
npm start
```

Esto iniciará el servidor y abrirá automáticamente la aplicación en tu navegador predeterminado.

---

## Uso de la Aplicación

1. **Emitir el ID:**
    - Haz clic en el botón **"Emitir ID"** del **Componente A**.
    - Deberías ver en la consola del navegador: `Componente B recibió ID: 123`.

2. **Realizar la Llamada Fetch:**
    - Haz clic en el botón **"Obtener Datos"** del **Componente B**.
    - Se intentará realizar una llamada `fetch` a `https://api.example.com/data/123`.
    - Dado que `api.example.com` es un dominio de ejemplo, es posible que recibas un error, pero el flujo demuestra la interacción esperada.

---

## Estructura del Proyecto

```
lit-element-poc/
├── src/
│   ├── component-a.js      // Código del Componente A
│   ├── component-b.js      // Código del Componente B
├── index.html              // Página principal que incluye los componentes
├── package.json            // Dependencias y scripts del proyecto
```

---

## Detalles Técnicos

### Componente A (`src/component-a.js`)

- **Funcionalidad:**
    - Emite un evento personalizado `'id-event'` con un ID en su detalle.
- **Uso:**
    - Renderiza un botón que, al ser clicado, dispara el evento.

### Componente B (`src/component-b.js`)

- **Funcionalidad:**
    - Escucha el evento `'id-event'` y almacena el ID recibido.
    - Al hacer clic en su botón, realiza una llamada `fetch` usando el ID almacenado.
- **Uso:**
    - Renderiza un botón que, al ser clicado, realiza la acción de `fetch`.

---

## Notas Importantes

- **Compatibilidad del Navegador:**
    - Asegúrate de usar un navegador que soporte ES6 y Custom Elements.

- **Resolución de Módulos:**
    - El proyecto utiliza `@web/dev-server` para resolver las importaciones de `lit-element` desde `node_modules`.

- **Llamadas Fetch:**
    - La URL utilizada en la llamada `fetch` es de ejemplo. Si deseas probar con una API real, reemplaza `https://api.example.com/data/` con una URL válida.

---

## Scripts Disponibles

En el archivo `package.json`, dispones de los siguientes scripts:

- **`npm start`**: Inicia el servidor de desarrollo y abre la aplicación en el navegador.

---
