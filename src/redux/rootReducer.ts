export const initialState = {
  city: "world",
};

interface TStore {
  city: string;
}

export const rootReducer = (store = initialState, action: any): TStore => {
  switch (action.type) {
    case "CHANGE_CITY":
      return { ...store, city: action.payload };
  }

  return store;
};
