class SingleValue {
    constructor(value) {
      this.value = value;
    }
  
    [Symbol.iterator]()
    {
      let returned = false;
      return {
        next: () => ({
          value: this.value,
          done: returned++
        })
      }
    }
  }
  
  class ManyValues extends Array {}
  
  let sum = function(containers)
  {
      let result = 0;
      for (const container of containers) {
          for (const value of container) {
              result += value;
          }
      }
      return result
  };
  
  const singleValue = new SingleValue(11);
  const otherValues = new ManyValues();
  otherValues.push(22)
  otherValues.push(33)
  sum([singleValue, otherValues])