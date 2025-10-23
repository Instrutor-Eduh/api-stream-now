import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String},
    descricao: {type: String},
    url: {type: String},
    image: {type: String},
    categoria: {type: String}
}, {versionKey: false})

const video = mongoose.model("videos", videoSchema);

export default video;   