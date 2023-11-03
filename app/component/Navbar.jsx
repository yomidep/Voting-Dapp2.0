"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/arkade.jpeg";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  zerionWallet,
  rainbowWallet,
} from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";




const Navbar = () => {

  const address_ = useAddress();
  
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#0e1c25] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-0">
        <Link
          href={"/"}
          className="text-5xl text-white font-semibold items-center justify-center flex"
        >
          <Image src={logo} className="w-20 p-3 cursor-pointer rounded-full" alt=" LOGOMAN "/>
          <p className="text-white px-3 text-lg">PowerArk</p>
        </Link>
        {/* ========== for mobile menu =========== */}
        <div className="mobile-menu block ">
        <ThirdwebProvider
          activeChain={{
            // === Required information for connecting to the network === \\
            chainId: 84531, // Chain ID of the network
            // Array of RPC URLs to use
            rpc: ["https://goerli.base.org"],
    
            // === Information for adding the network to your wallet (how it will appear for first time users) === \\
            // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
            nativeCurrency: {
              decimals: 18,
              name: "Base ETH",
              symbol: "ETH",
            },
            shortName: "Base", // Display value shown in the wallet UI
            slug: "Base", // Display value shown in the wallet UI
            testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
            chain: "Base", // Name of the network
            name: "Base Goerli", // Name of the network
          }}
          clientId="YOUR_CLIENT_ID"
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            zerionWallet(),
            rainbowWallet(),
          ]}
        >
          <ConnectWallet
            theme={"dark"}
            switchToActiveChain={true}
            modalSize={"wide"}
          />
        </ThirdwebProvider>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
