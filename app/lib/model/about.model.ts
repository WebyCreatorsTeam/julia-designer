import mongoose, { Schema, model } from 'mongoose'

const AboutSchema = new Schema({
    lang: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: [true, "Description is required"],
    },
})

const About = mongoose.models.About || model("About", AboutSchema);
export default About

