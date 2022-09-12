import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Stores data in persistent local storage, under the specified key.
 * @param storageKey The identifier of the data store. Should be prefixed with `@sandtracker`. For example, `@sandtracker_userCredentials`.
 * @param value The data to store in the local storage.
 */
export async function storeData(
  storageKey: string,
  value: Object,
): Promise<void> {
  try {
    const jsonValue = JSON.stringify(value);
    console.info(`Using key [${storageKey}] to store value: ${jsonValue}`);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.error('Failed to store data!');
  }
}

/**
 * Retrieves data from persistent local storage, using the specified storage key.
 * @param storageKey The identifier of the data store.
 */
export async function getData(storageKey: string): Promise<any | void> {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    jsonValue != null ? JSON.parse(jsonValue) : null;
    console.info(`Used key [${storageKey}] to store value: ${jsonValue}`);
  } catch (e) {
    console.error('Failed to retrieve data!');
  }
}
