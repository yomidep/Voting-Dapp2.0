import React from "react";

const Vote = () => {
  return (
    <section className="fixed mx-auto  border-[#33353F] bottom-0 left-0 right-0 z-10 bg-[#0e1c2559] ">
      <div class="vote-options gap-5 px-3 ">
        <label for="proposal" className="text-sm">
          Choose a Proposal
        </label>
        <select
          id="proposal"
          name="proposal"
          onchange="{handleInput()}"
          className="text-white bg-transparent border text-sm p-3 rounded-lg"
        >
          <option value="OperationalExp">Operational Expenses</option>
          <option value="ResearchPro">Research Projects</option>
          <option value="Gamefi">GameFi</option>
          <option value="CryptoEdu">Crypto Education</option>
          <option value="Hackathon">Hackathon Proposal</option>
          <option value="GovernanceTok">Governance Token</option>
        </select>
        <button className="text-white rounded-xl bg-blue-500 text-md items-center justify-center px-5 py-2 flex">
          Vote
        </button>
      </div>
    </section>
  );
};

export default Vote;
