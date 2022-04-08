export const initialState = {
  userData: {},
};

export interface TStore {
  userData: {
    [userID: string]: {
      userId?: number;
      id?: number;
      title?: string;
      completed?: boolean;
    };
  };
}

export const rootReducer = (store = initialState, action: any): TStore => {
  switch (action.type) {
    case "INSERT_USER":
      return {
        ...store,
        userData: {
          ...store.userData,
          [action.payload.id]: action.payload,
        },
      };

    case "TOTAL_RESET_DATA":
      return { ...store, userData: {} };

    case "DELETE_USER":
      const newStore = { ...store };
      newStore.userData = { ...store.userData };

      // @ts-ignore
      delete newStore.userData[action.payload];

      return newStore;
  }

  return store;
};
