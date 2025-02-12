import axios from "axios";

// Création d'une instance spécifique pour ton backend Spring Boot
const apiSpringBoot = axios.create({
    baseURL: "http://localhost:8080/" // Change l'URL selon ton backend
});


export const getData = (url: string, config = {}) => {
    return apiSpringBoot.get(url, config)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Erreur API Spring Boot:", error);
            throw error;
        });
};

export default apiSpringBoot;
