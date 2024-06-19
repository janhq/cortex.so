import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Homepage">
      <main>
        <div className="container">
          <div className="text-center mt-20">
            <h1 className="text-6xl">Run LLMs Easily</h1>
            <p className="text-xl text-black/60 dark:text-white/60">
              OpenAI Compatible. Multi-engine. For Production
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
