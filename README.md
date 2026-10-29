# Zelda Hyrule Compendium - Aplicación Ionic 🛡️🗡️

Aplicación móvil desarrollada con **Ionic Framework** que consume la API pública de **Hyrule Compendium** (*The Legend of Zelda: Breath of the Wild*) para mostrar información sobre criaturas, materiales y equipamiento.

## 📱 Páginas y Navegación

La aplicación utiliza un sistema de navegación por pestañas (**Tabs**) que da acceso a 3 secciones principales:

* **Tabs (`/tabs`)**: Pestaña principal que gestiona la navegación de la aplicación mediante una barra inferior con los siguientes iconos de Ionicons:
  * 🐾 `paw`: Enlace a la sección de Criaturas.
  * 🍃 `leaf`: Enlace a la sección de Materiales.
  * 🔨 `hammer`: Enlace a la sección de Equipamiento.

* **Paw (`/paw`)**:
  * Obtiene y muestra la lista de criaturas desde el API.
  * Muestra el nombre (`name`), imagen (`image`), ubicaciones habituales (`common_locations`) y la recuperación de corazones (`hearts_recovered`).

* **Materials (`/materials`)**:
  * Obtiene y muestra la lista de materiales desde el API.
  * Muestra el nombre (`name`), imagen (`image`), ubicaciones habituales (`common_locations`) y la recuperación de corazones (`hearts_recovered`).

* **Equipment (`/equipment`)**:
  * Obtiene y muestra la lista de equipamiento desde el API.
  * Muestra el nombre (`name`), imagen (`image`), ubicaciones habituales (`common_locations`).
  * Incluye estadísticas específicas usando los iconos:
    * ⚡ `flash`: Para los puntos de ataque (`attack`).
    * 🛡️ `shield`: Para los puntos de defensa (`defense`).

## 🔍 Modal Personalizado

Al hacer clic sobre cualquier elemento listado en cualquiera de las 3 secciones, se abre un **Modal personalizado** que muestra:
* Nombre del elemento seleccionado.
* Imagen en alta resolución.
* Descripción completa del elemento (`description`).

## 🌐 Endpoints Utilizados

La aplicación consume los siguientes endpoints de la API oficial de Hyrule Compendium:

* **Criaturas**: `https://api.hyrule-compendium.com/v3/compendium/category/creatures`
* **Materiales**: `https://api.hyrule-compendium.com/v3/compendium/category/materials`
* **Equipamiento**: `https://api.hyrule-compendium.com/v3/compendium/category/equipment`

## 🛠️ Tecnologías Utilizadas

* [Ionic Framework](https://ionicframework.com/)
* [Angular](https://angular.io/) / [React](https://reactjs.org/) / [Vue](https://vuejs.org/)
* [Ionicons](https://ionic.io/ionicons)
* [Hyrule Compendium API](https://github.com/gadhagod/Hyrule-Compendium-API)

## 🚀 Instalación y Ejecución

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Accede al directorio del proyecto e instala las dependencias:
   ```bash
   cd zelda-hyrule-compendium
   npm install
   ```

3. Ejecuta la aplicación en modo desarrollo:
   ```bash
   ionic serve
   ```

   
---

## 👤 Autor

Creado por **[Francisco Belda](https://www.youtube.com/@franciscobelda)**.
 
👉 **[Canal de YouTube de Francisco Belda](https://www.youtube.com/@franciscobelda)**
