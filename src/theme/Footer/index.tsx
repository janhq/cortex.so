import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import CardContainer from "@site/src/components/CardContainer";

import type { Props as LinkProps } from "@theme/Footer/LinkItem";

import Link from "@docusaurus/Link";

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();

  console.log(footer);
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  return (
    // <FooterLayout
    //   style={style}
    //   links={links && links.length > 0 && <FooterLinks links={links} />}
    //   logo={logo && <FooterLogo logo={logo} />}
    //   copyright={copyright && <FooterCopyright copyright={copyright} />}
    // />
    <footer>
      <CardContainer>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-[480px]">
            <h1 className="text-2xl mb-1">The Anatomy of a Machine</h1>
            <p className="mb-0">
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
          <div>
            <p>lorem</p>
          </div>
        </div>
      </CardContainer>
    </footer>
  );
}

export default React.memo(Footer);
