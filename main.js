//1. Programming Basics
for(let num = 10; num <= 40; num++) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log(num + " " + "Jackpot!");
    } else if (num % 5 === 0) {
        console.log(num + " " + "This is divisible by 5");
    } else if (num % 3 === 0) {
        console.log(num +  " " + "This is divisible by 3");
    }
}

//2. DOM manipulation
const button = document.createElement('button');
button.innerHTML = `h1 Tag`
document.body.appendChild(button);

button.addEventListener('click', () => {
    const h1Tag = document.createElement('h1');
    h1Tag.innerHTML = `This is an h1 tag`;
    document.body.appendChild(h1Tag);
});

//3. Async API calls
fetch(`https://reqres.in/api/users`)
    .then(response => response.json())
    .then(usersData => {
        const h2 = document.createElement('h2');
        h2.innerHTML = `Email id's of first 3 users`
        document.body.appendChild(h2);
        for (let i = 0; i <= 2; i++) {
            const emailh3 = document.createElement('h3');
            emailh3.innerHTML = `User${i+1}: ${usersData.data[i].email}`
            document.body.appendChild(emailh3);
        }
    })

//4. Class (optional)
class Product {
    constructor(price, name) {
        this.price = price;
        this.name = name;
    }

    logProduct() {
        console.log(`${this.name} is ${this.price} kr`);
    }
}

const sofa = new Product(3000, 'Sofa');
sofa.logProduct();