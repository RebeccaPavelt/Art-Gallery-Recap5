import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/components/Navbar/Navbar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>Sorry, something went wrong :/</div>;
  if (isLoading) return <div>loading...</div>;

  if (!data) {
    return null;
  }

  return (
    <>
      <GlobalStyle />
      <h1>ArtGallery</h1>
      <Component {...pageProps} pieces={data} />
      <Navigation />
    </>
  );
}
