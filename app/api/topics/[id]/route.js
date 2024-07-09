import connectMongoDb from "@/libs/mongoDb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } =
      await request.json();
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating topic", error: error.message },
      { status: 500 }
    );
  }
};

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    await connectMongoDb();
    const topic = await Topic.findById(id);
    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating topic", error: error.message },
      { status: 500 }
    );
  }
};
