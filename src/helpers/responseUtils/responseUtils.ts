export const getResponse = async (res: Response) => {
  const data = await res.json();

  const responseToBeReturned = Response.json(data, { status: res.status });

  return responseToBeReturned;
};
