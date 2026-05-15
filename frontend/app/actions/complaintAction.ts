'use server';

import { createServerClient } from "@/lib/supabase";

export async function submitComplaint(formData: FormData) {
  const name = formData.get('name') as string;
  const contact = formData.get('contact') as string;
  const message = formData.get('message') as string;

  // Senior Safe Check: Boş maglumatlaryň baza gitmeginiň öňüni alýarys
  if (!name || !contact || !message) {
    return { success: false, error: "Ähli hökmany meýdançalary dolduryň!" };
  }

  const supabase = await createServerClient();

  const { error } = await supabase
    .from("user_complaints")
    .insert([{ name, contact, message }]);

  if (error) {
    console.error("Baza ýazylmady:", error.message);
    return { success: false, error: "Nätanys ýalňyşlyk ýüze çykdy. Täzeden synanyşyň." };
  }

  return { success: true };
}
