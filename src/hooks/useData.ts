
// import { useState,useEffect } from "react";
// import apiClient from "../services/api-client";
// // type Genre={
// //     id:number,
// //     name:string,
// //     slug:string
// // }

// type FetchDtaResponse<T>={
//     count:number;
//     results:T[];
// }
// export const useData=<T>(endpoint:string)=>{
//     const [data, setData] = useState<T[]>([]);
//   const [error, seterror] = useState("");
//   useEffect(() => {
//     const controller=new AbortController();
//     apiClient
//       .get<FetchDtaResponse<T>>(endpoint,{signal:controller.signal})
//       .then((response) => {
//         setData(response.data.results);
//       })
//       .catch((error) => {
//         seterror("Error");
//       });
//       return ()=>{
//         controller.abort();
//       }
//   }, []);
//   return {data,error}
// }


import { AxiosRequestConfig,CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal,...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
      });

    return () => controller.abort();
  }, deps?[...deps]:[]);

  return { data, error, isLoading };
};

export default useData;