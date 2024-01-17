import React, { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

const HomeView = () => {
  return (
    <>
      <h1 className="tex-center text-xl mt-8 font-bold leading-tight tracking-tight md:text-2xl ">
        Platform - Home page
      </h1>
      <p>Content...</p>
    </>
  );
};

export { HomeView };
