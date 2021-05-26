export type ErrorActionType = (
  payload: string,
) => {
  type: string;
  error: true;
  payload: string;
};
