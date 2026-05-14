"use server";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export type CategoryFormState = {
  error?: string;
  success?: boolean;
};

export async function createCategory(
  _prevState: CategoryFormState,
  formData: FormData,
): Promise<CategoryFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";

  if (!name) return { error: "Ady hökmany!" };

  try {
    const { error } = await supabase.from("categories").insert([
      {
        name,
        description: formData.get("description")?.toString() || null,
        image_url: formData.get("image_url")?.toString() || null,
        product_stock: 0,
        created_by: "Admin",
      },
    ]);

    if (error) throw error;

    revalidatePath("/categories");
    return { success: true };
  } catch (err) {
    
    const message = err instanceof Error ? err.message : "Nätanyş ýalňyşlyk";
    console.error("Supabase Error:", message);
    return { error: message };
  }
}
