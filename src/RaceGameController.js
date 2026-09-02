import Validator from './Validator.js';
import Race from './model/Race.js';
import Input from './view/InputView.js';
import Output from './view/OutputView.js';
import CarFactory from './model/CarFactory.js';

class RaceGameController{
  async start(){
    const carInput = await Input.carInput();
    const cars = CarFactory.createCars(carInput);//객체배열 생성

    const moveInput = await Input.moveInput();
    Validator.validateMoveInput(moveInput);//검증
    const moveCount = parseInt(moveInput);
    
    const race = new Race(cars,moveCount);
    //경주 시작
    Output.printRaceStart();
    for ( let i = 0; i< moveCount; i++){
      race.runRound();
      Output.printRound(cars);
    }
    const winner = race.findFinalWinner();
    Output.printFinalWinner(winner);
  }
}

export default RaceGameController;
