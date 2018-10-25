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
  let deltaValues ={old:start,delta:0,new:start};
  return function(delta){ 
    if(delta){
    deltaValues.old = deltaValues.new;
    deltaValues.delta = delta; 
    deltaValues.new = deltaValues.old + delta;
    return deltaValues;
    }
    deltaValues.new = deltaValues.old;
    deltaValues.delta = 0;
    return deltaValues;
  }
};
const makeFiboGenerator = function(lastNum,NumBeforeLast){
  let currentNumber;
  let sNo = 1;
  if(!lastNum){
     lastNum = 1;
  }
 if(NumBeforeLast || NumBeforeLast == 0)
  {
    let lastNumber = lastNum;
    lastNum = NumBeforeLast;
    NumBeforeLast = lastNumber;
  }
  if(!NumBeforeLast){
    NumBeforeLast = 0;
  }
  return function(){
    if(sNo == 2){
      currentNumber = lastNum;
      sNo++;
      return currentNumber;
    }
    if(sNo == 1){
      currentNumber = NumBeforeLast;
      sNo++;
      return currentNumber;
    }
    currentNumber = lastNum + NumBeforeLast;
    NumBeforeLast = lastNum;
    lastNum = currentNumber;
    sNo++;
    return currentNumber;
  }
};

const makeCycler = function(givenList){
  let index = -1;
  let isFirstTime = true;
  let list = givenList.slice(0);
  return function(){
    if(index != list.length-1){
      index++;
      return list[index];
    }
    index = 0;
    return list[index];
  }
};
const curry = function(func,commonArg){
  return function(secondArg,thirdArg){
    if(!thirdArg){
      return func(commonArg,secondArg);
    }
    return func(commonArg,secondArg,thirdArg); 
  }
};
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
  exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
