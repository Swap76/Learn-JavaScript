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

3. Write a JavaScript program to list the properties of a JavaScript object. 
	Sample object: 
    ```js
	var student = {	 
        name : "David Rayy", 
        sclass : "VI", 
        rollno : 12 
    };
    ```
	Sample Output: name,sclass,rollno

4. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
	Sample object: 
    ```js
	var student = { 
        name : "David Rayy", 
        sclass : "VI", 
        rollno : 12 
    };
    ```

5. Create a TV class with properties like brand, channel and volume.
    Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.

6. To Above class, Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.

7. To Above class, Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.

8. To Above class, Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).


