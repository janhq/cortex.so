import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroSection from "@site/src/containers/Homepage/HeroSection";
import GettingStartedSection from "@site/src/containers/Homepage/GettingStartedSection";
import UniversalSection from "@site/src/containers/Homepage/UniversalSection";
import ModelRegistry from "@site/src/containers/Homepage/ModelRegistry";
import OAIReplacement from "@site/src/containers/Homepage/OAIReplacement";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Homepage">
      <main className="my-20 overflow-hidden">
        <HeroSection />
        <GettingStartedSection />
        <UniversalSection />
        <ModelRegistry />
        <OAIReplacement />
      </main>
    </Layout>
  );
};

export default Home;
