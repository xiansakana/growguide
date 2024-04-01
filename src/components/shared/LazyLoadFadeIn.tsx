import React, { useState, useEffect, useRef } from "react";

interface LazyLoadFadeInProps {
  children: React.ReactNode;
  className?: string;
}

const LazyLoadFadeIn: React.FC<LazyLoadFadeInProps> = ({
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          rootMargin: "0px",
          threshold: 0.1, // Trigger when 10% of the element is in the viewport
        }
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef); // Use the copied variable here
      };
    }
  }, []);

  // Conditional classes based on visibility
  const visibilityClasses = isVisible ? "opacity-100" : "opacity-0";

  return (
    <div
      ref={ref}
      className={`${visibilityClasses} transition-opacity duration-1000 ${className}`}
      style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
    >
      {children}
    </div>
  );
};

export default LazyLoadFadeIn;
