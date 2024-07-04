import Sound from "/src/Sound.js";

// A soundbank with sounds for drum machines to use.
export default class SoundBank {
  #soundList; // The list containing the sounds.

  // Create soundbank
  constructor() {
    this.#soundList = new Array(); // List for sounds
  }

  // Insert a Sound object into the list.
  addSound(sound) {
    this.#soundList.push(sound);
  }

  // Remove a sound object by name
  removeSound(soundName) {
    // Iterate through the sound list
    for (let i = 0; i < this.#soundList.length; i++) {
      // If a sound object's name matches the given name, remove it.
      if (this.#soundList[i].getName() === soundName) {
        this.#soundList.splice(i, i + 1); // Slice that part of the array
        return true;
      }
    }
    return false;
  }

  // Get the list of sounds.
  getSoundList() {
    return this.#soundList;
  }
}
