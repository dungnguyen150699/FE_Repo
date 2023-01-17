import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BoxComponent from "./BoxComponent";
import { page } from "../../../types/page";
import { pages } from "./data";
import "./../NavBar.css";
import * as React from 'react';

export default function LinksComponent() {
  return (
    <div className="flex-container">
      {pages.map((page: page, index: number) => (
        <BoxComponent
          key={index}
          sx={
            { 
              p: 2
            }
          }
          page={page}
        ></BoxComponent>
      ))}
    </div>
  );
}
