import video from "../models/video";

class VideoController {
    static ListarVideos = async (req, res)=>{
        try {
            const {categoria} = req.query;

            // 1. Criamos um objeto que, por padrão, significa "encontre tudo"
            const filtro = {};

            // 2. Verificamos se o usuário quer um filtro
            if(categoria){
            // 3. Se ele quer, NÓS MODIFICAMOS o objeto
            // Agora, filtro é igual a { categoria: "Tecnologia" }
                filtro.categoria = categoria;
            }

            const listaVideos = await video.find(filtro);
            res.status(200).json(listaVideos)
        } catch (error) {
            res.status(500).json({mensagem: "Erro na quisição da chamada de vídeos"})
            throw error;
        }
    }

    static ListarCategorias = async (req, res)=>{
        try {
            // Pede ao Mongoose para olhar TODOS os vídeos
            // e retornar uma lista de valores ÚNICOS do campo "categoria"
            const listarCategorias = await video.distinct("categoria");
            res.status(200).json(listarCategorias);
        } catch (error) {
            res.status(500).json({mensagem: "Erro ao listar categorias"});
            throw error;
        }
    }
}

export default VideoController;