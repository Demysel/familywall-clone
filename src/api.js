const API_KEY = "$2a$10$j99ZptquF7iTqI/UP0xQMucBLqWZW/8bTlz859GxEqzmmfq0DpR4."; // Remplace par ta clé API
const BASE_URL = "https://api.jsonbin.io/v3/b/";

export const fetchData = async (binId) => {
  try {
    const response = await fetch(`${BASE_URL}${binId}/latest`, {
      headers: {
        "X-Master-Key": API_KEY
      }
    });
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const saveData = async (binId, data) => {
  try {
    const response = await fetch(`${BASE_URL}${binId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify(data)
    });
    r
