//@ts-ignore
const { VITE_BASE_URL } = import.meta.env;

const endpoints = {
  companies: `${VITE_BASE_URL}/companies`,
};

export { endpoints };
