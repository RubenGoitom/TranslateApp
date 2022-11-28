import { createHeaders } from './index';
const apiURL = process.env.REACT_APP_API_URL;

export const addTranslation = async (user, translation) => {
  try {
    const resp = await fetch(`${apiURL}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation]
      })
    })
     
    if (!resp.ok) {
      throw new Error(`Could not create translation`);
    }

    const newTranslation = await resp.json();
    return [null, newTranslation];

  }
  catch (error) {
    return [error.message, null];
  }
  
}


export const translationClearHistory = async (userId) => {
  try {
    const resp = await fetch(`${apiURL}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: []
      })
    })
     
    if (!resp.ok) {
      throw new Error(`Could not delete translations`);
    }

    const result = await resp.json();
    return [null, result];

  }
  catch (error) {
    return [error.message, null];
  }
}