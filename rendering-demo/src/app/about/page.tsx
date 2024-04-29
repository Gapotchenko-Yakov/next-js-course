import { cookies } from "next/headers";

const AboutPage = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log("🚀 ~ AboutPage ~ theme:", theme);
  console.log("About server component");
  return <div>About Page {new Date().toLocaleTimeString()}</div>;
};

export default AboutPage;
