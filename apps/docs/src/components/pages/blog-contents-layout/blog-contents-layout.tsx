import { component$, Slot } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
import { useSpeakLocale, useTranslate } from "qwik-speak";
import { BuyMeACoffee } from "~/components/buy-me-a-coffee/buy-me-a-coffee";
import { IonLogoHackernews } from "~/components/icon/ion";
import {
  SimpleIconsFacebook,
  SimpleIconsHatenabookmark,
  SimpleIconsLinkedin,
  SimpleIconsMastodon,
  SimpleIconsPocket,
  SimpleIconsReddit,
  SimpleIconsTwitter,
} from "~/components/icon/simple";
import { Link } from "~/components/link/link";
import { Tag } from "~/components/tag/tag";
import JaData from "~/routes/(ja)/blog/index.json";
import EnData from "~/routes/en-US/blog/index.json";
import { config } from "~/speak-config";
import { css } from "~/styled-system/css";
import { stringToSlug } from "~/util";

export const BlogContentsLayout = component$(() => {
  const head = useDocumentHead();
  const sl = useSpeakLocale();
  const t = useTranslate();
  const tags: string[] = head.frontmatter.tags || [];
  return (
    <article>
      <section>
        <h2>{head.title}</h2>
        <div
          class={css({
            display: "flex",
            flexDirection: "row",
            gap: 1,
            flexWrap: "wrap",
          })}
        >
          {tags.map((tag) => (
            <Tag url={stringToSlug(`/blog/tags/${tag}`)} name={tag} key={tag} />
          ))}
        </div>
        <Slot />
      </section>
      <section>
        <div
          class={css({
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <div
            class={css({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <BuyMeACoffee />
            <p
              class={css({
                fontSize: "0.8rem",
                color: "gray.500",
              })}
            >
              {t("blog.support")}
            </p>
          </div>
        </div>
        <h3>{t("blog.share@@シェアしよう")}</h3>
        <div
          class={css({
            display: "flex",
            flexDirection: "row",
            gap: 1,
          })}
        >
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `${head.title} by @silverbirder | silverbirder.github.io ${head.frontmatter.permalink}`
            )}`}
            target="_blank"
            class={css({ color: "blue.500", _hover: { color: "blue.900" } })}
          >
            <SimpleIconsTwitter
              class={css({ width: "icon.main", height: "icon.main" })}
            />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              head.frontmatter.permalink
            )}&title=${encodeURIComponent(head.title)}`}
            target="_blank"
            class={css({ color: "blue.500", _hover: { color: "blue.900" } })}
          >
            <SimpleIconsLinkedin
              class={css({ width: "icon.main", height: "icon.main" })}
            />
          </a>
          <a
            href={`https://www.reddit.com/submit?url=${encodeURIComponent(
              head.frontmatter.permalink
            )}&title=${encodeURIComponent(head.title)}`}
            target="_blank"
            class={css({ color: "red.500", _hover: { color: "red.900" } })}
          >
            <SimpleIconsReddit
              class={css({ width: "icon.main", height: "icon.main" })}
            />
          </a>
          <a
            href={`https://getpocket.com/edit?url=${encodeURIComponent(
              head.frontmatter.permalink
            )}`}
            target="_blank"
            class={css({ color: "red.500", _hover: { color: "red.900" } })}
          >
            <SimpleIconsPocket
              class={css({ width: "icon.main", height: "icon.main" })}
            />
          </a>
          <a
            href={`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(
              head.frontmatter.permalink
            )}&t=${encodeURIComponent(head.title)}`}
            target="_blank"
            class={css({
              color: "orange.500",
              _hover: { color: "orange.900" },
            })}
          >
            <IonLogoHackernews
              class={css({ width: "icon.main", height: "icon.main" })}
            />
          </a>
          <a
            href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
              head.frontmatter.permalink
            )}`}
            target="_blank"
            class={css({ color: "blue.500", _hover: { color: "blue.900" } })}
          >
            <SimpleIconsFacebook
              class={css({ width: "icon.main", height: "icon.main" })}
            />
          </a>
          <a
            href={`https://toot.kytta.dev/?text=${encodeURIComponent(
              head.frontmatter.permalink
            )}`}
            target="_blank"
            class={css({ color: "blue.500", _hover: { color: "blue.900" } })}
          >
            <SimpleIconsMastodon
              class={css({ width: "icon.main", height: "icon.main" })}
            />
          </a>
          <a
            href={`https://b.hatena.ne.jp/entry/panel/?url=${encodeURIComponent(
              head.frontmatter.permalink
            )}`}
            target="_blank"
            class={css({ color: "blue.500", _hover: { color: "blue.900" } })}
          >
            <SimpleIconsHatenabookmark
              class={css({ width: "icon.main", height: "icon.main" })}
            />
          </a>
        </div>
      </section>
      <section
        class={css({
          display: "flex",
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <div class="onesignal-customlink-container"></div>
      </section>
      <section>
        <h3>{t("blog.relatedTag@@関連するタグ")}</h3>
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
          data-lang={sl.lang.substring(0, 2)}
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
    const sl = useSpeakLocale();
    const data = sl.lang === config.defaultLocale.lang ? JaData : EnData;
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
              <Tag url={`/blog/tags/${stringToSlug(tag)}`} name={tag} />
              <ul>
                {relatedTagPosts.map((post) => (
                  <li key={post.title}>
                    <Link href={post.permalink}>{post.title}</Link>
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
