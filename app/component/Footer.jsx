import React from "react";
import contractABI from "../contractABI";
import { ethers } from "ethers";
import { useSnackbar } from "notistack"



const Footer = () => {

  const { enqueueSnackbar } = useSnackbar();
  const contractAddress = "0xe0655aE86d1ae7662A3E63C46F077ED4fE58A6da";

  const checkR = async () => {
    try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts",[]);
    const signer = provider.getSigner();
    const votingContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    const winnerinHex = await votingContract.winningbyName();
    const winnerinEng = ethers.utils.parseBytes32String(winnerinHex);

    console.log(winnerinEng);
    enqueueSnackbar( winnerinEng + " is currently Ahead", {variant: "success"});
  } catch (error) {
    console.log("Error Message: ", error.message);
  };
};

  return (
    <footer>
      <div className="flex items-center justify-center mb-5">
        <button className="text-white rounded-lg bg-blue-500 text-md items-center justify-center p-3 flex"
        onClick={ checkR }>
          {" "}
          Check Election Result
        </button>
      </div>
    </footer>
  );
};

export default Footer;
