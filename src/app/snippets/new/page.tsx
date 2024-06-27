import { db } from "@/db";
import { redirect } from "next/navigation";

const NewSnippetPae = () => {
  const createSnippet = async (formDate: FormData) => {
    // This needs to be a server action
    "use server";
    // Validate users input
    const title = formDate.get("title") as string;
    const code = formDate.get("code") as string;
    // create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // console.log(snippet);
    // redirect to the  home page
    redirect("/");
  };
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="w-full border rounded p-2"
            id="title"
            name="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="w-full border rounded p-2"
            id="code"
            name="code"
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewSnippetPae;
