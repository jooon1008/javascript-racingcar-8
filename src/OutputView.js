import { Console } from '@woowacourse/mission-utils';

class OutputView{
  static printRound(cars){
    for ( const car of cars){
      let bars = '';
      for ( let i = 0; i< car.position; i++){
        bars += '-';
      }
      Console.print(`${car.name} : ${bars}`);
    }
    Console.print('\n');
  }

  //최종 우승자 출력
  static printFinalWinner(winner){
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
  
  static printRaceStart(){
    Console.print('\n실행결과');
  }
}

export default OutputView;