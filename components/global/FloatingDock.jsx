import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { floatingLinks } from "@/utils/links";

export function FloatingDockElement() {
  return (
    <div className='flex items-center justify-center h-[35rem] w-full '>
      <FloatingDock
        // only for demo, remove for production
        mobileClassName='translate-y-36'
        desktopClassName='translate-y-40'
        items={floatingLinks}
      />
    </div>
  );
}
