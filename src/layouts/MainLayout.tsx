import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/css/style.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ padding: 0, margin: 0, boxSizing: "border-box" }}
      className="myowen"
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
