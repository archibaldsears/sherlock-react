import "../css/HomeStrengths.scss";
import CardItems from "../components/CardItems";

const HomeStrengths = ({ homeImg1, homeImg2, homeImg3 }) => {
  const onClick = () => {
    console.log("clicked from here!");
  };

  const cardText = [
    {
      id: 1,
      image: homeImg1,
      title: "Project Management",
      copy: "From business insights to project tracking to translation management, every project provides a massive amount of data that’s a critical part of getting what you need built quickly. Our focus on managing your data means we’re constantly improving, while providing you with customized, actionable insights on-demand.",
      btnText: "Call to Action",
      btnColor: "orange",
      BtnOnclick: onClick,
      type: "CTA",
    },
    {
      id: 2,
      image: homeImg2,
      title: "Data Management",
      copy: "Brief creation. Proof of concepts. Quote and budget approval. Design and localization management. Fast, simplified delivery. Your dedicated team works with you to build a workflow based on your needs, and can take a lot of tasks off your plate. We even help manage other vendors.",
      btnText: "Call to Action",
      btnColor: "orange",
      BtnOnclick: onClick,
      type: "CTA",
    },
    {
      id: 3,
      image: homeImg1,
      title: "Global Support",
      copy: "Your work is global, and so is our team. We’re all over the world and are proud to offer round-the-clock support from our dedicated teams with seamless handover. So you can launch a project from Tokyo and get it delivered from London. No turbulence or delays.",
      btnText: "Call to Action",
      btnColor: "orange",
      BtnOnclick: onClick,
      type: "CTA",
    },
  ];

  return (
    <div
      className="Full-container"
      style={{ backgroundColor: "white", position: "relative", zIndex: "2" }}
    >
      <div className="Main-container paddingSH">
        <h1 className="Second-header">
          With 10+ years in business and over 5 million assets delivered, we’ve
          gotten pretty good at a few things. r/w
        </h1>

        <section className="Section-two paddingSH">
          {cardText.map((card) => (
            <CardItems key={card.id} card={card} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomeStrengths;
