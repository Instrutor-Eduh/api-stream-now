import express from 'express';
import VideoController from '../controller/videoController.js';

const videosRoutes = express.Router();

videosRoutes.get("/videos", VideoController.ListarVideos);
videosRoutes.get("/categorias", VideoController.ListarCategorias);

export default videosRoutes;