// A drum machine with drum pads.
export default class DrumMachine {
  // Directory of sounds
  #directory = "/audio/";
  // File extension of sounds
  #fileExtension = ".wav";
  // HTML elements
  #drumMachine = document.querySelector(".drum-machine"); // Main container (HTML)

  // Main sounds
  #kick;
  #clap;
  #hihat;
  #snare;
  #bass;
  #crash;
  #perc;
  #hihatRoll;

  // Create new drum machine
  constructor() {
    this.initializeSounds();
    this.initializeEventListeners();
  }

  // Initialize sounds by specific directories
  initializeSounds() {
    this.#kick = new Audio(`${this.#directory}Kick${this.#fileExtension}`);
    this.#clap = new Audio(`${this.#directory}Clap${this.#fileExtension}`);
    this.#hihat = new Audio(`${this.#directory}Hi-Hat${this.#fileExtension}`);
    this.#snare = new Audio(`${this.#directory}Snare${this.#fileExtension}`);
    this.#bass = new Audio(`${this.#directory}808${this.#fileExtension}`);
    this.#crash = new Audio(`${this.#directory}Crash${this.#fileExtension}`);
    this.#perc = new Audio(`${this.#directory}Perc${this.#fileExtension}`);
    this.#hihatRoll = new Audio(
      `${this.#directory}Hi-Hat-Roll${this.#fileExtension}`
    );
  }

  // Start drum pad event listeners
  initializeEventListeners() {
    // Listen for click inside main container
    // This section works
    this.#drumMachine.addEventListener("click", (event) => {
      // Proceed if click was directed to a button
      if (event.target.matches("button")) {
        this.handleDrumPadPress(event.target.dataset.action); // Process the button press further
      }
    });
    // Also listen for keyboard press
    document.addEventListener("keydown", (event) => {
      this.handleDrumPadPress(event.key.toUpperCase()); // Get the key pressed and process it further.
    });
  }

  // Process a drum pad press based on a given dataAction or keypress.
  handleDrumPadPress(dataAction) {
    switch (dataAction) {
      case "D":
      case "perc":
        this.#perc.play();
        break;
      case "E":
      case "kick":
        this.#kick.play();
        break;
      case "F":
      case "roll":
        this.#hihatRoll.play();
        break;
      case "G":
      case "hi-hat":
        this.#hihat.play();
        break;
      case "H":
      case "bass":
        this.#bass.play();
        break;
      case "R":
      case "snare":
        this.#snare.play();
        break;
      case "T":
      case "crash":
        this.#crash.play();
        break;
      case "Y":
      case "clap":
        this.#clap.play();
        break;
    }
  }
}
