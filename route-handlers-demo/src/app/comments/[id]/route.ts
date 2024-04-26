import { comments } from "../data";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const comment = comments.find((item) => item.id === parseInt(params.id));
  return Response.json(comment);
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((item) => item.id === parseInt(params.id));
  comments[index].text = text;
  return Response.json(comments[index]);
};

export const DELETE = (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const index = comments.findIndex((item) => item.id === parseInt(params.id));
  const deletedComment = comments[index];
  comments.splice(index, 1);

  return Response.json(deletedComment);
};
