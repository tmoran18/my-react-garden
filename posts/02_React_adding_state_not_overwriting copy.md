---
title: "Adding to State: not overwriting it - useState Hook"
author: "Tim"
tag: "React"
datePub: "25/10/2020"
blurb: "Using the spread operator to add to state instead of overwriting it."
color: "blue"
---

[Working example on CodeSandbox](https://codesandbox.io/s/react-responsive-navbar-ett4z)

### Basic State - Overwriting itself each time

The useState hook returns a pair of values: the current state and a function that updates it.

```javascript
const [count, setCount] = useState(0);
```

When the component renders the count variable will be set to 0. Each time the Click Me button is clicked the setCount function updates count.

```javascript
<button onClick={() => setCount(count + 1)}>Click me</button>
```

### An Array of State and adding to the current Array

If you have an Array of state and want to **add to the array and not overwrite the array**. You get the current array values by **...spreading** the current array state, then add the second parameter (the new element for the array) into your setState function.

```javascript
export default function App() {
  const [arrCount, setArrCount] = useState([]);
  // This is for the input control we use to add the state
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    // This spreads the current state and then adds the new element into the array state.
    setArrCount([...arrCount, input]);
    // Set the input to blank
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add State</button>
      <div>
        {arrCount.map((item, index) => {
          return <li>{item}</li>;
        })}
      </div>
    </div>
  );
}
```

You can find me on [twitter here](https://twitter.com/Tim__Moran).
