# Regex



# Exercises

1. Create a function that extracts a US phone number from a string
    
    **Format description:**
    
    > +1 NXX-NXX-XXXX 
    
    > N=digits 2–9, X=digits 0–9
    
    **Example:**
    ```javascript
    const phone = extractPhone('Hello, my phone is +1 232-454-4536! Nice to meet you')
    console.log(phone)
    /*
        Prints out: +1 232-454-4536
    */
    ```
    **Answer**
    ```javascript
    function extractPhone(string){
        const [match, phone] = string.match(/\+1\s{0,1}[2-9]{1}[0-9]{2}-{0,1}[2-9]{1}[0-9]{2}-{0,1}[0-9]{4}/)
        return phone
    }   
    ```
