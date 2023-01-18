import React from "react";
import { Routes, Route } from "react-router";
import { BoardDetails } from "./cmps/board-details";
import { HomePage } from "./pages/home-page";
import { Workspace } from "./pages/workspace";


export function RootCmp() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="user/:status" element={<LoginSignup />} /> */}
          <Route path="workspace" element={<Workspace />} />
          <Route path="board/:boardId/*" element={<BoardDetails />} />
        </Routes>
      </main>
    </div>
  );
}
