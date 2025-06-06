import axios from "axios";

async function fetchData<T extends string>(url: T): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData("https://example.com");
