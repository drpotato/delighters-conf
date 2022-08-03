import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLiveRef } from "./useLiveRef";

export const useConsumeUrlParam = (
  key: string,
  callback: (value: string) => void
) => {
  const router = useRouter();
  const [path, query] = router.asPath.split("?");

  const live = useLiveRef({ callback, router, path });
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(query ?? "");
    const value = urlSearchParams.get(key);

    if (value === null) {
      return;
    }

    urlSearchParams.delete(key);
    const encodedSearchParams = urlSearchParams.toString();
    void live.current.router.replace(
      `${live.current.path}${
        encodedSearchParams !== "" ? `?${encodedSearchParams}` : ""
      }`,
      undefined,
      {
        shallow: true,
      }
    );

    live.current.callback(value);
  }, [callback, key, live, query]);
};
