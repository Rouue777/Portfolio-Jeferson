import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18181B",
          border: "6px solid #8B5CF6",
          borderRadius: "36px",
        }}
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 18h17v21c0 7-4 11-10 11-5 0-8-3-9-7"
            stroke="#FAFAFA"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37 50V17h10c7 0 11 4 11 10s-4 10-11 10H37"
            stroke="#8B5CF6"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
