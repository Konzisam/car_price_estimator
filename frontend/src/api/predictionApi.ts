import axios, { AxiosResponse } from "axios";
import { InputData } from "../types";
import { config } from "../config/env";

const { API_BASE_URL } = config;

export const fetchPrediction = async (
  formData: InputData,
  accessToken: string
): Promise<number | undefined> => {
  try {
    const response: AxiosResponse<number> = await axios.post(
      `${API_BASE_URL}/estimate`,
      formData,
      {
        headers: {
          auth: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error fetching prediction:",
        error.response?.data || error.message
      );
      throw error;
    }
  }
};
