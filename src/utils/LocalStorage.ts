// bacanya iala begini cek dulu typenya dan window belum ke load artinya undefined
// maka storage-nya : null jika tidak maka ambil di localStorage
const storage = typeof window === "undefined" ? null : localStorage;

const getLocalStorage = (key:string) => JSON.parse(storage?.getItem(key) || '{}');

const setLocalStorage = (key:string, value:string) => 
    storage?.setItem(key, JSON.stringify(value));

const removeLocalStorage = (key:string) => storage?.removeItem(key);

export {getLocalStorage, setLocalStorage, removeLocalStorage};