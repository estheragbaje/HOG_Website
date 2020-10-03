import React from "react";
import { Stack } from "@chakra-ui/core";
import Link from "next/link";
import SideSermon from "./SideSermon";

function SideSermonList({ sermons, isActive }) {
  return (
    <Stack spacing={4} justifyContent="space-between">
      {sermons.map((sermon) => {
        return (
          <Link key={sermon.id} href={`/sermons/${sermon.id}`}>
            <SideSermon
              date={sermon.Date}
              service="Sunday Service"
              topic={sermon.Topic}
            />
          </Link>
        );
      })}
    </Stack>
  );
}

export default SideSermonList;
