import "./styles.css";
import { useState } from "react";
export default function App() {
  const [data, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
    result.json().then((resp) => {
      setData(resp);
    });
  });
  return (
    <div className="App">
      <h1>Fetching API</h1>
      <table>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Filtering Data</h1>
      <table>
        <tbody>
          {data
            .filter((item) => item.name.startsWith("L"))
            .map((x, i) => (
              <tr>
                <td>{x.name}</td>
                <td>{x.username}</td>
                <td>{x.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
