import { UiActions } from "../reducers/uiReducer";

export const addError = (error: string): UiActions => ({
  type: "[UI] addError",
  payload: error,
});

export const removeError = (): UiActions => ({
  type: "[UI] removeError",
});

export const startLoading = (): UiActions => ({
  type: "[UI] startLoading",
});

export const stopLoading = (): UiActions => ({
  type: "[UI] stopLoading",
});
