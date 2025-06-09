# Catalogo_virtual_tsp8

# Catálogo Virtual - Documentación Frontend

## 📌 Descripción General

Este repositorio contiene el desarrollo del frontend del proyecto **Catálogo Virtual**, una plataforma digital diseñada para mostrar productos de forma visual y organizada. La aplicación está construida en **React Native** con enfoque en tablets, siguiendo una **arquitectura hexagonal**, y haciendo uso de bibliotecas como `@tanstack/react-query`, `react-navigation`, y `fontawesome`.

---

## ✅ Trabajo Realizado

Durante la última semana, se realizaron avances significativos en el desarrollo del frontend. A continuación se detalla el progreso diario:

### 🗓 Cronología de Avances (semana anterior)

#### Lunes (2 de junio 2025)
- Revisión inicial del diseño de pantalla de catálogo.
- Estructura inicial del proyecto: organización por capas (`application`, `infrastructure`, `presentation`).
- Creación del componente base `CatalogoScreen` con diseño general de grilla (4 columnas para tablet).

#### Martes (3 de junio 2025)
- Implementación de `FlatList` para renderizado de productos con imagen, nombre, modelo y SKU.
- Estilos responsive con `Dimensions` para asegurar visualización correcta en tablet.
- Integración inicial de íconos con FontAwesome.

#### Miércoles (4 de junio 2025)
- Maquetación completa de tarjetas de productos.
- Integración del hook `useCatalogoProductosHook` con React Query para simular consumo de datos.
- Implementación de loading spinner y fallback visual cuando no hay productos.

#### Jueves (5 de junio 2025)
- Añadido filtro de productos por precio (mayores a $10).
- Mejora del diseño visual: paddings, sombras, separación entre tarjetas.
- Creación de componente reutilizable `ProductoCard`.

#### Viernes (6 de junio 2025)
- Agregado de botón flotante para acciones rápidas (ej. importar productos).
- Implementación de modal para importar productos de forma manual.
- Pruebas funcionales y revisión de UX en dispositivos reales.

#### Sábado (7 de junio 2025)
- Refactor de lógica para separar hooks, servicios y componentes de UI.
- Mejora de mensajes de error y estado vacío.
- Ajustes de estilos para modo oscuro (preparación).

#### Domingo (8 de junio 2025)
- Revisión general de código, limpieza de archivos no utilizados.
- Documentación técnica de componentes principales.
- Planificación de tareas para la siguiente semana (conexión con backend y paginación).

---

## 🧩 Componentes Desarrollados

- `CatalogoScreen`: pantalla principal de catálogo.
- `ProductoCard`: tarjeta individual con detalles del producto.
- `useCatalogoProductosHook`: hook para obtención de productos.
- `ImportarProductosModal`: componente modal para carga manual de productos.
- `FloatingActionButton`: botón flotante con acciones rápidas.

---

## 🛠️ Tecnologías Usadas

- **React Native**
- **TypeScript**
- **@tanstack/react-query**
- **React Navigation**
- **FontAwesome**
- **AsyncStorage / SQLite (preparación)**

---

## ⏱ Tiempos de Desarrollo (Atraso)

Se estimaba iniciar el módulo de catálogo el **27 de mayo**, sin embargo, el desarrollo se retrasó y comenzó formalmente el **2 de junio**, representando un atraso de 1 semana. Las causas incluyeron definición tardía de requerimientos y ajustes en prioridades del backend.

---

## 🔜 Próximos Pasos

- Conexión del catálogo con base de datos SQLite.
- Integración de sincronización offline/online.
- Agregado de paginación y búsqueda por SKU.
- Tests unitarios de hooks y componentes.

---

