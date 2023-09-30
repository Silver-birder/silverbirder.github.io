import { type QwikIntrinsicElements } from "@builder.io/qwik";

// https://icones.js.org/

export function FileIconsDigdag(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="M48.634 214.73c65.563-90.17 132.57-138.5 171.84-154.916C373.783-4.272 416.639 80.453 512 69.831c-21.567 47.202-65.923 76.579-138.854 75.3c17.827 17.795 36.274 29.402 55.265 35.576c-61.914 69.137-98.787 165.106-113.294 295.67c-44.92-4.111-93.852-34.333-145.072-79.444c-19.553 14.294-46.257 21.296-84.453 16.58c7.876-22.727 20.787-43.516 36.096-63.382c-27.62 16.119-61.688 21.2-99.305 20.206c11.08-33.989 28.063-61.5 50.775-82.726c-22.23 9.74-46.005 16.353-73.158 20.473c3.914-42.973 20.824-72.53 48.634-93.354zM369.55 77.172c0-10.515-11.46-17.122-20.58-11.865c-9.12 5.258-9.12 18.472 0 23.73c9.12 5.257 20.58-1.35 20.58-11.865z"
      ></path>
    </svg>
  );
}

export function FileIconsOpenpolicyagent(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.9em"
      height="1em"
      viewBox="0 0 460 512"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="M405.397 372.778c-95.822 40.558-105.872 42.938-175.2 139.222c-67.554-85.526-61.552-91.243-174.582-137.526V252.446C50.3 246.116-4.463 179.96.292 146.674C6.322 104.507 92.168 0 92.168 0S63.789 95.562 65.794 123.879c1.248 17.514 29.995 39.762 36.941 44.895c70.674-73.09 177.761-80.14 255.64-.88c8.528-6.429 34.577-27.36 35.763-44.015C396.143 95.562 367.765 0 367.765 0s85.845 104.507 91.875 146.674c4.525 31.672-44.866 93.106-54.243 104.442v121.662zM252.6 246.416c0-16.88-18.399-27.487-33.038-19.047c-14.64 8.44-14.64 29.654 0 38.094c14.64 8.44 33.038-2.167 33.038-19.047z"
      ></path>
    </svg>
  );
}
