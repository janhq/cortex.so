import Layout from "@theme/Layout";
import markdownit from "markdown-it";

const MyModelPage = (props) => {
  const { route } = props;
  const { customData: data } = route;

  const md = markdownit();
  const result = md.render(data.readmeContent);

  return (
    <Layout>
      <div className="container mt-20 models-detail">
        <div dangerouslySetInnerHTML={{ __html: result }} />
      </div>
    </Layout>
  );
};

export default MyModelPage;
