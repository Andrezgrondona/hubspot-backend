
class Location {
    constructor(id, name, type, dimension, creationDate) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.dimension = dimension;
      this.creationDate = creationDate;
    }
  
    // Método para mapear datos a formato de HubSpot
    static mapToHubspotFormat(location) {
      return new Location(
        location.id,
        location.name,
        location.type,
        location.dimension,
        location.created
      );
    }
  }
  
  module.exports = Location;
  