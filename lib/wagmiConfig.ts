import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { Attribution } from "ox/erc8021";

// 🔥 Replace with your real Builder Code from base.dev
const BUILDER_CODE = "bc_yourcode123";

// Convert to ERC-8021 suffix
const DATA_SUFFIX = Attribution.toDataSuffix({
  codes: [BUILDER_CODE],
});

export const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },

  // ✅ THIS IS THE MAGIC LINE
  dataSuffix: DATA_SUFFIX,
});
