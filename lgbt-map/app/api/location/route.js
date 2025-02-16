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


export async function GET(request) {
    // try {
    //     // Parse the incoming request query parameters (assuming latitude and longitude are passed)
    //     console.log(request.nextUrl.searchParams);
    //     const longitude = request.nextUrl.searchParams.get('longitude');
    //     const latitude = request.nextUrl.searchParams.get('latitude');
    //     console.log(longitude);
    //     console.log(latitude);

    //     // Validate the input
    //     if (!longitude || !latitude) {
    //         return NextResponse.json(
    //             { message: 'Missing required query parameters: longitude and latitude.' },
    //             { status: 400 }
    //         );
    //     }

    //     // Convert latitude and longitude to numbers
    //     const lat = parseFloat(latitude);
    //     const lon = parseFloat(longitude);

    //     // Validate the coordinates
    //     if (isNaN(lat) || isNaN(lon)) {
    //         return NextResponse.json(
    //             { message: 'Invalid coordinates provided.' },
    //             { status: 400 }
    //         );
    //     }

    //     await connectMongoDB();

    //     // Define a 2-mile radius in meters (1 mile = 1609.34 meters)
    //     const radiusInMeters = 2 * 1609.34;

    //     // Find locations within the 2-mile radius using $nearSphere
    //     const nearbyLocations = await Location.find({
    //         geometry: {
    //             $nearSphere: {
    //                 $geometry: {
    //                     type: "Point",
    //                     coordinates: [lon, lat], // GeoJSON format [longitude, latitude]
    //                 },
    //                 $maxDistance: radiusInMeters, // Max distance in meters
    //             },
    //         },
    //     });

    //     // Respond with the found locations
    //     return NextResponse.json(
    //         { locations: nearbyLocations },
    //         { status: 200 }
    //     );
    // } catch (error) {
    //     console.error('Error fetching locations:', error);
    //     return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    // }


    await connectMongoDB();
    const fetchAll = await Location.find();
    return NextResponse.json(
        { locations: fetchAll },
        { status: 200 }
    );
}

export async function PATCH(request) {
    try {
        const { _id } = await request.json();

        if (!_id) {
        return NextResponse.json(
            { error: 'Id must be provided.' },
            { status: 400 }
        );
        }

        // Connect to the database
        await connectMongoDB();

        // Update the document's longitude field
        const updatedLocation = await Location.findByIdAndUpdate(
        _id,
        { $inc: { visitCount: 1 } },
        { new: true }
        );

        if (!updatedLocation) {
        return NextResponse.json(
            { error: 'Location not found.' },
            { status: 404 }
        );
        }

        return NextResponse.json({ message: 'Field updated', updatedLocation });
    } catch (error) {
        console.error('Error updating field:', error);
        return NextResponse.json(
        { error: 'Failed to update field.' },
        { status: 500 }
        );
    }
}
