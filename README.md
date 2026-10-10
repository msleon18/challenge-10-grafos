# Challenge 10 - Grafos (Red Social y Geográfica)

Proyecto para el curso de Estructuras de Datos y Algoritmos. Implementación de una estructura de datos de Grafo aplicada a un modelo de ciudades y personas con atributos de nombre y edad, filtrado de habitantes y visualización interactiva en React.

## Integrante
- **Maycol Leon** - msleon18

## Descripción
Plataforma interactiva que modela un grafo social y geográfico donde las ciudades y las personas actúan como vértices (nodos) interconectados mediante aristas. Permite consultar dinámicamente el listado de habitantes por ciudad y renderizar el grafo en tiempo real utilizando `react-force-graph-2d`.

## Tecnologías usadas
- **Frontend:** React + Vite
- **Gráficos interactivos:** react-force-graph-2d
- **Iconografía:** Lucide React
- **Lenguaje:** JavaScript (ES6+)

## Estructura de datos
El grafo es **no dirigido** y se implementa con una **lista de adyacencia** (`adjacencyList`): un objeto donde cada vértice (ciudad o persona) guarda un arreglo con sus vecinos.

- **Vértices de tipo ciudad:** se identifican por su nombre (por ejemplo, `Cali`).
- **Vértices de tipo persona:** se identifican con el formato `Nombre (edad yrs)` (por ejemplo, `Maycol (22 yrs)`) y se vinculan a su ciudad.
- **Aristas:** cada persona se conecta con su ciudad mediante una arista bidireccional. Antes de insertarla se verifica que no exista, para evitar duplicados.
- **Datos auxiliares:** `peopleData` y `citiesData` guardan la información de personas y ciudades para poder filtrarlas rápidamente.

## Estructura del proyecto
- `src/graph.js`: Contiene la clase base `SocialGraph`, los métodos de inserción de ciudades y personas (`addCity`, `addPerson`, `addEdge`), el filtro por ciudad (`getPeopleByCity`) y la exportación de datos en formato nodos/links (`getD3Data`).
- `src/components/GraphComponent.jsx`: Componente encargado de renderizar y configurar la física y la visualización interactiva del grafo.
- `src/App.jsx`: Componente principal que integra el panel lateral de control, el selector de ciudades y el área de visualización gráfica.

## Funcionalidades implementadas
- **Grafo de Ciudades y Personas:** Estructura de vértices y aristas donde cada persona almacena nombre y edad, vinculada a su respectiva ciudad.
- **Consulta por Ciudad:** Sistema de filtrado reactivo para listar en tiempo real a los habitantes de una ciudad seleccionada.
- **Visualización Interactiva:** Renderizado dinámico del grafo con nodos diferenciados por color (ciudades en azul, personas en verde) y física ajustada para una buena distribución visual.
- **Interacción con el mouse:** Los nodos se pueden arrastrar, y el grafo admite zoom y desplazamiento.

## Cómo correr en local

1. Sitúate en la carpeta del proyecto:
```bash
cd challenge-10-grafos-nuevo
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre en el navegador la URL que muestra la terminal (normalmente `http://localhost:5173`).

## Ejemplo de datos
El grafo de prueba (`crearGrafoPrueba`) incluye tres ciudades y seis personas:

| Ciudad   | Habitantes                          |
|----------|-------------------------------------|
| Cali     | Maycol (22), Sofia (20)             |
| Bogota   | Carlos (25), Lucia (23)             |
| Medellin | Andres (27), Valentina (21)         |