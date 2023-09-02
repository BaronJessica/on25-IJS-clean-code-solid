## 10.0 Atividades
### Atividades também no notion da aula

1. Considere a classe abaixo:
```
class Product {

    constructor(name, price, unit){
        this.name = name;
        this.unit = unit;
    }

    showDetails() {
        console.log("Mostro meus detalhes");
    }

    addToCart(quantity) {
        console.log(`Adiciono ${quantity} ${unit} ao carrinho`);
    }
}
```
Refatore-a de maneira a respeitar o princípio da Responsabilidade Única. Crie outras classes se necessário.

2. Considere o código abaixo:
```
export enum ResourceType {
    TIME_SLOT,
    SPACE_SLOT
}

class Resource {
    id: number;
    type: ResourceType;

    constructor(id, type) {
      this.id = id;
      this.type = type;
    }
}

class ResourceAllocator {    
  
    allocate(resource) {
        switch (resource.type) {
            case ResourceType.TIME_SLOT:
                this.findFreeTimeSlot();
                this.markTimeSlotBusy(resource.id);
                break;
            case ResourceType.SPACE_SLOT:
                this.findFreeSpaceSlot();
                this.markSpaceSlotBusy(resource.id);
                break;
            default:
                throw new Error("ERROR: Attempted to allocate invalid resource");
        }
    }

    free(resource) {
        switch (resource.type) {
            case ResourceType.TIME_SLOT:
                this.markTimeSlotFree(resource.id);
                break;
            case ResourceType.SPACE_SLOT:
                this.markSpaceSlotFree(resource.id);
                break;
            default:
                throw new Error("ERROR: attempted to free invalid resource");
        }
    }

     findFreeSpaceSlot()
    {
        console.log("Encontrei um espaço livre");
    }

     findFreeTimeSlot()
    {
        console.log("Encontrei um tempo livre");
    }

     markSpaceSlotFree(resourceId)
    {
        console.log("Encontrei um espaço ocupado");
    }

    private markTimeSlotFree(resourceId)
    {
        console.log("Liberei um tempo ocupado");
    }

     markSpaceSlotBusy(resourceId)
    {
        console.log("Ocupei um espaço livre");
    }

     markTimeSlotBusy(resourceId)
    {
        console.log("Ocupei um tempo livre");
    }
}
```
Refatore o código de maneira a respeitar o princípio Aberto-Fechado. Crie outras classes se necessário.

3. Considere o código abaixo
```
class Duck {
    quack() {
        console.log("Quack...");
    }

    swim() {
        console.log("Swim...");
    }
}

class ElectronicDuck extends Duck
{
    private _on;

    constructor() {
        super();
        this._on = false;
    }

    quack() {
        if (this._on) {
            console.log("Electronic duck quack...");
        } else {
            throw new Error("Can't quack when off");
        }
    }

    swim() {
        if (this._on) {
            console.log("Electronic duck swim");
        } else {
            throw new Error("Can't swim when off");
        }
    }

    turnOn() {
        this._on = true;
    }

    turnOff() {
        this._on = false;
    }
}

class Pool {

    run() {
        const hughie = new Duck();
        const electricDewie = new ElectronicDuck();
        this.quack(hughie, electricDewie);
        this.swim(hughie, electricDewie);
    }

    quack(...ducks: Duck[])
    {
        for (const duck of ducks) {
            duck.quack();
        }
    }

    swim(...ducks: Duck[])
    {
        for (const duck of ducks) {
            duck.swim();
        }
    }
}

const pool = new Pool();
pool.run();
```
Refatore o código de maneira a respeitar o princípio da Substituição de Liskov. Crie outras classes se  necessário.

4. Considere o código abaixo
```
interface Worker
{
    work();
    eat();
}

class Human extends Worker
{
    work() 
    {
        return "Human works";
    }

    eat() 
    {
        return "Human eats";
    }
}

class Robot extends Worker
{
    work()  
    {
        return "Robot works";
    }

    eat()  
    {
        throw new Error("Robot can't eat");
    }
}

class MessHall
{
    private _workers : Array<Worker>;

    constructor(){
      this._workers = new Array<Worker>();
    }

    manage()
    {
        for (const worker of this._workers) {
            worker.eat();
        }
    }
}

class Factory
{
    private _workers : Array<Worker>;

    constructor(){
      this._workers = new Array<Worker>();
    }

    manage()
    {
        for (const worker of this._workers) {
            worker.work();
        }
    }
}
```
Refatore o código de maneira a respeitar o princípio da Segregação de Interface. Crie outras classes se  necessário.

5. Considere o código abaixo
```
class Lamp
{
    private _color : number;

    constructor() {
      this._color = 0;
    }

    turnOn()
    {
        console.log("Lamp turned on");
    }

    turnOff()
    {
        console.log("Lamp turned off");
    }

    getColor()
    {
        return this._color;
    }

    setColor(color : number)
    {
        this._color = color;
    }
}

class Button
{
    private _lamp : Lamp;
    private _state : boolean;

    constructor(lamp: Lamp)
    {
        this._lamp = lamp;
        this._state = false;
    }

    toggle()
    {
        this._state = !this._state;
        const buttonOn = this._state;
        if (buttonOn) {
            this._lamp.turnOn();
        } else {
            this._lamp.turnOff();
        }
    }
}
```
Refatore o código de maneira a respeitar o princípio da Inversão de Dependência. Crie outras classes se  necessário.
