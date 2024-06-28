"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { redirect } from "next/navigation";

// Edit a snippet
export async function editSnippet(id: number, code: string) {
  const snippetEdit = await db.snippet.update({
    where: { id },
    data: { code },
  });

  // Clear the cache when a snippet is edited
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

// Delete a snippet
export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  // Clear the cache when a snippet is deleted
  revalidatePath(`/`);
  redirect(`/`);
}

// Create a snippet
export const createSnippet = async (
  formState: { message: string },
  formDate: FormData
) => {
  try {
    // Validate users input
    const title = formDate.get("title");
    const code = formDate.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be at least 3 characters",
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer",
      };
    }

    // create a new record in the database
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "An unknown error occurred",
      };
    }
  }

  revalidatePath("/");
  // redirect to the  home page
  redirect("/");
};
