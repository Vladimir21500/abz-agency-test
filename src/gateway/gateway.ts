export const getUsers = async (page: number) => {
  try {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  } catch (error) {
    alert(`get users, ${error}`);
  }
};

export const createUser = async (formData: any, token: string) => {
  try {
    const response = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
      method: "POST",
      body: formData,
      headers: {
        Token: token,
      },
    });

    if (response.status === 409) {
      console.log("409", response);
      throw new Error("User with this phone or email already exist");
    }

    if (response.status === 422) {
      console.log("422", response);
      throw new Error("Validation failed");
    }

    return response.json();
  } catch (error) {
    alert(`post user ${error}`);
  }
};

export const getToken = async () => {
  try {
    const response = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token");

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  } catch (error) {
    alert(`get token ${error}`);
  }
};

export const getUserPositions = async () => {
  try {
    const response = await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions");

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const data = await response.json();

    return data.positions;
  } catch (error) {
    alert(`get user positions ${error}`);
  }
};
