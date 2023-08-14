import React, { useState } from "react";

// contexts
import useAuth from "host/useAuth";
import { useUser, useName } from "host/UserAuth";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const navigate = useNavigate();
  const { signInUser } = useAuth();
  const [userName, setUserName] = useState<string>("");
  const { setUser } = useUser();
  // const { setName } = useUser();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Mudando...");
    setUserName(event.target.value);
    setUser(event.target.value);
  };

  function login() {
    if (userName === "admin" || userName === "member") {
      const user = {
        name: userName,
        email: "user@email.com",
        token: "abc123",
      };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/home");
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="tex-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Entrar na sua conta
            </h1>

            <form className="w-full space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  onChange={(event) => handleInputChange(event)}
                />
              </div>

              <button
                type="submit"
                disabled={!userName}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => {
                  // signInUser(userName);
                  login();
                }}
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LoginView };
