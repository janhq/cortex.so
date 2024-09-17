import Layout from "@theme/Layout";
import markdownit from "markdown-it";
import hljs from "highlight.js";
import linkAttributes from "markdown-it-link-attributes";

const ChangelogPage = (props: { route: any }) => {
  const { route } = props;
  const { customData: data } = route;

  console.log(data.body);

  const md = markdownit({
    linkify: true,
    highlight: function (str: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre><code class="hljs">' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            "</code></pre>"
          );
        } catch (__) {}
      }

      return (
        '<pre class="bg-neutral-900 dark:bg-neutral-800 text-neutral-300"><code class="hljs">' +
        md.utils.escapeHtml(str) +
        "</code></pre>"
      );
    },
  });

  // Use the markdown-it-link-attributes plugin to ensure links are rendered properly
  md.use(linkAttributes, {
    pattern: /^https?:\/\//,
    attrs: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  });

  const result = md.render(data.body);

  console.log(result);

  return (
    <Layout>
      <div className="container mt-20 models-detail">
        <h1 className="mb-8">v{data.name}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: result,
          }}
        />
      </div>
    </Layout>
  );
};

export default ChangelogPage;
