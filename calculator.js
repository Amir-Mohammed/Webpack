import { getNumbers } from "./getNumbers";
export default class Calculator {
  onSum(){
    return getNumbers().reduce((acc, curr)=> acc + curr);
  }
  onMul(){
    return getNumbers().reduce((acc, curr)=> acc * curr)
  }
}