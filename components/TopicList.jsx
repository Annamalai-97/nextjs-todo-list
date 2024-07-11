import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading", error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div className="p-4 border border-slate-300 my-3 justify-between gap-5 flex items-start">
          <div>
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <div className>{t.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn  id={t.id}/>
            <Link href={`/editTopic/${t.id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
