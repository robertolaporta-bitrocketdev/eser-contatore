export const initialState = {
  city: "world",
  userData: {},
};

interface TStore {
  city: string;
  userData: {
    userId?: number;
    id?: number;
    title?: string;
    completed?: boolean;
  };
}

export const rootReducer = (store = initialState, action: any): TStore => {
  switch (action.type) {
    case "CHANGE_CITY":
      return { ...store, city: action.payload };

    case "INSERT_DATA":
      return { ...store, userData: action.payload };
  }

  return store;
};
