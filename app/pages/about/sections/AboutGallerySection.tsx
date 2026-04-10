"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { image: "/images/png/about-gallery-1.jpg", alt: "Dental clinic equipment detail" },
  { image: "/images/png/about-gallery-2.jpg", alt: "Modern dental treatment room" },
  { image: "/images/png/about-gallery-1.jpg", alt: "Dental clinic equipment detail" },
];

export function AboutGallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const firstRealIndex = 1;
  const lastRealIndex = slides.length;
  const [activeLoopIndex, setActiveLoopIndex] = useState(firstRealIndex);

  const centerSlide = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    const child = children[index];
    if (!child) return;

    const left = child.offsetLeft - (track.clientWidth - child.offsetWidth) / 2;
    track.scrollTo({ left, behavior });
  }, []);

  const getCenteredIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return firstRealIndex;

    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    const children = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - viewportCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    return closest;
  }, [firstRealIndex]);

  useEffect(() => {
    centerSlide(firstRealIndex, "auto");
  }, [centerSlide, firstRealIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const centered = getCenteredIndex();
      setActiveLoopIndex(centered);

      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }

      scrollEndTimerRef.current = setTimeout(() => {
        const latestCentered = getCenteredIndex();
        if (latestCentered === 0) {
          centerSlide(lastRealIndex, "auto");
          setActiveLoopIndex(lastRealIndex);
        } else if (latestCentered === loopSlides.length - 1) {
          centerSlide(firstRealIndex, "auto");
          setActiveLoopIndex(firstRealIndex);
        }
      }, 120);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      track.removeEventListener("scroll", handleScroll);
      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, [centerSlide, firstRealIndex, getCenteredIndex, lastRealIndex, loopSlides.length]);

  return (
    <section className="bg-[var(--background-weak-50)] py-[40px] lg:py-0">
      <div className="mx-auto w-full">
        <div
          ref={trackRef}
          className="scrollbar-hide flex h-[352px] snap-x snap-mandatory items-center gap-[16px] overflow-x-auto scroll-smooth px-[16px] pb-[8px] sm:h-[492px] sm:gap-[24px] lg:h-[672px] lg:px-[24px]"
        >
          {loopSlides.map((slide, index) => {
            const isActive = index === activeLoopIndex;
            return (
              <article
                key={`${slide.image}-${index}-${slide.alt}`}
                className={`relative h-[320px] w-[86vw] max-w-[920px] snap-center shrink-0 overflow-hidden rounded-[16px] bg-[var(--background-white-0)] transition-transform duration-500 ease-out sm:h-[460px] lg:h-[620px] ${
                  isActive
                    ? "scale-100"
                    : "scale-[0.94]"
                }`}
              >
                <Image
                  alt={slide.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 86vw, 920px"
                  src={slide.image}
                />
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 rounded-[16px] border-[10px] border-[var(--background-soft-200)] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
