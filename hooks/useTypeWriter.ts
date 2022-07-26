import { useEffect, useState } from "react";
import { useLiveRef } from "./useLiveRef";

export const useTypeWriter = (text: string) => {
  const [split, setSplit] = useState<[string, string]>(() => ["", text]);

  const liveText = useLiveRef(text);
  const liveSplit = useLiveRef(split);

  useEffect(() => {
    let lastTick = Date.now();
    let delay = randomInt(200, 800);
    let animationFrameId: number;

    setSplit(["", liveText.current]);

    const tick = () => {
      const now = Date.now();
      if (liveSplit.current[1].length === 0) {
        return;
      }

      if (now - lastTick < delay || liveSplit.current[1].length === 0) {
        animationFrameId = requestAnimationFrame(tick);
        return;
      }

      setSplit(([typed, untyped]) => [typed + untyped[0], untyped.slice(1)]);

      delay = randomInt(120, 160);
      lastTick = now;
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [liveSplit, liveText]);

  return split;
};

const randomInt = (low: number, high: number) => {
  return low + Math.round((high - low) * Math.random());
};
