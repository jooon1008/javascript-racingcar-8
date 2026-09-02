class Validator{

  static validateMoveInput(input){
    if (!/^[1-9]\d*$/.test(input)){
      throw new Error('[ERROR] 시도할 횟수는 양수로만 구성되어야 합니다.');
    }
  }
}

export default Validator;
