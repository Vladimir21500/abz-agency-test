export const getUsers = async (page: number) => {
  try {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    );

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    alert(error);
  }
};

export const createUser = async (formData, token) => {
  try {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        body: formData,
        headers: {
          Token: token,
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    alert(error);
  }
};

export const getToken = async () => {
  try {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  } catch (error) {
    alert(error);
  }
};

export const getUserPositions = async () => {
  try {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();

    return data.positions;
  } catch (error) {
    alert(error);
  }
};
