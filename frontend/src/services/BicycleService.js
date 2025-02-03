const protocol = import.meta.env.VITE_HTTPS == "true" ? "https" : "http";
const API_URL = `${protocol}://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/bicycles`;

console.log(API_URL);

const getAll = () => {
  const myHeaders = new Headers();
  myHeaders.append('pragma', 'no-cache');
  myHeaders.append('cache-control', 'no-cache');

  const myInit = {
    method: 'GET',
    headers: myHeaders,
  };
  
  return fetch(API_URL, myInit);
}

const BicycleService = {
  getAll
}

export default BicycleService;
