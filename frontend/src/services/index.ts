export const saveOrderingInformationInLocalStorage = async (
  payload: string[]
) => {
  try {
    const resp = await fetch(`http://localhost:3000/data/save`, {
      body: JSON.stringify({ payload }),
      method: "POST",
    });
    const body = await resp.json();
    return body;
  } catch (e) {
    throw e;
  }
};
