import { serverSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
  const result = serverSideFunction();
  return (
    <div>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
    </div>
  );
};

export default ServerRoutePage;
