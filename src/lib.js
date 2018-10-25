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
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
