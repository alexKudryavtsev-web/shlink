import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hock";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import LinksList from "../components/LinksList";

function LinksPage() {
  const { isLoading, request } = useHttp();
  const auth = useContext(AuthContext);
  const [links, setLinks] = useState([]);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/link", "GET", null, {
        Authorization: `Bearer ${auth.token}`,
      });
      setLinks(fetched);
    } catch (error) {}
  }, [auth.token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (isLoading) {
    return <Loader />;
  }

  return <LinksList links={links} />;
}

export default LinksPage;
