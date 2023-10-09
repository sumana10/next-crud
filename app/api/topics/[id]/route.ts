
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {

  const { id } = params;

  const { newTitle: title, newDescription: description } = await request.json();

  await connectMongoDB();

  await Topic.findByIdAndUpdate(id, { title, description });

  return new NextResponse(JSON.stringify({ message: "Topics updated" }), { status: 200 })
}

export async function GET(request: NextRequest, { params }: any) {

  const { id } = params;

  await connectMongoDB();

  const topic = await Topic.findOne({ _id: id });

  return new NextResponse(JSON.stringify({ topic }), { status: 200 })

}