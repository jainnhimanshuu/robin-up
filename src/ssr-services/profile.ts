export const getInfluencerProfile = async (slug: string) => {
  try {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/influencer/${slug}`
    );

    const response = await fetch(url, {
      credentials: "include", // This will include cookies in the request
    });

    return response.json();
  } catch (err) {
    throw err;
  }
};
