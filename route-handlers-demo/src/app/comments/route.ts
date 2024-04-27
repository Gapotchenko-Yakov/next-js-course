import { NextRequest } from "next/server";
import { comments } from "./data";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const selectedComment = query
    ? comments.filter((item) => item.text.includes(query))
    : comments;
  return Response.json(selectedComment);
};

export const POST = async (request: Request) => {
  const comment = await request.json();
  const newComment = {
    id: comments.length,
    text: comment.text,
  };
  comments.push(newComment);
  return Response.json(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
