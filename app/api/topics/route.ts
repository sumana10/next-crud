// import connectMongoDB from "@/libs/mongodb";
// import Topic from "@/models/topic";
// import { NextRequest, NextResponse } from "next/server";


// export async function POST(request: NextRequest) {

//     const body = await request.json();

//     const { title, description } = body;

//     await connectMongoDB();

//     await Topic.create({ title, description });

//     return new NextResponse(
//         JSON.stringify({ success: true, message: 'Topics created' }),
//         { status: 201 },
//     );

// }

// export async function GET() {
//     await connectMongoDB();
//     const topics = await Topic.find();
//     return new NextResponse(
//         JSON.stringify({ topics }),
//         { status: 201 },
//     );
// }

// export async function DELETE(request: NextRequest) {

//     const id = request.nextUrl.searchParams.get("id");

//     await connectMongoDB();

//     await Topic.findByIdAndDelete(id);

//     return new NextResponse(JSON.stringify({
//         message: "Topics deleted"
//     }), { status: 200 })

// }
import mongoose from "mongoose";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";

// // Initialize a variable for the Mongoose connection
// let db : any;

// // Function to connect to the database using a connection pool
// async function connectMongoDB() {
//   if (!db) {
//     db = await mongoose.connect(process.env.MONGODB_URI || "", {
//     //@ts-ignore
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//   }
// }

// Connect to the database when the server starts
connectMongoDB();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, description } = body;

  try {
    await Topic.create({ title, description });
    return new NextResponse(JSON.stringify({ success: true, message: 'Topics created' }), { status: 201 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    const topics = await Topic.find();
    return new NextResponse(JSON.stringify({ topics }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  try {
    await Topic.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify({ message: "Topic deleted" }), { status: 204 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
