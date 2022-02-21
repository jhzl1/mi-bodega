import { UiActions } from "../reducers/uiReducer";

export const addError = (error: string): UiActions => ({
  type: "[UI] addError",
  payload: error,
});

export const removeError = (): UiActions => ({
  type: "[UI] removeError",
});
