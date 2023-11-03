import React from "react";
import contractABI from "../contractABI";
import { ethers } from "ethers";
import { useState } from "react";
import { useSnackbar } from "notistack";


const Vote = () => {

  const { enqueueSnackbar } = useSnackbar();
  const contractAddress = "0xe0655aE86d1ae7662A3E63C46F077ED4fE58A6da";


  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(inputValue);
    console.log(inputValue);
  };

  const votingTime_ = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      let receipt;
      const votingContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const voterInfo = await votingContract.voters(address);
      const hasVoted = voterInfo.voteD;
      console.log(voterInfo);

      if (hasVoted) {
        alert("Already Voted");
      } else {
        // continue with voting
        alert(" Voting.... ")
      }

      //proceed with voting
      console.log("Value before votingTime call:", value);
      const transaction = await votingContract.votingTime(value, { gasLimit: 300000 });
     

      receipt = await wait(transaction);

      console.log(" Yor vote is done ");
      enqueueSnackbar("Arigato, Your vote has been placed", { variant: "success" });
    }catch (error) {
      enqueueSnackbar(error.message, { variant: "error"});
      console.log("Failed, reason: ", error.message);
    }
  };
  return (
    <section className=" mx-auto  border-[#33353F] bottom-0 left-0 right-0 z-10 bg-[#0e1c2559] ">
      <div class="vote-options gap-5 px-3 ">
        <label for="proposal" className="text-sm">
          Choose a Proposal
        </label>
        <select
          id="proposal"
          name="proposal"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="text-black bg-transparent border text-sm p-3 rounded-lg"
        >
          <option value="0">Operational Expenses</option>
          <option value="1">Research Projects</option>
          <option value="2">GameFi</option>
          <option value="3">Crypto Education</option>
          <option value="4">Hackathon Proposal</option>
          <option value="5">Governance Token</option>
        </select>
        <button className="text-white rounded-xl bg-blue-500 text-md items-center justify-center px-5 py-2 flex"
        onClick={ votingTime_ }>
          Vote
        </button>
      </div>
    </section>
  );
};

export default Vote;
