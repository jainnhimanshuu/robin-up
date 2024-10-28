export const getResponse = async (res: Response) => {
  const data = await res.json();

  const token = res.headers.get("set-cookie");

  const responseToBeReturned = Response.json(data, { status: res.status });

  if (token) {
    const cookie = token.split(";")[0];
    responseToBeReturned.headers.set("set-cookie", cookie);
  }

  return responseToBeReturned;
};
