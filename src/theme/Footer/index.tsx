import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterCopyright from "@theme/Footer/Copyright";
import CardContainer from "@site/src/components/CardContainer";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

const Social = [
  {
    name: "Github",
    href: "https://github.com/janhq/cortex",
  },
  {
    name: "Discord",
    href: "https://discord.gg/FTk2MvZwJH",
  },
  {
    name: "Twitter",
    href: "https://discord.gg/FTk2MvZwJH",
  },
];

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  console.log(logo);

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
                light: logo.src,
                dark: logo.srcDark,
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
          {/* <div>
            <p>lorem</p>
          </div> */}
        </div>
      </CardContainer>
    </footer>
  );
}

export default React.memo(Footer);
