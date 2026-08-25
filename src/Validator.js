class Validator{
  static validateCarInput(input){
    const splitted = input.split(',');
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

  static validateMoveInput(input){
    if (!/^[1-9]\d*$/.test(input)){
      throw new Error('[ERROR] 시도할 횟수는 양수로만 구성되어야 합니다.');
    }
  }
}

export default Validator;