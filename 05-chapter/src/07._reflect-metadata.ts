import 'reflect-metadata'

const user = {
  name: 'Small-inn'
}

// define metadata on an object or property
/**  
 * Reflect.defineMetadata(metadataKey, metadataValue, target);
 * Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);  
 * */
Reflect.defineMetadata('data', 'test', user)
 
// get metadata value of a metadata key on the prototype chain of an object or property
/***
 * let result = Reflect.getMetadata(metadataKey, target);
 * let result = Reflect.getMetadata(metadataKey, target, propertyKey);
 * **/
console.log(Reflect.getMetadata('data', user))

// 作用于类上面
/** 
@Reflect.metadata('data', 'Small-inn')
class UserClass {
  name = 'lx'
}
console.log(Reflect.getMetadata('data', UserClass))
*/

// 作用于属性或者方法上
/** 
class UserClass {
  @Reflect.metadata('data', 'Small-inn')
  name = 'lx'
}
console.log(Reflect.getMetadata('data', UserClass.prototype, 'name'))
*/
class UserClass {
  @Reflect.metadata('data', 'Small-inn')
  @Reflect.metadata('data1', 'Small-inn1')
  getName = function() {}
}

class Teacher extends UserClass {}

console.log(Reflect.hasOwnMetadata('data', UserClass.prototype, 'getName'))
console.log(Reflect.hasOwnMetadata('data', Teacher.prototype, 'getName'))


console.log(Reflect.getMetadataKeys(Teacher.prototype, 'getName'))
