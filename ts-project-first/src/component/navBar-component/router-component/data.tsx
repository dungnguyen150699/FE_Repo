import { page } from "../../../types/page";
import AboutComponent from "../../aboutcomponent/AboutComponent";
import BookComponent from "../../book-component/BookComponent";

export const pages: page[] = [
    {
        name: "Book",
        link: "/",
        element: < BookComponent/>
    },
    { 
        name: "About",
        link: "/about",
        element: <AboutComponent/>
    }
  ];