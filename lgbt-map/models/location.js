import mongoose, { Schema, models } from "mongoose";

const locationSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        visitCount: {
            type: Number,
            required: false,
            default: 0
        },
        description: {
            type: String,
            required: true
        },
        geometry: {
            type: {
                type: String,
                default: "Point",
            },
            coordinates: {
                type: [Number],
                index: "2dsphere",
            },
        },
    },
    { timestamps: true }
);

const Location = models.Location || mongoose.model("Location", locationSchema);
export default Location;
