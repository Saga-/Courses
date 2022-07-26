import { useState, useEffect } from "react";
import { Animal, BreedListAPIResponse } from "./APIResponsesTypes";

const localCache: {
  [index: string]: string[];
} = {};

const enum Status {
  unloaded = "unloaded",
  loading = "loading",
  loaded = "loaded",
}

export default function useBreedList(animal: Animal) {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState(Status.unloaded);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      void requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus(Status.loading);
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = (await res.json()) as BreedListAPIResponse;
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus(Status.loaded);
    }
  }, [animal]);

  return [breedList, status] as [string[], Status];
}
