import Car from "./Car.js";

class CarFactory{
    static createCars(input){
        return input.split(',').map((name)=> new Car(name));
  }
}
export default CarFactory;
