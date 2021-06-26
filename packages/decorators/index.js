var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const decoratorFunc = (decoratedArg) => {
    console.log("I am a decorator function");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (target, propertyKey, descriptor) => {
        console.log(`This is the Decorated Argument: ${decoratedArg}`);
    };
};
class Decorated {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`This is a decorated class function, my name is ${this.name}`);
    }
}
__decorate([
    decoratorFunc("I am a decoredted argument!"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Decorated.prototype, "logName", null);
const decorated = new Decorated("John Snow");
decorated.logName();
// function first() {
//   console.log("first(): factory evaluated");
//   return function a(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log("first(): called");
//   };
// }
// function second() {
//   console.log("second(): factory evaluated");
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log("second(): called");
//   };
// }
// class ExampleClass {
//   @first()
//   @second()
//   method() {
//     this.method();
//   }
// }
