import { renderMemo, type MemoData } from "../card";
import { data } from "../data";
import { main } from "../main";
import { supabase } from "../supabase/supabase";

export function fetchMemo(){
  data.forEach((d:MemoData)=>{
    renderMemo(main,d);
  })
}


console.log(supabase);
