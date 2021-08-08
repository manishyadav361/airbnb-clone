import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
// progress bar

const progress = new ProgressBar({
  size: 3,
  color: "#fe595e",
  className: "z-50",
  delay: 100,
});

// routers for progressbar

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
