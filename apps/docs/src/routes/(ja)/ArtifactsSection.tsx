import { component$ } from "@builder.io/qwik";
import { Image } from "~/components/image/image";
import { MdiApi } from "~/components/icon/icon";
import { css } from "~/styled-system/css";

export const ArtifactsSection = component$(() => {
  return (
    <section>
      <h3>Artifacts</h3>
      <h4>Main</h4>
      <div
        class={css({
          display: "flex",
          alignItems: "end",
          gap: 4,
        })}
      >
        <Image
          src="https://res.cloudinary.com/silverbirder/image/upload/v1696334257/silver-birder.github.io/artifacts/Introduction-to-webcomponents-for-beginners.jpg"
          width={1057 / 5}
          height={1500 / 5}
          layout="constrained"
          alt="はじめてのWeb Components入門 - Amazon"
          href="https://www.amazon.co.jp/gp/product/B08CY2QCFV/"
        />
        <Image
          src="https://res.cloudinary.com/silverbirder/image/upload/v1696335110/silver-birder.github.io/artifacts/AI-GHOST-WRITER.jpg"
          width={640 / 3}
          height={400 / 3}
          layout="constrained"
          alt="AIゴーストライター - Chrome ウェブストア"
          href="https://chrome.google.com/webstore/detail/ai-ghostwriter/hpcokeldeijnfmbbbjkedhnedjjbjmoa"
        />
        <a
          href="https://github.com/silverbirder/Google-Account-Photo-API"
          target="_blank"
        >
          <figure
            title={"Google Account Photo API - GitHub"}
            class={css({
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            })}
          >
            <MdiApi
              class={css({
                width: "100px",
                height: "100px",
              })}
            />
            <figcaption
              class={css({
                fontSize: "0.8rem",
                color: "gray.500",
              })}
            >
              Google Account Photo API - GitHub
            </figcaption>
          </figure>
        </a>
      </div>
      <h4>Others</h4>
      <ul>
        <li>
          <a
            href="https://www.webcomponents.org/element/silverbirder/o-embed"
            target="_brank"
          >
            o-embed - webcomponents.org
          </a>
          <ul>
            <li>o-embed is Web Components for oEmbed generated by open-wc</li>
          </ul>
        </li>
        <li>
          <a
            href="https://www.webcomponents.org/element/silverbirder/ogp-me"
            target="_brank"
          >
            ogp-me - webcomponents.org
          </a>
          <ul>
            <li>
              ogp-me is a WebComponent that displays Facebook-like information
              based on Open Graph Protocol (OGP)
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/silverbirder/CaAT" target="_brank">
            CaAT - GitHub
          </a>
          <ul>
            <li>
              CaAT is the Google Apps Script Library that Calculate the Assigned
              Time in Google Calendar
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/silverbirder/Cotlin" target="_brank">
            Cotlin - GitHub
          </a>
          <ul>
            <li>
              Cotlin is tools that collect links in tweet by using the Twitter
              API(Search Tweets)
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/silverbirder/rMinc" target="_brank">
            rMinc - GitHub
          </a>
          <ul>
            <li>
              rMinc is the Google Apps Script Library that register Mail in
              Calendar
            </li>
          </ul>
        </li>
        <li>
          <a href="https://github.com/silverbirder/tiqav2" target="_brank">
            tiqav2 - GitHub
          </a>
          <ul>
            <li>Tiqav2 is the platform that provide image search API</li>
          </ul>
        </li>
        <li>
          <a
            href="https://github.com/silverbirder/zoom-meeting-creator"
            target="_brank"
          >
            zoom-meeting-creator - GitHub
          </a>
          <ul>
            <li>
              zoom-meeting-creator is a Google Apps Script for creating zoom
              meetings
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
});
