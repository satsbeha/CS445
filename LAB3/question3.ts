class Car {
       name;
       acceleration;
         constructor(name: string) {
            this.name = name;
             this.acceleration = 0;
        }
        honk(): void {
            console.log(` ${this.name} is saying: Toooooooooot!`);
     }
     	accelerate(speed:number) {
         this.acceleration = this.acceleration + speed;
     } 
     }
     var car = new Car("BMW");
     console.log("Homework 3 question number 3")
     car.honk(); // BMW is saying: Toooooooooot!
     console.log(car.acceleration); // 0
     car.accelerate(60);
     console.log(car.acceleration); // 60