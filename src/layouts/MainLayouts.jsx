import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Blogs from "../Pages/Blogs";
import Bookmarks from "../Pages/Bookmarks";
import Home from "../Pages/Home";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar />
            </div>
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;