export default function HeroWaves() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <svg
        viewBox="0 0 1440 600"
        style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          top: "-40%",
          left: "-30%",
          filter: "blur(60px)",
          opacity: 0.35,
        }}
      >
        <path
          fill="#ffffff"
          d="M0,320 C360,420 1080,220 1440,320 L1440,0 L0,0 Z"
        >
          <animate
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="
              M0,320 C360,420 1080,220 1440,320 L1440,0 L0,0 Z;
              M0,300 C360,380 1080,260 1440,300 L1440,0 L0,0 Z;
              M0,320 C360,420 1080,220 1440,320 L1440,0 L0,0 Z
            "
          />
        </path>

        <path
          fill="#d9d9d9"
          d="M0,360 C360,460 1080,260 1440,360 L1440,0 L0,0 Z"
        >
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="
              M0,360 C360,460 1080,260 1440,360 L1440,0 L0,0 Z;
              M0,340 C360,420 1080,300 1440,340 L1440,0 L0,0 Z;
              M0,360 C360,460 1080,260 1440,360 L1440,0 L0,0 Z
            "
          />
        </path>

        <path
          fill="#bfbfbf"
          d="M0,400 C360,500 1080,300 1440,400 L1440,0 L0,0 Z"
        >
          <animate
            attributeName="d"
            dur="16s"
            repeatCount="indefinite"
            values="
              M0,400 C360,500 1080,300 1440,400 L1440,0 L0,0 Z;
              M0,380 C360,460 1080,340 1440,380 L1440,0 L0,0 Z;
              M0,400 C360,500 1080,300 1440,400 L1440,0 L0,0 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
