export const getResponse = async (response: Response) => {
  // Get cookies from the response headers
  const cookies = response.headers.get("set-cookie");
  // Create the final response with the data
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  if (cookies) {
    headers.set("Set-Cookie", cookies);
  }
  const data = await response.json();

  return Response.json(data, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};
