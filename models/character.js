// Modelo de datos para un personaje
class Character {
    constructor(id, firstName, lastName, status, species, gender) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.status = status;
      this.species = species;
      this.gender = gender;
    }
  
    // Método para mapear datos a formato de HubSpot
    static mapToHubspotFormat(character) {
      return new Character(
        character.id,
        character.name,
        character.status,
        character.species,
        character.gender
      );
    }
  }
  
  module.exports = Character;
  