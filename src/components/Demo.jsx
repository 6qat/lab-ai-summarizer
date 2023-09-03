import { linkIcon } from "../assets";
import { useState } from "react";

const Demo = () => {
  // eslint-disable-next-line no-unused-vars
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    alert("Submitted");
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex w-full flex-col gap-2">
        <form
          className="relative flex items-center justify-center"
          onSubmit={() => {}}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value=""
            onChange={() => {}}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↩
          </button>
        </form>

        {/* Browse URL History */}
      </div>

      {/* Display results */}
    </section>
  );
};

export default Demo;
