import React, { useEffect, useState } from "react";
import { useUser } from "host/UserAuth";
import { useKeycloak } from "@react-keycloak/web";

const HomeView = () => {
  const { isAuthenticated } = useUser();
  const { keycloak } = useKeycloak();

  useEffect(() => {
    const isLoggedIn = keycloak.authenticated;
    console.log({ keycloak });
    console.log({ isLoggedIn });
  }, []);

  useState(() => {
    console.log("isAuthenticated:", isAuthenticated());
  }, []);

  return (
    <h1 className="tex-center text-xl mt-8 font-bold leading-tight tracking-tight md:text-2xl ">
      Platform - Home page
    </h1>
  );
};

export { HomeView };
