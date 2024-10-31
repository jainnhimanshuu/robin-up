export const getInfluencerProfile = async (slug: string) => {
  try {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_API_URL}/influencer/${slug}`
    );
    const response = await fetch(url);
    const data = await response.json();

    if (data.errMessage) throw new Error(data.errMessage);
    return data;
  } catch (err) {
    throw err;
  }
};
