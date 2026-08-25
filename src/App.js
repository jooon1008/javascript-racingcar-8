import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class App {
  //view

  //차 이름 입력
  async carInput(){
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.( 이름은 쉼표 (,) 기준으로 구분)\n');

    return input;
  }

  //이동 횟수 입력
  async moveInput(){
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return input;
  }

  //각 경기 결과 출력
  printRace(cars){
    for ( const car of cars){
      let bars = '';
      for ( let i = 0; i< car.position; i++){
        bars += '-';
      }
      MissionUtils.Console.print(`${car.name} : ${bars}`);
    }
    MissionUtils.Console.print('\n');
  }

  //최종 우승자 출력
  printFinalWinner(winner){
    MissionUtils.Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }

  //model

  //자동차 객체 배열 생성
  createCars(input){
    const splitted = input.split(',');
    const cars = new Array();

    for (const name of splitted) {
      cars.push({name: name , position: 0});
    }

    return cars;
  }

  //랜덤값으로 포지션 증가
  race(cars){
    for ( const car of cars){
      if ( MissionUtils.Random.pickNumberInRange(0,9) >= 4){
        car.position++;
      }
    }
  }

  //최종 우승자 탐색
  findFinalWinner(cars){
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winner = new Array();

    cars.forEach(car => {
      if ( car.position === maxPosition) winner.push(car.name);
    });
    return winner;
  }

  //controller
  async run() {
    const carInput = await this.carInput();
    Validator.validateCarInput(carInput)//검증
    const cars = this.createCars(carInput);

    const moveInput = await this.moveInput();
    Validator.validateMoveInput(moveInput);//검증
    const moveCount = parseInt(moveInput);
    
    MissionUtils.Console.print('\n실행결과');
    for ( let i = 0; i< moveCount; i++){
      this.race(cars);//경주
      this.printRace(cars);//출력
    }
    
    const finalWinner = this.findFinalWinner(cars);
    this.printFinalWinner(finalWinner);
  }
}

export default App;
