"use client";

import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";

export default function Home() {
  const { sendTransaction } = useSendTransaction();

  return (
    <div style={{ padding: 40 }}>
      <h2>Base Builder Code Demo</h2>

      <button
        onClick={() =>
          sendTransaction({
            to: "0x70997970c51812dc3a010c7d01b50e0d17dc79c8",
            value: parseEther("0.001"),
          })
        }
      >
        Send ETH (With Builder Code)
      </button>
    </div>
  );
}
