import { Random } from '@woowacourse/mission-utils';

class Race{
  constructor(cars,moveCount){
    this.cars = cars;
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
        car.go();
      }
    }
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