import React, { useState } from "react";

function MyObjects() {
  const [car, setCar] = useState({ year: 2022, make: "Kia", model: "Optima" });

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favorite car is : {car.year} {car.make} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearChange} />
      <br></br>
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default MyObjects;
