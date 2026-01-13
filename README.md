# 🍳 AI Recipe Generator

> Una aplicación web que genera recetas personalizadas usando Inteligencia Artificial basándose en los ingredientes disponibles.

## 🎯 Objetivo del Proyecto

Este proyecto forma parte de mi portfolio como desarrollador Full Stack especializado en **AI Integration**. Demuestra la capacidad de integrar APIs de IA en aplicaciones web modernas.

## ✨ Funcionalidades

- 📝 **Input inteligente de ingredientes** - Ingresa los ingredientes que tienes disponibles
- 🎛️ **Personalización avanzada** - Selecciona tipo de cocina, tiempo y dificultad
- 🤖 **Generación con IA** - Utiliza OpenAI GPT-4 para crear recetas únicas
- 📱 **Interfaz responsive** - Funciona perfectamente en desktop y móvil
- ⭐ **Guardar favoritas** - Almacena tus recetas preferidas localmente

## 🛠️ Stack Técnico

### Frontend
- **React** - Biblioteca de JavaScript para interfaces de usuario
- **CSS3** - Estilos modernos y responsive design
- **JavaScript ES6+** - Lógica del cliente

### Backend
- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web minimalista
- **OpenAI API** - Integración con GPT-4 para generación de recetas

### Herramientas
- **Git** - Control de versiones
- **npm** - Gestión de paquetes
- **Netlify** - Deploy del frontend
- **Railway/Render** - Deploy del backend

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Cuenta en OpenAI (para API key)

### Configuración

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/recipe-ai-generator.git
cd recipe-ai-generator
```

2. **Instalar dependencias del frontend**
```bash
cd frontend
npm install
```

3. **Instalar dependencias del backend**
```bash
cd ../backend
npm install
```

4. **Configurar variables de entorno**
```bash
# En /backend crear archivo .env
OPENAI_API_KEY=tu_api_key_aqui
PORT=5000
```

5. **Ejecutar la aplicación**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

## 📁 Estructura del Proyecto

```
recipe-ai-generator/
├── .amazonq/rules/          # Reglas locales de Amazon Q
├── frontend/                # Aplicación React
├── backend/                 # API Node.js + Express
├── docs/                    # Documentación adicional
└── README.md               # Este archivo
```

## 🎨 Capturas de Pantalla

*[Agregar capturas cuando esté terminado]*

## 🔮 Próximas Mejoras

- [ ] Integración con base de datos (MongoDB)
- [ ] Sistema de usuarios y autenticación
- [ ] Compartir recetas en redes sociales
- [ ] Generación de imágenes de platos con DALL-E
- [ ] Calculadora nutricional

## 👨‍💻 Sobre el Desarrollador

Soy un desarrollador Full Stack especializado en **AI Integration**, enfocado en crear aplicaciones web que aprovechan el poder de la Inteligencia Artificial para resolver problemas reales.

**Tecnologías:** JavaScript, React, Node.js, OpenAI API, AWS

**Contacto:** [Tu email] | [Tu LinkedIn] | [Tu GitHub]

## 📄 Licencia

MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ **¿Te gustó el proyecto? ¡Dale una estrella en GitHub!**