import React, { useState } from "react";
import { useUser } from "host/UserAuth";

const HomeView = () => {
  const { isAuthenticated } = useUser();

  useState(() => {
    console.log(isAuthenticated());
  }, []);

  return (
    <h1 className="tex-center text-xl mt-8 font-bold leading-tight tracking-tight md:text-2xl ">
      Platform - Home page
    </h1>
  );
};

export { HomeView };
