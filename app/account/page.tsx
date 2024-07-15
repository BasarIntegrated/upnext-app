import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import AccountForm from "./AccountForm";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <AccountForm user={user} />;
}
