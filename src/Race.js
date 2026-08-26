import { Console , Random } from '@woowacourse/mission-utils';
import Output from './OutputView.js';

class Race{
  constructor(cars,moveCount){
    this.cars = cars;
    this.moveCount = moveCount;
  }

  //갈지 말지 결정
  goOrNot(){
    if ( Random.pickNumberInRange(0,9) >= 4){
      return true;
    }
    return false;
  }

  //한 라운드 시작
  runRound(){
    for ( const car of this.cars){
      if (this.goOrNot()){
        car.position++;
      }
    }
  }

  //경기시작
  runRace(){
    Output.printRaceStart();

    for(let i = 0; i < this.moveCount; i++){
      this.runRound();
      Output.printRound(this.cars);
    }
    
    const winner = this.findFinalWinner();
    Output.printFinalWinner(winner);
  }

  //최종 우승자 탐색
  findFinalWinner(){
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winner = new Array();

    this.cars.forEach(car => {
      if ( car.position === maxPosition) winner.push(car.name);
    });
    return winner;
  }

}

export default Race;