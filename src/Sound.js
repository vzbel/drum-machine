export default class Sound {
  #name; // Name of the sound
  #fileLocation; // Location of the sound file.
  #audio; // The audio object corresponding to the sound.

  // Create a new sound with a name and its file location.
  constructor(name, fileLocation) {
    this.#name = name;
    this.#fileLocation = fileLocation;
    this.#audio = new Audio(fileLocation); // Make an audio with given file location.
  }

  // Play the sound.
  play() {
    this.#audio.play();
  }

  // Get the sound name
  getName() {
    return this.#name;
  }

  // Get the sound's file location
  getFileLocation() {
    return this.#fileLocation;
  }

  // Set sound name
  setName(name) {
    this.#name = name;
  }
}
