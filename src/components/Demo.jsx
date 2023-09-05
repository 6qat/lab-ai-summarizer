import { linkIcon } from "../assets";
import { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../services/article.js";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles"),
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(article.url);
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setAllArticles(updatedAllArticles);
      setArticle(newArticle);
      console.log(newArticle);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex w-full flex-col gap-2">
        <form
          className="relative flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            // required
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
        <div className="flex max-h-60 flex-col gap-1 overflow-y-auto">Blah</div>
      </div>

      {/* Display results */}
    </section>
  );
};

export default Demo;
