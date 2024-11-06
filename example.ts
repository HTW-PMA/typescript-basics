// Definieren eines Interfaces für die Props
interface GreetingProps {
    name: string;
    age?: number; // optionales Feld
  }
  
  // Funktion, die einen Begrüßungstext zurückgibt
  function greet(props: GreetingProps): string {
    const { name, age } = props;
    if (age) {
      return `Hello, ${name}! You are ${age} years old.`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  
  // Aufruf der Funktion
  const message = greet({ name: "Robin", age: 30 });
  console.log(message);
  
