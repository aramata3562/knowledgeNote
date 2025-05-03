export const submitToGAS = async (
  data: Record<string, string>,
  type: string
): Promise<void> => {
  const formData = new URLSearchParams();
  formData.append("type", type);
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await fetch(import.meta.env.VITE_GAS_API_URL, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (result.result !== "success") {
    throw new Error(result.message || "送信失敗");
  }
};
