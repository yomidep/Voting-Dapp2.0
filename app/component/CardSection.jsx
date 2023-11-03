/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import img1 from "../../public/images/img1.jpeg";
import img2 from "../../public/images/img2.jpeg";
import gamefi from "../../public/images/gamefi.jpeg";
import web3 from "../../public/images/web3.jpeg";
import hackathon from "../../public/images/hackathon.jpeg";
import ethereum from "../../public/images/etheruem.jpeg";

const CardSection = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 ">
        {/* check how to write lg > max-w-fewpx */}
        {/* card details */}
        <div className="bg-[#0e1c25] p-4 rounded-2xl justify-center flex-col flex items-center">
          <span className="text-white text-xl">Operational Expenses</span>
          <Image
            className="w-64 items-center justify-center rounded-3xl px-3 py-7"
            src={img1}
            alt="Operational Expenses"
          />
          <p className="text-gray-300 text-xs">
            {" "}
            Operational Expenses play a critical role in the day-to-day
            functioning of our organization. Voting on Operational Expenses
            proposals enables members to make decisions regarding the allocation
            of resources for essential activities such as infrastructure,
            staffing, and logistical needs. These decisions directly impact our
            operational efficiency and sustainability.
          </p>
        </div>
        <div className="bg-[#0e1c25] p-4 rounded-2xl justify-center flex-col flex items-center">
          <span className="text-white text-xl">Research Projects</span>
          <Image
            className="w-64 items-center justify-center rounded-3xl px-3 py-7"
            src={img2}
            alt="Operational Projects"
          />
          <p className="text-gray-300 text-xs">
            With Research Projects, we aim to foster innovation and explore new
            frontiers. Members can vote on proposals that focus on
            groundbreaking research initiatives, seeking to push the boundaries
            of knowledge in our industry. By supporting Research Projects, we
            invest in the future and nurture a culture of discovery within our
            organization..
          </p>
        </div>
        <div className="bg-[#0e1c25] p-4 rounded-2xl justify-center flex-col flex items-center">
          <span className="text-white text-xl"> GameFi</span>
          <Image
            className="w-64 items-center justify-center rounded-3xl px-3 py-7"
            src={gamefi}
            alt="Proposal"
          />
          <p className="text-gray-300 text-xs">
            The objective of this voting proposal is to implement a robust
            governance mechanism that enables GameFi participants to vote on
            critical decisions, such as game features, tokenomics, partnerships,
            and development roadmap. By providing a platform for the community
            to voice their opinions and influence the direction of GameFi
            projects, we can foster a sense of ownership, inclusivity, and
            accountability within the ecosystem.
          </p>
        </div>
        <div className="bg-[#0e1c25] p-4 rounded-2xl justify-center flex-col flex items-center">
          <span className="text-white text-xl">Crypto Education</span>
          <Image
            className="w-64 items-center justify-center rounded-3xl px-3 py-7"
            src={web3}
            alt="Crypto Education"
          />
          <p className="text-gray-300 text-xs">
            The Crypto Education proposal aims to enhance our members' knowledge
            and understanding of cryptocurrency and blockchain technology. By
            voting for this proposal, you contribute to the growth of our
            community's expertise and pave the way for widespread adoption and
            innovation in the crypto space.
          </p>
        </div>
        <div className="bg-[#0e1c25] p-4 rounded-2xl justify-center flex-col flex items-center">
          <span className="text-white text-xl"> Hackathon Proposal</span>
          <Image
            className="w-64 items-center justify-center rounded-3xl px-3 py-7"
            src={hackathon}
            alt="Hackathon"
          />
          <p className="text-gray-300 text-xs">
            The Hackathon proposal aims to organize an exciting and
            collaborative event where our community members can showcase their
            skills and creativity. By voting for this proposal, you encourage
            innovation, collaboration, and the development of cutting-edge
            solutions within our organization.
          </p>
        </div>
        <div className="bg-[#0e1c25] p-4 rounded-2xl justify-center flex-col flex items-center">
          <span className="text-white text-xl">Governance Token</span>
          <Image
            className="w-64 items-center justify-center rounded-3xl px-3 py-7"
            src={ethereum}
            alt="GovernanCE tOKEN"
          />
          <p className="text-gray-300 text-xs">
            Governance Token aims to provide a decentralized governance platform
            for our community. By voting for this proposal, you actively
            participate in shaping the future of our organization. You can
            influence decisions, vote on important matters, and contribute to
            the overall governance structure of our community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
