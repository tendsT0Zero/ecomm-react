import { use, useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      //first check if the value is already present in local storage
      const item = window.localStorage.getItem(key);
      //make decision based on the presence of the value in local storage
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  //storage will be updated when the value is changed
  useEffect(()=>{
    try{
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }
    catch(error){
        console.log(error);
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue];
}
