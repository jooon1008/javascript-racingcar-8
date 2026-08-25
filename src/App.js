import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async carInput(){
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.( 이름은 쉼표 (,) 기준으로 구분)\n');
    const splitted = input.split(',');
    const cars = new Array();

    for (const name of splitted){
      cars.push({name: name , position: 0});
    }

    return cars;
  }
  async moveInput(){
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const moveCount = parseInt(input);

    return moveCount;
  }

  async run() {
    const cars = await this.carInput();
    const moveCount = await this.moveInput();

  }
}

export default App;
