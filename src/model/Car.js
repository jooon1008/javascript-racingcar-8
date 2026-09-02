export default class Car {
  constructor(name){
    this.validateCarName(name);
    this.name = name;
    this.position = 0;
  }
  go(){
    this.position++;
  }
  validateCarName(name){
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
