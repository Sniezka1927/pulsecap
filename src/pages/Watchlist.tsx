import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Watchlist from "../components/User/Watchlist/Watchlist";
type Props = {};

const WatchlistPage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Watchlist />
      <Footer />
    </React.Fragment>
  );
};

export default WatchlistPage;
