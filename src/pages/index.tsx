import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Homepage">
      <main>
        <div className="container">
          <p className="text-red-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, quia nemo deleniti eos placeat, voluptatibus, facilis
            voluptatum ipsam rem cum sapiente praesentium iusto laudantium!
            Illum quia atque quam impedit sequi.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
