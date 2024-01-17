import { useKeycloak } from "@react-keycloak/web";


export function useUserKeycloack() {
	const { keycloak } = useKeycloak();

	function getUserName() {
		return keycloak?.tokenParsed?.name
	}

	function userIsAuthenticate() {
		return keycloak?.authenticated
	}

	function userAllowedApps() {
		return keycloak?.tokenParsed?.allowedApps
	}

	return {
		getUserName, userIsAuthenticate, userAllowedApps
	}
}