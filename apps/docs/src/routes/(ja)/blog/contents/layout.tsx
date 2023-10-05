import { component$, Slot } from "@builder.io/qwik";
import { type DocumentHead, useDocumentHead } from "@builder.io/qwik-city";
import { Tag } from "~/components/tag/tag";
import data from "~/routes/(ja)/blog/index.json";
import { HStack } from "~/styled-system/jsx";

export default component$(() => {
  const head = useDocumentHead();
  const tags: string[] = head.frontmatter.tags || [];
  return (
    <article>
      <section>
        <h1>{head.title}</h1>
        <HStack gap={1}>
          {tags.map((tag) => (
            <Tag url={`/blog/tags/${tag}`} name={tag} key={tag} />
          ))}
        </HStack>
        <Slot />
      </section>
      <section>
        <h2>Tags</h2>
        <RelatedTags currentTags={tags} currentTitle={head.title} />
      </section>
      <section>
        <script
          src="https://giscus.app/client.js"
          data-repo="silverbirder/silverbirder.github.io"
          data-repo-id="MDEwOlJlcG9zaXRvcnkxNzEwMTQ5MjI="
          data-category="Announcements"
          data-category-id="DIC_kwDOCjF7Cs4CZNjT"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="1"
          data-input-position="top"
          data-theme="light"
          data-lang="ja"
          data-loading="lazy"
          crossOrigin="anonymous"
          async
        ></script>
      </section>
    </article>
  );
});

interface RelatedTagsProps {
  currentTags: string[];
  currentTitle: string;
}

const RelatedTags = component$(
  ({ currentTags, currentTitle }: RelatedTagsProps) => {
    return (
      <>
        {currentTags.map((tag) => {
          const relatedTagPosts = data.filter(
            (post) =>
              post.tags.indexOf(tag) !== -1 && currentTitle !== post.title
          );
          if (relatedTagPosts.length === 0) return <></>;
          return (
            <section key={tag}>
              <Tag url={`/blog/tags/${tag}`} name={tag} />
              <ul>
                {relatedTagPosts.map((post) => (
                  <li key={post.title}>
                    <a href={post.permalink}>{post.title}</a>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </>
    );
  }
);

export const head: DocumentHead = ({ head }) => {
  const description = head.meta.find((m) => m.name === "description")?.content;
  const currentPosts = data.filter((post) => post.title === head.title);
  const permalink = currentPosts.length > 0 ? currentPosts[0].permalink : "";
  return {
    ...head,
    meta: [
      ...head.meta,
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "silverbirder | Blog" },
      { name: "twitter:creator", content: "silverbirder" },
      { name: "twitter:title", content: head.title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:image",
        content:
          "https://res.cloudinary.com/silverbirder/image/upload/v1611128736/silver-birder.github.io/assets/logo.png",
      },
      { property: "og:title", content: head.title },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://silverbirder.github.io" + permalink,
      },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/silverbirder/image/upload/v1611128736/silver-birder.github.io/assets/logo.png",
      },
      { property: "og:description", content: description },
      { property: "og:site_name", content: "silverbirder" },
    ],
  };
};
