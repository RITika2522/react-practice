import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  const colors = [
    "red", "blue", "green", "pink", "yellow", "maroon", "black", 
    "purple", "cyan", "teal", "orange", "gray","brown" 
  ];

  return (
    <div
      className={`w-full h-screen duration-500 ease-in-out flex items-center justify-center`}
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-4">
        <div className="flex space-x-3 bg-white shadow-lg px-6 py-4 rounded-full">
          {colors.map((col) => (
            <button
              key={col}
              onClick={() => setColor(col)}
              className={`w-10 h-10 rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95`}
              style={{ backgroundColor: col }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
