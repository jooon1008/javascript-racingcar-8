import { MissionUtils } from '@woowacourse/mission-utils';

class App {

  //view
  validateCarInput(splitted){
    for (const name of splitted) {
      if (!name.trim()) {
        throw new Error('[ERROR] 자동차 이름은 비어 있을 수 없습니다.');
      }
      if (/\s/.test(name)){
        throw new Error('[ERROR] 자동차 이름은 공백이 포함될 수 없습니다.');
      }
      if ( name.length > 5){
        throw new Error('[ERROR] 자동차 이름은 5글자 이하여야 합니다.');
      }
    }
  }

  validateMoveInput(input){
    if (!/^[1-9]\d*$/.test(input)){
      throw new Error('[ERROR] 시도할 횟수는 양수로만 구성되어야 합니다.');
    }
  }

  async carInput(){
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.( 이름은 쉼표 (,) 기준으로 구분)\n');
    const splitted = input.split(',');
    const cars = new Array();
    //검증
    this.validateCarInput(splitted);

    for (const name of splitted) {
      cars.push({name: name , position: 0});
    }

    return cars;
  }

  async moveInput(){
    const input = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    //검증
    this.validateMoveInput(input);

    const moveCount = parseInt(input);
    return moveCount;
  }

  //model
  


  //controller
  async run() {
    const cars = await this.carInput();
    const moveCount = await this.moveInput();


  }
}

export default App;
