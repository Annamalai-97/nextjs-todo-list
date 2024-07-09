import connectMongoDb from "@/libs/mongoDb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, description } = await request.json();
    await connectMongoDb();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating topic", error: error.message },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectMongoDb();
    const topics = await Topic.find();
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating topic", error: error.message },
      { status: 500 }
    );
  }
}

export const DELETE = async (request) => {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    const topics = await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message :"Topic Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating topic", error: error.message },
      { status: 500 }
    );
  }
}


// export async function POST(request) {
//   try {
//     const { title, description } = await request.json();
//     await connectMongoDb();
//     await Topic.create({ title, description });
//     return NextResponse.json({ message: "Topic Created" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error creating topic", error: error.message },
//       { status: 500 }
//     );
//   }
// }