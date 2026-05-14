"use server";

import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type FormState = {
  error?: string;
  success?: boolean;
};

export type Category = {
  id: string;
  name: string;
};

// ✅ Kategoriýalary çekýän funksiýa
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name")
    .order("name");

  if (error) {
    console.error("Kategoriýa ýalňyşlygy:", error.message);
    return [];
  }
  return data ?? [];
}

// ✅ Haryt döredýän funksiýa
export async function createProduct(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const category_id = formData.get("category")?.toString().trim() ?? "";
  const price = parseFloat(formData.get("price")?.toString() ?? "0");
  const stock_count = parseInt(formData.get("stock_left")?.toString() ?? "0", 10);
  const image_url = formData.get("image_url")?.toString().trim() || null;
  const description = formData.get("description")?.toString().trim() || null;
  const brand = formData.get("brand")?.toString().trim() || null;
  const weight = formData.get("weight")?.toString().trim() || null;
  const gender = formData.get("gender")?.toString().trim() || null;
  const size = formData.get("size")?.toString().trim() || null;
  const discount = parseFloat(formData.get("discount")?.toString() ?? "0") || 0;
  const tax = parseFloat(formData.get("tax")?.toString() ?? "0") || 0;

  // Validation
  if (!name) return { error: "Haryt ady hökmany!" };
  if (!category_id) return { error: "Kategoriýa saýlaň!" };
  if (isNaN(price) || price <= 0) return { error: "Baha 0-dan uly bolmaly!" };

  const { error: sbError } = await supabase.from("products").insert([
    {
      name,
      category_id,   // ✅ UUID göni iberilýär
      price,
      stock_count,   // ✅ SQL sütün ady
      image_url,
      description,
      brand,
      weight,
      gender,
      size,
      discount,
      tax,
    },
  ]);

  if (sbError) {
    console.error("SUPABASE ERROR:", sbError.message);
    return { error: `Bazada ýalňyşlyk: ${sbError.message}` };
  }

  revalidatePath("/products");
  redirect("/products/list");
}