import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroSection from "@site/src/containers/Homepage/HeroSection";
import GettingStartedSection from "@site/src/containers/Homepage/GettingStartedSection";
import OAIReplacement from "@site/src/containers/Homepage/OAIReplacement";
import DownloadSection from "@site/src/containers/Homepage/Download";
import About from "@site/src/containers/Homepage/About";
import BrowserOnly from "@docusaurus/BrowserOnly";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Homepage">
      <BrowserOnly>
        {() => (
          <>
            <main className="my-20 overflow-hidden">
              <HeroSection />
              <GettingStartedSection />
              <OAIReplacement />
              <DownloadSection />
              <About />
            </main>
          </>
        )}
      </BrowserOnly>
    </Layout>
  );
};

export default Home;
