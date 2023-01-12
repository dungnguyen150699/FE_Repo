import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BoxComponent from "./BoxComponent";
import { page } from "../../../types/page";
import { pages } from "./data";
import "./../NavBar.css";
export default function LinksComponent() {
  return (
    <div className="flex-container">
      {pages.map((page: page, index: number) => (
        <BoxComponent
          key={index}
          sx={
            { 
              p: 2,
              // border: "1px dashed grey"  
            }
          }
          page={page}
        ></BoxComponent>
      ))}
    </div>
  );
}
