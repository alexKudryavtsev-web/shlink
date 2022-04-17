import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LinkCard from "../components/LinkCard";
import Loader from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hock";

function DetailPage() {
  const { token } = useContext(AuthContext);
  const { request, isLoading } = useHttp();
  const [link, setLink] = useState(null);
  const { id: linkId } = useParams();

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(fetched);
    } catch (e) {}
  }, [token, linkId, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{!isLoading && link && <LinkCard link={link} />}</>;
}

export default DetailPage;
