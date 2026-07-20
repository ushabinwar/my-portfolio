import React, { useEffect, useRef, useState } from "react";

const TimelineSVG = () => {
  const pathRef = useRef(null);

  // Moving orb
  const orbRef = useRef(null);

  // Timeline nodes
  const nodeRefs = useRef([]);

  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const path = pathRef.current;

    if (!path) return;

    const totalLength = path.getTotalLength();

    // Adjust these values later if needed
    const percentages = [0.12, 0.46, 0.82];

    const points = percentages.map((p) =>
      path.getPointAtLength(totalLength * p)
    );

    setNodes(points);
  }, []);

  return (
    <svg
      className="absolute left-1/2 top-40 -translate-x-1/2 z-0"
      width="500"
      height="1800"
      viewBox="0 0 500 1800"
    >
      {/* ===================== */}
      {/* Glow Filter */}
      {/* ===================== */}

      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />

          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ===================== */}
      {/* Timeline Path */}
      {/* ===================== */}

      <path
        ref={pathRef}
        d="
          M250 0
          C420 200 80 350 250 550
          C420 750 80 900 250 1100
          C420 1300 80 1450 250 1650
        "
        stroke="#AEB784"
        strokeWidth="4"
        fill="none"
      />

      {/* ===================== */}
      {/* Timeline Nodes */}
      {/* ===================== */}

      {nodes.map((point, index) => (
        <circle
          key={index}
          ref={(el) => (nodeRefs.current[index] = el)}
          cx={point.x}
          cy={point.y}
          r="8"
          fill="#AEB784"
        />
      ))}

      {/* ===================== */}
      {/* Moving Orb */}
      {/* ===================== */}

      <circle
        ref={orbRef}
        cx="250"
        cy="0"
        r="12"
        fill="#AEB784"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default TimelineSVG;