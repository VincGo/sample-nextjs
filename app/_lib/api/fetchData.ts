export async function get(
  slug: string,
  url: string | undefined = process.env.NEXT_PUBLIC_API_JSONPLACEHOLDER)
: Promise<any> {
  let response = null;

  try {
    response = await fetch(url + slug)
  } catch (err) {
    console.error(err)
  }
  return response ? response?.json() : response
}
