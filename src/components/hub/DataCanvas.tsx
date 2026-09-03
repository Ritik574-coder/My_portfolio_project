const NODES = [
  [8, 18], [22, 12], [38, 28], [54, 10], [70, 22], [86, 14],
  [12, 42], [28, 50], [46, 38], [62, 48], [80, 40], [92, 52],
  [16, 68], [34, 74], [52, 64], [68, 76], [84, 68], [6, 86],
  [42, 88], [74, 90], [18, 30], [58, 30], [76, 58],
];

const EDGES: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [1, 7], [2, 8],
  [3, 9], [4, 10], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
  [6, 12], [7, 13], [8, 14], [9, 15], [10, 16], [12, 13], [13, 14],
  [14, 15], [15, 16], [12, 17], [13, 18], [15, 19], [2, 20], [8, 21], [10, 22],
];

interface DataCanvasProps {
  paused?: boolean;
}

export function DataCanvas({ paused = false }: DataCanvasProps) {
  return (
    <svg
      className={`pointer-events-none fixed inset-0 z-0 size-full opacity-40 mix-blend-screen ${paused ? "opacity-15" : ""}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={`e-${i}`}
          x1={NODES[a][0]}
          y1={NODES[a][1]}
          x2={NODES[b][0]}
          y2={NODES[b][1]}
          stroke="rgba(0,245,255,0.28)"
          strokeWidth="0.12"
        />
      ))}
      {NODES.map(([x, y], i) => (
        <g key={`n-${i}`}>
          <circle cx={x} cy={y} r="0.55" fill={i % 3 === 0 ? "#00f5ff" : i % 3 === 1 ? "#00d2b4" : "#38bdf8"}>
            <animate
              attributeName="r"
              values="0.4;0.7;0.4"
              dur={`${2.4 + (i % 5) * 0.35}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </svg>
  );
}
