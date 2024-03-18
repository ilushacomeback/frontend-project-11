export default (content, value) => {
  const parserXml = new DOMParser().parseFromString(content, "application/xml");
  const feed = {
    title: parserXml.querySelector("title").textContent,
    description: parserXml.querySelector("description").textContent,
    link: value,
  };
  const posts = [...parserXml.querySelectorAll("item")].map((post) => {
    return {
      title: post.querySelector("title").textContent,
      description: post.querySelector("description").textContent,
      link: post.querySelector("link").textContent,
    };
  });

  return [feed, posts];
};
