"use client";
import { useState } from "react";

export default function usePost(path) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    setError(null);

        try {

            const baseUrl = process.env.NEXT_PUBLIC_API_BASE;
            const res = await fetch(`${baseUrl}${path}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Failed to post data");

            const json = await res.json();
            setData(json);
            setLoading(false);
            return json;
            } catch (err) {
            setError(err.message);
            setLoading(false);
            return null;
        }
  };

  return { postData, loading, error, data };
}
