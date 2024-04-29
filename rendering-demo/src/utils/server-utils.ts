import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use libs,
     env variables,
     interact with a db,
     process confidential information`
  );
  return "server result";
};
