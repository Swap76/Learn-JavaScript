# Challenges

I would recommend to create new file for each challenges. Copy the provided code and write your own code in the `// ... your function here` part.

## Classes

**Have a look how the class is being used to work out what it needs to do.**

1. Create a class that represents a light switch
   
   ```javascript
    // ... your code to create a lightswitch

    let lightswitch = new Lightswitch();

    // you can turn it on
    lightswitch.turnOn();

    // you can check whether it is on or not
    console.log(lightswitch.isOn()); // true

    // you can turn it off
    lightswitch.turnOff();

    console.log(lightswitch.isOn()); // false
    ```
2. Create a class that represents a car
   
    ```javascript
    // ... your code to create a car

    // you pass in a make and number plate
    let car = new Car("Honda", "BD51 SMR");

    // you can get various information about it
    console.log(car.getNumberplate()); // "BD51 SMR"
    console.log(car.getMake()); // "Honda"
    console.log(car.getMileage()); // 0

    // you can add journey
    car.addJourney(100);
    console.log(car.getMileage()); // 100

    car.addJourney(200);
    console.log(car.getMileage()); // 300
    ```