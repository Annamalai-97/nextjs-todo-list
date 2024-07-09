import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicList = () => {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 justify-between gap-5 flex items-start">
        <div>
          <h2 className="text-2xl font-bold">Topic Title</h2>
          <div className>Topic Description</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicList;
