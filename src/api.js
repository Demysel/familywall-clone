// src/api.js
const BASE_URL = "https://api.jsonbin.io/v3/b/";  // Change si nécessaire

const headers = {
  "Content-Type": "application/json",
  "X-Master-Key": "$2a$10$j99ZptquF7iTqI/UP0xQMucBLqWZW/8bTlz859GxEqzmmfq0DpR4.",  // Remplace par ta clé d'API
};

export async function fetchData(binId) {
  const response = await fetch(`${BASE_URL}${binId}`, { headers });
  const data = await response.json();
  return data;
}

export async function saveData(binId, data) {
  const response = await fetch(`${BASE_URL}${binId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({ record: data }),
  });
  const result = await response.json();
  return result;
}
