import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "myrealm",
  clientId: "front",
  //   clientSecret: "uiXeUs2z4I0ccG7xk0F51lN41Av58o7E",
});

export default keycloak;
