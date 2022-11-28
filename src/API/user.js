import { createHeaders } from "./index";

const apiURL = process.env.REACT_APP_API_URL;

const checkForUser = async (username) => {
  try {
    const resp = await fetch(`${apiURL}?username=${username}`);
    console.log(apiURL);

    if (!resp.ok) {
      throw new Error("Something went wrong!.");
    }

    const user = await resp.json();

    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};

const createUser = async (username) => {
  try {
    const resp = await fetch(apiURL, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });

    if (!resp.ok) {
      throw new Error(`Could not create user with username ${username}`);
    }

    const newUser = await resp.json();
    return [null, newUser];
  } catch (error) {
    return [error.message, null];
  }
};

export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);
  if (checkError) return [checkError, user];

  if (checkError !== null) return [checkError, null];

  if (user.length > 0) return [null, user.pop()];

  return await createUser(username);
};

export const findUserById = async (userId) => {
  try {
    const resp = await fetch(`${apiURL}/${userId}`);

    if (!resp.ok) {
      throw new Error(`Could not get user`);
    }

    const user = await resp.json();
    return [null, user];
  } catch (error) {
    return [error.message, null];
  }
};
