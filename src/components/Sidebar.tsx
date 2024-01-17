import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// contexts
// import useAuth from "host/useAuth";
import { useUser } from "host/UserAuth";

// mocks
import { sidebarLinks } from "../mocks";
import { useKeycloak } from "@react-keycloak/web";


const Sidebar = () => {
  const location = useLocation();
  const { keycloak } = useKeycloak();
  const [allowedApps, setAllowedApps] = useState<any>();


  const params = new URLSearchParams({
    client_id: 'front',
    redirect_uri: 'http://localhost:3000/',
    response_type: 'code',
    scope: 'openid'
  })

  const url = `http://localhost:8080/realms/myrealm/protocol/openid-connect/auth?${params.toString()}`
  const { user, logout } = useUser();
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    if (keycloak?.authenticated === true) {
      setItems([
        ...sidebarLinks, ...allowedApps
      ]);
    } else {
      setItems(sidebarLinks);
    }
  }, [allowedApps]);

  useEffect(() => {
    setAllowedApps(keycloak?.tokenParsed?.allowedApps)
  }, [keycloak?.tokenParsed])
  return (
    <div className="w-1/5 min-h-screen px-4 py-2 text-center bg-gray-900">
      <div className=" text-gray-100 ">
        <div className="flex flex-col items-start justify-start mt-1 gap-2">
          <h1 className="font-bold text-3xl text-blue-500">Platform</h1>
          <p className="text-base text-left">
            {`${keycloak?.authenticated
              ? keycloak?.tokenParsed?.name
              : 'Faça login para ter acesso aos recuros da plataforma.'
              }`}
          </p>

          {
            keycloak?.authenticated
              ? <button className="w-full p-6 mt-3 py-4 flex rounded-md duration-300 cursor-pointer hover:bg-gray-600 text-white bg-gray-600" onClick={() => {
                keycloak?.logout();
                window.location.href = url;

              }}>Logout</button>
              : <button className="w-full p-6 mt-3 py-4 flex rounded-md duration-300 cursor-pointer hover:bg-gray-600 text-white bg-gray-600" onClick={() => keycloak?.login()}>Login</button>
          }


        </div>
        <div className="my-8 bg-gray-600 h-[1px]"></div>
      </div>

      <div className="flex flex-col justify-between items-start">
        <div className="w-full">
          {items.map((link): any => (
            <React.Fragment key={link.id}>
              <Link to={link.link}>
                <div
                  className={`mt-3 py-4 flex rounded-md duration-300 cursor-pointer hover:bg-blue-600 text-white ${location.pathname === link.link && "bg-blue-600"
                    }`}
                >
                  <span className=" ml-4 text-gray-200 font-bold">
                    {link.title}
                  </span>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>

        <div
          className="w-full mt-14 py-4 flex rounded-md duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={logout}
        >
          <span className=" ml-4 text-gray-200 font-bold">Sair</span>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
