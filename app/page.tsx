'use client'
import { useGetTestTextQuery } from "@/src/redux/services/test/test";
import { Typography } from "@mui/material";

export default function Home() {
  const { data } = useGetTestTextQuery(undefined)
  
  return (
    <Typography>{data ? data.text : 'loading'}</Typography>
  )
}
