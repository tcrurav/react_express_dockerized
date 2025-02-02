import { useEffect, useState } from "react";
import BicycleService from "../services/BicycleService";

function BicycleList() {
  const [bicycles, setBicycles] = useState([]);

  useEffect(() => {
    const getAllBicycles = async () => {
      const response = await BicycleService.getAll();
      const data = await response.json();
      setBicycles(data);
    }
    getAllBicycles();
  }, []);

  return (
    <>
      <h1>Bicycle List</h1>
      <ul>
        {bicycles && bicycles.map((b, index) => (
          <li key={b.id}>
            {b.brand} {b.model}
          </li>
        ))}
      </ul>
    </>
  )
}

export default BicycleList;