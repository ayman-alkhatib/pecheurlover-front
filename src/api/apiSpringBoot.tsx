import axios from "axios";

const apiSpringBoot = axios.create({
    baseURL: "http://localhost:8080/"
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
