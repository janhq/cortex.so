import { HoveredLink, Menu, MenuItem, ProductItem } from "../NavbarMegaMenu";
import { useState } from "react";

const ProductsMenu = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Products">
        <div className="flex flex-col space-y-3 text-sm min-w-52">
          <HoveredLink href="/docs">
            <div className="py-1">
              <h4 className="mb-1">Cortex.cpp</h4>
              <p className="mb-0 text-neutral-600 dark:text-neutral-400">
                Local AI Engine
              </p>
            </div>
          </HoveredLink>
          <HoveredLink href="/docs">
            <div className="py-1">
              <h4 className="mb-1">Cortex Platform</h4>
              <p className="mb-0 text-neutral-600 dark:text-neutral-400">
                Self-hosted AI Platform
              </p>
            </div>
          </HoveredLink>
          <HoveredLink href="/docs">
            <div className="py-1">
              <h4 className="mb-1">Cortex Desktop</h4>
              <p className="mb-0 text-neutral-600 dark:text-neutral-400">
                Easy-to-use Desktop app
              </p>
            </div>
          </HoveredLink>
          <HoveredLink href="/docs">
            <div className="py-1">
              <h4 className="mb-1">Cortex Server</h4>
              <p className="mb-0 text-neutral-600 dark:text-neutral-400">
                Run Cortex in Production
              </p>
            </div>
          </HoveredLink>
        </div>
      </MenuItem>
    </Menu>
  );
};

export default ProductsMenu;
