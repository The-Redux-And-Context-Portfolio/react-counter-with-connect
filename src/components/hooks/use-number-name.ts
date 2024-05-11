/* node modules */
import { useState, useEffect } from "react";
import numberToWords from "number-to-words";

/**
 * gets a number param and then returns the name of the number in words through the number-to-words
 * package
 */
function useNumberName(props: number) {
  const [numberName, setNumberName] = useState<string>("");

  useEffect(() => {
    const name = numberToWords.toWords(props);
    setNumberName(() => name);
  }, [props]);

  return { numberName };
}

/* exports */
export default useNumberName;
