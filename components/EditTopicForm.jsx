import React from "react";

const EditTopicForm = () => {
  return (
    <form className="flex flex-col gap-3" action="">
      <input
        className="border border-slate-500 rounded-md px-8 py-2"
        type="text"
        placeholder="Topic Titile"
      />
      <input
        className="border border-slate-500 rounded-md px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <button className="bg-green-500 rounded-md font-bold text-white py-3 px-8 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
