export const getInfluencerProfile = async (slug: string) => {
  try {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/influencer/${slug}`
    );

    const response = await fetch(url);

    return response.json();
  } catch (err) {
    throw err;
  }
};
