"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeTopics = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Failed to delete topics");
        } else {
          router.refresh();
        }
        return res.json();
      } catch (error) {
        console.log("Error loading", error);
      }
    }
  };
  return (
    <button onClick={removeTopics} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
