const API_URL = `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/bicycles`;

const getAll = () => {
  console.log(API_URL)
  return fetch(API_URL);
}

const BicycleService = {
  getAll
}

export default BicycleService;
