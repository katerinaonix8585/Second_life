import { BrowserRouter, Route, Routes } from "react-router-dom";

import CategoryPage from "pages/CategoryPages/CategoryPages";
import Category from "pages/Category/Category";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
import Offer from "pages/Offer/Offer.tsx";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers.tsx";
import AboutUs from "./pages/About/AboutUs.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="*" element="Page Not Found" />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
