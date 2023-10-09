import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {

    const body = await request.json();

    const { title, description } = body;

    await connectMongoDB();

    await Topic.create({ title, description });

    return new NextResponse(
        JSON.stringify({ success: true, message: 'Topics created' }),
        { status: 201 },
    );

}

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return new NextResponse(
        JSON.stringify({ topics }),
        { status: 201 },
    );
}

export async function DELETE(request: NextRequest) {

    const id = request.nextUrl.searchParams.get("id");

    await connectMongoDB();

    await Topic.findByIdAndDelete(id);

    return new NextResponse(JSON.stringify({
        message: "Topics deleted"
    }), { status: 200 })

}