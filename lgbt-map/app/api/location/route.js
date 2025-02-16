import { connectMongoDB } from "@/lib/mongodb";
import Location from "@/models/location";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Parse the incoming request body as JSON
        const { username, longitude, latitude, description } = await request.json();

        // Validate the input
        if (!username || !longitude || !latitude || !description) {
            return NextResponse.json(
                { message: 'Missing required fields: username, longitude, latitude, and description.' },
                { status: 400 }
            );
        }

        await connectMongoDB();

        // Create a new location document
        const newLocation = new Location({
            username,
            description,
            geometry: {
                type: 'Point',
                coordinates: [longitude, latitude],  // GeoJSON format [longitude, latitude]
            },
        });

        // Save the location to the database
        await newLocation.save();

        // Respond with a success message
        return NextResponse.json(
            { message: 'Location created successfully', location: newLocation },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating location:', error);
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    }
}