import "../css/HomeStrengths.scss";
import CardItems from "../components/CardItems";
import { motion } from "framer-motion";
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
      <div className="container ">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className="Second-header"
        >
          We’re a whole lot more than a translation company. (Although we’re
          very good at that, too.)
        </motion.h1>

        <section className="Section-two paddingSH">
          {cardText.map((card) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
               }}
            >
              <CardItems key={card.id} card={card} />
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomeStrengths;
