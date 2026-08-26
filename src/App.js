import Validator from './Validator.js';
import Race from './Race.js';
import Input from './InputView.js'

class App {

  //자동차 객체 배열 생성
  createCars(input){
    const splitted = input.split(',');
    const cars = new Array();

    for (const name of splitted) {
      cars.push({name: name , position: 0});
    }

    return cars;
  }

  //controller
  async run() {
    const carInput = await Input.carInput();
    Validator.validateCarInput(carInput)//검증
    const cars = this.createCars(carInput);

    const moveInput = await Input.moveInput();
    Validator.validateMoveInput(moveInput);//검증
    const moveCount = parseInt(moveInput);
    
    const race = new Race(cars,moveCount);
    race.runRace();
  }
}

export default App;
