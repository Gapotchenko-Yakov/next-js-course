import { comments } from "../data";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const comment = comments.find((item) => item.id === parseInt(params.id));
  return Response.json(comment);
};
