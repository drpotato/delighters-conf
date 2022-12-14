import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import { Speaker } from "../components/Speaker";
import { InfoBlock } from "../components/InfoBlock";
import { Heading } from "../components/Heading";
import { FAQ } from "../components/FAQ";
import { CTA } from "../components/CTA";
import morgsAvatar from "../public/morgs.png";
import officeImage from "../public/dovetail-office.png";
import peopleImage from "../public/dovetail-people.png";
import styles from "../styles/Home.module.css";
import { useRsvp } from "../hooks/useRsvp";
import { useConsumeUrlParam } from "../hooks/useConsumeUrlParam";
import { useLocalStorage } from "../hooks/useLocalStorage";

const speakers = [
  {
    id: "1",
    firstName: "Chris",
    lastName: "Morgan",
    talk: "Building multiplayer apps with CRDTs; fast",
    role: "Tech Lead @ Dovetail",
    avatarUrl: morgsAvatar.src,
    description:
      "Currently slated for the 25th August, the mini-conf will start at 12 pm with first talks kicking off at 1 pm. We’ll then alternate between talks, break times, and a bit of fun - before breaking out for drinks and a discussion at the end of the event",
  },
  {
    id: "2",
    firstName: "Chris",
    lastName: "Morgan",
    talk: "Building multiplayer apps with CRDTs; fast",
    role: "Tech Lead @ Dovetail",
    avatarUrl: morgsAvatar.src,
    description:
      "Currently slated for the 25th August, the mini-conf will start at 12 pm with first talks kicking off at 1 pm. We’ll then alternate between talks, break times, and a bit of fun - before breaking out for drinks and a discussion at the end of the event",
  },
  {
    id: "3",
    firstName: "Chris",
    lastName: "Morgan",
    talk: "Building multiplayer apps with CRDTs; fast",
    role: "Tech Lead @ Dovetail",
    avatarUrl: morgsAvatar.src,
    description:
      "Currently slated for the 25th August, the mini-conf will start at 12 pm with first talks kicking off at 1 pm. We’ll then alternate between talks, break times, and a bit of fun - before breaking out for drinks and a discussion at the end of the event",
  },
];

const faqs = [
  {
    title: "When is Delighters Conference?",
    description:
      "The Delighters Conference is happening on Thursday, August 25 from 12:00-5:00pm",
  },
  {
    title: "When is Delighters Conference?",
    description:
      "The Delighters Conference is happening on Thursday, August 25 from 12:00-5:00pm",
  },
  {
    title: "When is Delighters Conference?",
    description:
      "The Delighters Conference is happening on Thursday, August 25 from 12:00-5:00pm",
  },
  {
    title: "When is Delighters Conference?",
    description:
      "The Delighters Conference is happening on Thursday, August 25 from 12:00-5:00pm",
  },
  {
    title: "When is Delighters Conference?",
    description:
      "The Delighters Conference is happening on Thursday, August 25 from 12:00-5:00pm",
  },
  {
    title: "When is Delighters Conference?",
    description:
      "The Delighters Conference is happening on Thursday, August 25 from 12:00-5:00pm",
  },
];

const Home: NextPage = () => {
  const [expandedSpeakerId, setExpandedSpeakerId] = useState<string>();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number>();

  const { asPath: slug } = useRouter();
  const [headerElement, setHeaderElement] = useState<HTMLElement | null>(null);
  const aboutSentinelRef = useRef<HTMLDivElement | null>(null);
  const speakersSentinelRef = useRef<HTMLDivElement | null>(null);
  const ctaSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    switch (slug) {
      case "/about":
        aboutSentinelRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "/speakers":
        speakersSentinelRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "/sign-up":
        ctaSentinelRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }, [slug]);

  const [rsvpId, setRsvpId] = useLocalStorage("rsvp_id");
  const [projectId, setProjectId] = useLocalStorage("project_id");
  const [accessToken, setAccessToken] = useLocalStorage("access_token");
  useConsumeUrlParam("rsvp_id", setRsvpId);
  useConsumeUrlParam("project_id", setProjectId);
  useConsumeUrlParam("access_token", setAccessToken);

  const { loading, rsvp } = useRsvp(projectId, accessToken, rsvpId);
  useEffect(() => {
    console.log({ loading, rsvp });
  }, [loading, rsvp]);

  return (
    <div
      style={{
        // @ts-ignore
        "--section-height": `calc(100vh - ${
          headerElement?.clientHeight ?? 0
        }px)`,
      }}
      className={styles.container}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Delighters Conf</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/ano2bsu.css" />
      </Head>

      <Header ref={setHeaderElement} />
      <Hero />
      <div style={{ height: "64px" }} />
      <div
        style={{
          position: "relative",
          bottom: headerElement?.clientHeight,
        }}
        ref={aboutSentinelRef}
      />
      <InfoBlock
        image={officeImage.src}
        heading="Let’s talk about delighters!"
        paragraphs={[
          "Delighters Conference is gathering the best product-engineering minds across Sydney for one afternoon to share thoughts on a range of technology and craft-based topics. If you’re interested in learning how different teams are leveraging the latest technologies to build products their customers love - this conference is for you.",
        ]}
      />
      <div style={{ height: "64px" }} />
      <div
        style={{
          position: "relative",
          bottom: headerElement?.clientHeight,
        }}
        ref={speakersSentinelRef}
      />
      <Heading text="Who’s talking about what?" theme="dark" />
      {speakers.map((speaker, index) => (
        <Speaker
          key={speaker.id}
          firstName={speaker.firstName}
          lastName={speaker.lastName}
          imageSrc={speaker.avatarUrl}
          talkTitle={speaker.talk}
          speakerTitle={speaker.role}
          description={speaker.description}
          theme={index % 2 === 0 ? "dark" : "light"}
          expanded={expandedSpeakerId === speaker.id}
          onExpanded={() =>
            setExpandedSpeakerId(
              expandedSpeakerId !== speaker.id ? speaker.id : undefined
            )
          }
        />
      ))}
      <InfoBlock
        image={peopleImage.src}
        heading="Who’s Dovetail?"
        paragraphs={[
          "G’day 👋 We’re a rapidly growing product-led Australian company. We help teams worldwide understand their customers, make better decisions, and do great work.",
          "Dovetail exists to increase the quality of every thing. We empower 45,000+ people, from agencies to universities to Fortune 100 companies, to make sense of their customer research in one collaborative and powerful research platform.",
        ]}
      />
      <div style={{ height: "64px" }} />
      <Heading text="FAQs" theme="light" />
      {faqs.map(({ title, description }, index) => (
        <FAQ
          key={index}
          title={title}
          description={description}
          expanded={index == expandedFaqIndex}
          onExpand={() =>
            setExpandedFaqIndex((current) =>
              index === current ? undefined : index
            )
          }
          theme={"light"}
        />
      ))}
      <div style={{ height: "64px" }} />
      <div
        style={{
          position: "relative",
          bottom: headerElement?.clientHeight,
        }}
        ref={ctaSentinelRef}
      />
      <CTA />
    </div>
  );
};

export default Home;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: null } },
      { params: { slug: ["about"] } },
      { params: { slug: ["speakers"] } },
      { params: { slug: ["sign-up"] } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
