import { useCallback, useEffect, useMemo, useState } from "react";

import { createClient } from "@supabase/supabase-js";

export interface Rsvp {
  id: string;
  name: string;
  rsvpedAt: string | null;
}

export const useRsvp = (
  projectId: string | null,
  accessToken: string | null,
  id: string | null
) => {
  const [loading, setLoading] = useState(false);
  const [rsvp, setRsvp] = useState<Rsvp | null>(null);

  const supabase = useMemo(
    () =>
      accessToken !== null && projectId !== null
        ? createClient(`https://${projectId}.supabase.co`, accessToken)
        : null,
    [accessToken, projectId]
  );

  const loadRsvp = useCallback(async () => {
    if (supabase === null) {
      return;
    }

    setLoading(true);

    const result = await supabase.rpc("get_rsvp", { id });

    setRsvp(result.data as any); // YOLO
    setLoading(false);
  }, [id, supabase]);

  const confirmRsvp = useCallback(async () => {
    if (supabase === null) {
      return;
    }

    await supabase.rpc("confirm_rsvp", { id });
    await loadRsvp();
  }, [id, loadRsvp, supabase]);

  const unconfirmRsvp = useCallback(async () => {
    if (supabase === null) {
      return;
    }

    await supabase.rpc("unconfirm_rsvp", { id });
    await loadRsvp();
  }, [id, loadRsvp, supabase]);

  useEffect(() => void loadRsvp(), [loadRsvp]);

  return { loading, rsvp, confirmRsvp, unconfirmRsvp };
};
