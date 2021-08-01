import { useEffect, useState } from "react";
import { fetchJobList } from "../../../state/actions";
import { useAppDispatch } from "../../../state";
import { useJobSelector } from "../../../state/hooks";
import { unwrapResult } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";
import { JobInfo } from "../../../state/job/type";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function useJobList() {
  const query = useQuery();
  const dispatch = useAppDispatch();
  const loading = useJobSelector().loading;
  const [jobList, setJobList] = useState<JobInfo[]>([]);
  const searchType = query.get("type");

  useEffect(() => {
    const fetch = async () => {
      const response = await dispatch(fetchJobList(searchType || ""));
      const unwrap = await unwrapResult(response);
      setJobList(unwrap.data);
    };
    fetch();
  }, [dispatch, searchType]);

  return { jobList, loading };
}

export default useJobList;
