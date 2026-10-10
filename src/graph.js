// Clase para gestionar el Grafo de Ciudades y Personas (Challenge 10)
export class SocialGraph {
  constructor() {
    this.nodesList = [];     
    this.adjacencyList = {}; 
    this.peopleData = [];    
    this.citiesData = [];    
  }

  addCity(cityName) {
    if (!this.citiesData.includes(cityName)) {
      this.citiesData.push(cityName);
      if (!this.adjacencyList[cityName]) {
        this.adjacencyList[cityName] = [];
        this.nodesList.push(cityName);
      }
    }
  }

  addPerson(name, age, cityName) {
    this.addCity(cityName);
    const personId = `${name} (${age} yrs)`;
    
    if (!this.adjacencyList[personId]) {
      this.adjacencyList[personId] = [];
      this.nodesList.push(personId);
      this.peopleData.push({ name, age, city: cityName });
    }

    this.addEdge(personId, cityName);
  }

  addEdge(node1, node2) {
    if (this.adjacencyList[node1] && !this.adjacencyList[node1].includes(node2)) {
      this.adjacencyList[node1].push(node2);
    }
    if (this.adjacencyList[node2] && !this.adjacencyList[node2].includes(node1)) {
      this.adjacencyList[node2].push(node1);
    }
  }

  getPeopleByCity(cityName) {
    return this.peopleData.filter(person => person.city === cityName);
  }

  getD3Data() {
    const nodes = this.nodesList.map(node => ({
      id: node,
      color: this.citiesData.includes(node) ? '#3b82f6' : '#10b981',
      size: this.citiesData.includes(node) ? 600 : 400
    }));

    const links = [];
    const addedLinks = new Set();

    Object.keys(this.adjacencyList).forEach(node => {
      this.adjacencyList[node].forEach(neighbor => {
        const linkKey = [node, neighbor].sort().toString();
        if (!addedLinks.has(linkKey)) {
          addedLinks.add(linkKey);
          links.push({ source: node, target: neighbor });
        }
      });
    });

    return { nodes, links };
  }
}

export function crearGrafoPrueba() {
  const grafo = new SocialGraph();

  grafo.addCity('Cali');
  grafo.addCity('Bogota');
  grafo.addCity('Medellin');

  grafo.addPerson('Maycol', 22, 'Cali');
  grafo.addPerson('Sofia', 20, 'Cali');
  grafo.addPerson('Carlos', 25, 'Bogota');
  grafo.addPerson('Lucia', 23, 'Bogota');
  grafo.addPerson('Andres', 27, 'Medellin');
  grafo.addPerson('Valentina', 21, 'Medellin');

  return grafo;
}