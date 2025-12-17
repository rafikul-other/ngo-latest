'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import "../../app/globals.css";


function RouteTransition() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      <div 
        className={`
          fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br 
          from-slate-50 via-blue-50 to-indigo-100 transition-all duration-300
          ${isTransitioning ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="loader"></div>
      </div>

    </>
  );
}

export default RouteTransition;