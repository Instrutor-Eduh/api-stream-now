import videosRoutes from "./videos.js";

const routes = (app) => {
    app.route("/").get((req, res)=>{
        const mensage = "Servidor está rodando 🚀"
        res.status(200).send(mensage);
    })

    app.use(videosRoutes);
}

export default routes;