import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useThemeConfig } from "@docusaurus/theme-common";
import FooterCopyright from "@theme/Footer/Copyright";
import CardContainer from "@site/src/components/CardContainer";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }
  const { copyright, links, logo } = footer;

  return (
    <footer>
      <CardContainer>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-[480px]">
            <ThemedImage
              alt={logo.alt}
              width={logo.width}
              className="mb-4"
              sources={{
                light: useBaseUrl(logo.src),
                dark: useBaseUrl(logo.srcDark),
              }}
            />
            <h1 className="text-2xl mb-1">The Anatomy of a Machine</h1>
            <p className="mb-0 text-black/60 dark:text-white/60">
              Subscribe to our newsletter on LLM research and building Cortex.
            </p>
          </div>
          {links.length > 0 && (
            <div className="w-full grid lg:grid-cols-3 xl:grid-cols-5 grid-cols-2 gap-14">
              {links.map((fooLink: { title: string; items: [] }, i: number) => {
                return (
                  <div
                    key={i}
                    className="lg:text-right w-full gap-2 flex flex-col"
                  >
                    <h1 className="text-lg mb-1">{fooLink.title}</h1>
                    {fooLink.items.map(
                      (
                        x: { label: string; href: string; to: string },
                        i: number
                      ) => {
                        return (
                          <div key={i} className="lg:text-right w-full">
                            <Link
                              className="my-1 text-black/60 dark:text-white/60"
                              to={x.to}
                              href={x.href}
                            >
                              {x.label}
                            </Link>
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="mt-16 flex items-center w-full justify-between">
          <FooterCopyright copyright={copyright} />
          <ThemedImage
            alt={logo.alt}
            width={100}
            className="mb-4"
            sources={{
              light: useBaseUrl("/img/logos/homebrew.svg"),
              dark: useBaseUrl("/img/logos/homebrew.svg"),
            }}
          />
        </div>
      </CardContainer>
    </footer>
  );
}

export default React.memo(Footer);
