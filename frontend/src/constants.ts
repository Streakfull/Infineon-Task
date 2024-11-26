//@ts-ignore
const { VITE_BASE_URL } = import.meta.env;

console.log("VITE_BASE_URL:", VITE_BASE_URL);

const endpoints = {
  companies: `${VITE_BASE_URL}/companies`,
};

export { endpoints };
