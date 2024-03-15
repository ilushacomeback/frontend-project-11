export default (content) => {
  const parserDom = new DOMParser();
  const html = parserDom.parseFromString(content, "text/html");
  const titleFeed = html.querySelector("title");
  const descriptionFeed = html.querySelector("description");
  const items = html.querySelectorAll("item");
  const posts = [...items].reduce((acc, el) => {
    const title = el.querySelector("title");
    const description = el.querySelector("description");
    const link= el.querySelector("link")
    const normalizeLink = link.nextSibling.textContent.match(/http.[^\]]+/)
    const post = {
      title: title.textContent,
      description: description.textContent,
      link: normalizeLink
    };
    acc.push(post);
    return acc;
  }, []);
  const feed = {
    title: titleFeed.textContent,
    description: descriptionFeed.textContent,
  };
  return [feed, posts]
};
