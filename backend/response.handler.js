export function successHandler(
  res,
  data = {},
  status = 200,
  message = "successful"
) {
  return res
    .status(parseInt(status))
    .json({ isSuccessful: true, message, data });
}

export function failureHandler(
  res,
  status = 400,
  message = "failure",
  data = {}
) {
  return res
    .status(parseInt(status))
    .json({ isSuccessful: false, message, data });
}
