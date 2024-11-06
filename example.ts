// Definieren eines Interfaces für die Props
interface GreetingProps {
    name: string;
    age?: number; // optionales Feld
}

// Funktion, die einen Begrüßungstext zurückgibt
function greet(props: GreetingProps): string {
    // Destruktierung von Objekten
    const { name, age } = props;

    // Destrukturierung von Arrays
    const cities = ["Berlin", "Hamburg", "München", "Köln", "Frankfurt"]
    const [first, second] = cities
    // const first = list[0]
    // const second = list[1]

    if (age) {
        return `Hello, ${name}! You are ${age} years old and live in ${first}.`;
    } else {
        return `Hello, ${name}! You live in ${second}.`;
    }
}

// Aufruf der Funktion
const message = greet({ name: "Robin", age: 30 });
console.log(message);

