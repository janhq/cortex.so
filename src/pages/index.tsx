import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Homepage">
      <main>
        <div className="container mt-8">
          <p>Cortex is under construction</p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
