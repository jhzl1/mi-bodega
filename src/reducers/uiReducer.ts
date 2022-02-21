export type UiActions =
  | { type: "[UI] addError"; payload: string }
  | { type: "[UI] removeError" }
  | { type: "[UI] startLoading" }
  | { type: "[UI] stopLoading" };

export interface UiState {
  isLoading: boolean;
  errorMsg: string;
}

export const initialState: UiState = {
  errorMsg: "",
  isLoading: false,
};

export const uiReducer = (
  state: UiState = initialState,
  action: UiActions
): UiState => {
  switch (action.type) {
    case "[UI] addError":
      return {
        ...state,
        errorMsg: action.payload,
      };

    case "[UI] removeError":
      return {
        ...state,
        errorMsg: "",
      };

    case "[UI] startLoading":
      return {
        ...state,
        isLoading: true,
      };

    case "[UI] stopLoading":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
