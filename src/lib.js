const makeConstant = function(argument){
  return function(){
    return argument;
  }
};
const makeCounterFromN = function(start){
  let count = start;
  return function(){
    return count++;
  }
};
const makeCounterFromZero = function(){
  return makeCounterFromN(0);
};
const makeDeltaTracker = function(start){
  let oldNum = start;
  return function(delta = 0){ 
    let old = oldNum;
    let newNum = old + delta;
    oldNum = newNum;
    return {old,delta,new:newNum};
  }
};

const makeFiboGenerator = function(number1 = 1,number2 = 0){
  let fiboSeries = {currentNum : null, nextNum : Math.min(number1,number2) , secondNextNum : Math.max(number2,number1) }
  return function(){
    fiboSeries.currentNum = fiboSeries.nextNum;
    fiboSeries.nextNum = fiboSeries.secondNextNum;
    fiboSeries.secondNextNum = fiboSeries.currentNum + fiboSeries.nextNum;
    return fiboSeries.currentNum;
  }
};

const makeCycler = function(givenList){
  let isFirstTime = true;
  let list = givenList.slice(0);
  let index = 0;
  return function(){
    index = (index + list.length)%list.length;
    return list[index++];
  }
};
const curry = function(func,commonArg){
  return function(secondArg,thirdArg){
    return func(commonArg,secondArg,thirdArg); 
  }
};
const compose = function(func1,func2){
  return function(firstArg,secondArg){
    let returnValueOfFunc2;
    returnValueOfFunc2 = func2(firstArg,secondArg);
    return func1(returnValueOfFunc2);
  }
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
