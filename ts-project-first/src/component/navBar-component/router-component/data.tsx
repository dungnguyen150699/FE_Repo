import { page } from "../../../types/page";
import AboutComponent from "../../aboutcomponent/AboutComponent";
import AuthorComponent from "../../authorComponent/AuthorComponent";
import BookComponent from "../../book-component/BookComponent";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TemporaryDrawer from "../toggle-navbar-component/TemporaryDrawer";
import Login from "../../../login/Login";
import * as React from 'react';

export const pages: page[] = [
    {
        name: "Book",
        link: "/",
        element: <BookComponent/>,
        icon: <LibraryBooksIcon/>
    },
    { 
        name: "About",
        link: "/about",
        element: <AboutComponent/>,
        icon:<InfoOutlinedIcon/>
    },
    { 
        name: "Author",
        link: "/author",
        element: <AuthorComponent/>,
        icon:<CopyrightIcon/>
    },
    {
        name: "TemporaryDrawer",
        link: "Drawer",
        element: <TemporaryDrawer/>,
        icon: undefined
    }
  ];