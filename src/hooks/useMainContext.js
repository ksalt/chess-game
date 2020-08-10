import { useContext } from "react";
import { MainContext } from "../contexts";

const useMainContext = () => {
  const store = useContext(MainContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
};

export default useMainContext;
