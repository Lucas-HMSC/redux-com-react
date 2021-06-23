function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch {
    return initial;
  }
}

export default getLocalStorage;