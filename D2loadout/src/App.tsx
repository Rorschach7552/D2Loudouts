// import DiscreteSlider from "./Components/DiscreteSlider";
// function App() {
//   return (
//     <div>
//       <DiscreteSlider />
//     </div>
//   );
// }
// export default App;
// import React from "react";
// import StatsTable from "./Components/StatsTable";

// function App() {
//   return (
//     <div>
//       <StatsTable />
//     </div>
//   );
// }

// export default App;
// src/App.tsx
import React from "react";
import DiamondGrid from "./Components/DiamondGrid";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Diamond Grid Buttons</h1>
      <DiamondGrid />
    </div>
  );
};

export default App;
