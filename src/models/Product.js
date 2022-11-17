import {Schema, model}from 'mongoose'

new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema);