/* eslint-disable  */
const decoratorFunc = (decoratedArg) => {
  console.log("I am a decorator function");
  return (
    target: Decorated,
    propertyKey: string
    // descriptor: PropertyDescriptor
  ) => {
    console.log("target", target);
    console.log("propertyKey", propertyKey);
    console.log(`This is the Decorated Argument: ${decoratedArg}`);
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logMessage = (message) => (target: Decorated, propertyKey: string) => {
  console.log("target", target);
  console.log(message);
};

const enhanceClass = (target: any) => {
  target.enchantment = "Heelo";
};

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    enchantment = "This is my enchantemnt";
  };
}

@reportableClassDecorator
@enhanceClass
class Decorated {
  name: string;
  specialNum: number;
  enchantment: string;

  constructor(name: string, specialNum: number) {
    this.name = name;
    this.specialNum = specialNum;
  }

  @logMessage("Summing of stuff!")
  sum(...nums: number[]) {
    let res = this.specialNum;
    nums.forEach((num) => {
      res += num;
    });
    console.log(`The result is ${res}`);
  }

  enchant() {
    console.log(`This is my enchantment: ${this.enchantment}`);
  }

  logName() {
    console.log(`This is a decorated class function, my name is ${this.name}`);
  }

  @decoratorFunc("I am a decorated argument!")
  decoratedLogName() {
    console.log(`This is a decorated class function, my name is ${this.name}`);
  }
}

const decorated = new Decorated("John Snow", 7);

decorated.logName();

decorated.decoratedLogName();

decorated.sum(1, 2, 3);
decorated.sum(1, 10);

decorated.enchant();
