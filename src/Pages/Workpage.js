import { MDBContainer } from 'mdb-react-ui-kit';
import '../css/CaseStudy.scss'
import MainFront from '../materialComponents/pageFronts/MainFront';

const Workpage = () => {
  const workMainFrontContent = {
    id: 1,
    title: "Case-study",
    copy: "Our software keeps every element of your project together, in one place, while helping us produce and deliver your assets. You can order new projects, manage spend, produce instant adaptations, track your work, and get automated delivery—all from your homepage. It’s your favorite software you’ve never heard of.",
  }

  const caseStudies = [
    {
      id: 1,
      // image: placeholder,
      direction: "textLeft",
      title: "Simultaneous Global Streaming Launches",
      copy: "In Q4 2019 and Q1 2020, two major Hollywood studios launched their respective globally-competitive streaming services in dozens of international markets.", btnText: "Call to Action",
      // btnColor: "orange",
      // BtnOnclick: onClick,
      // type: "CTA",
    },
    {
      id: 2,
      // image: placeholder,
      direction: "textRight",
      title: "Multi Endpoint Delivery",
      copy: "We deliver everywhere whether it be to your Digital Asset Management system, your customer or your partners. Our automated delivery process will get your assets to where they need to go with automated file name formatting in just one click.",
      btnText: "Call to Action",
      // btnColor: "orange",
      // BtnOnclick: onClick,
      // type: "CTA",
    },
    {
    id: 3,
    // image: placeholder,
    direction: "textLeft",
    title: "Localization",
    copy: "As multi-lingual specialists, we can localize your assets to any language and in any size no matter the medium. With pre-programmed art safe zones in Pipeline we can easily verify that you’re artwork is pixel perfect.",
    btnText: "Call to Action",
    // btnColor: "orange",
    // BtnOnclick: onClick,
    // type: "CTA",
  },
  {
    id: 4,
    // image: placeholder,
    direction: "textRight",
    title: "Storage",
    copy: "Looking for that asset you thought you no longer needed, but do now? Don't panic. No asset is left behind and will still be stored in Pipeline.",
    btnText: "Call to Action",
    // btnColor: "orange",
    // BtnOnclick: onClick,
    // type: "CTA",
  },
  ];

  return (
    <>
    <MDBContainer  fluid>
    <MainFront
    content={workMainFrontContent}
    ></MainFront>
    </MDBContainer>
    <MDBContainer>
      <section className="Case-study">
        <h2>Simultaneous Global Streaming Launches</h2>
        <p>
          In Q4 2019 and Q1 2020, two major Hollywood studios launched their
          respective globally-competitive streaming services in dozens of
          international markets.
        </p>

        <h3>Challenge</h3>
        <p>
          Almost simultaneously, both studios asked The Sherlock Company to
          translate, localize and deliver all of their brand and title-specific
          marketing, social media and creative assets for their launches.{" "}
        </p>

        <h3>Sherlock Solution</h3>
        <p>
          The automation and data dashboard capabilities of Sherlock Pipeline
          prioritized decision-making to ensure laser-focus on delayed assets.{" "}
        </p>

        <h3>The result</h3>
        <p>
          Picture-perfect delivery of localized assets for all markets with no
          delayed launch dates. Sherlock continues to support the ongoing
          international expansion of both platforms.{" "}
        </p>
      </section>

      <section className="Case-study">
        <h2>Multi-Vendor Management for a Mega Catalog Project</h2>
        <p>
          Multiple global releases of movies and TV shows over decades across
          different business models usually results in a decentralized,
          incomplete and non-uniform library of localized marketing and creative
          assets.
        </p>

        <h3>Challenge</h3>
        <p>
          A major Hollywood studio decided to standardize the key-art of more
          than 2,500 titles across an entire region with 20 languages, many
          complex.{" "}
        </p>

        <h3>Sherlock Solution</h3>
        <p>
          The Sherlock Company was selected to oversee the work of four vendors,
          with Sherlock Pipeline used to centralize the process of receiving,
          revising, QCing and delivering localized assets.{" "}
        </p>

        <h3>The result</h3>
        <p>
          More than 300,000 localized assets delivered on-schedule, prompting
          the client to implement the same project in other regions.
        </p>
      </section>

      <section className="Case-study">
        <h2>Metadata Cleanup for Prestigious Acquired Library</h2>
        <p>
          A big name independent film catalog changed home entertainment
          distributors three times before being acquired by a major Hollywood
          studio.
        </p>

        <h3>Challenge</h3>
        <p>
          The Sherlock Company was asked to audit, restore and standardize the
          metadata for the portfolio’s top-performing titles, including the
          artwork, local title and ratings in 26 countries and 30 languages.
        </p>

        <h3>Sherlock Solution</h3>
        <p>
          The Sherlock Metadata Aggregator Tool and local-market sources were
          used to find official metadata and create localized artwork where gaps
          existed, normalizing the portfolio.
        </p>

        <h3>The result</h3>
        <p>
          Over 10,000 localized data points and territory-specific assets were
          delivered in less than 90 days, restoring the portfolio’s ability to
          generate revenue on transactional and streaming platforms worldwide.
        </p>
      </section>
    
     </MDBContainer>
    </>
  );
};

export default Workpage;
