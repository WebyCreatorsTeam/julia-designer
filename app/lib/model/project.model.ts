import mongoose, { Schema, model } from 'mongoose'

const ProjectSchema = new Schema({
    lang: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    desc: {
        type: String,
        required: [true, "Description is required"],
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    url: {
        type: String
    }

})

const Projects = mongoose.models.Projects || model("Projects", ProjectSchema);
export default Projects

