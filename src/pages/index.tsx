import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        {/* <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, quia nemo deleniti eos placeat, voluptatibus, facilis
            voluptatum ipsam rem cum sapiente praesentium iusto laudantium!
            Illum quia atque quam impedit sequi.
          </p>
        </div> */}
      </main>
    </Layout>
  );
};

export default Home;
