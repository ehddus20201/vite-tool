import { renderMemo, type MemoData } from "../card";
// import { data } from "../data";
import { main } from "../main";
// import type { Database, Tables } from "../supabase/database.types";
import { supabase } from "../supabase/supabase";

export async function fetchMemo(){

  const {data, error} = await supabase.from('memo').select()
  
  // let a:Tables<'memo'>['priority']

  if(data){
  data.forEach((d)=>{
    renderMemo(main,d);
  })
}
}



