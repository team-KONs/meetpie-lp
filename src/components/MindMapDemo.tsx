"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "center", label: "会議", x: 200, y: 150, r: 32, color: "#3b82f6" },
  { id: "n1", label: "論点A", x: 80, y: 60, r: 24, color: "#6366f1" },
  { id: "n2", label: "論点B", x: 320, y: 60, r: 24, color: "#6366f1" },
  { id: "n3", label: "合意事項", x: 80, y: 240, r: 24, color: "#10b981" },
  { id: "n4", label: "TODO", x: 320, y: 240, r: 24, color: "#f59e0b" },
  { id: "n5", label: "懸念点", x: 360, y: 150, r: 20, color: "#ef4444" },
  { id: "n6", label: "案1", x: 40, y: 150, r: 18, color: "#8b5cf6" },
];

const edges = [
  { from: "center", to: "n1" },
  { from: "center", to: "n2" },
  { from: "center", to: "n3" },
  { from: "center", to: "n4" },
  { from: "center", to: "n5" },
  { from: "n1", to: "n6" },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function MindMapDemo() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="マインドマップのデモアニメーション"
    >
      {edges.map((edge, i) => {
        const from = getNode(edge.from);
        const to = getNode(edge.to);
        return (
          <motion.line
            key={`edge-${i}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#e5e7eb"
            strokeWidth={2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
          />
        );
      })}

      {nodes.map((node, i) => (
        <motion.g
          key={node.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: i * 0.15,
            duration: 0.4,
            type: "spring",
            stiffness: 200,
          }}
          style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
        >
          <circle cx={node.x} cy={node.y} r={node.r} fill={node.color} opacity={0.15} />
          <circle cx={node.x} cy={node.y} r={node.r - 4} fill={node.color} />
          <text
            x={node.x}
            y={node.y + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={node.r > 24 ? 11 : 9}
            fontWeight={600}
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      <motion.circle
        cx={200}
        cy={150}
        r={40}
        fill="none"
        stroke="#3b82f6"
        strokeWidth={1}
        opacity={0.3}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
      />
    </svg>
  );
}
