import RaceGameController from "./RaceGameController.js";

class App {
  run(){
    const controller = new RaceGameController();
    controller.start();
  }

}

export default App;
