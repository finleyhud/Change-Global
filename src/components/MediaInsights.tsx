import React, { useState } from 'react';
import { MEDIA_ITEMS } from '../data/mockData';
import { Play } from 'lucide-react';

export const MediaInsights: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="w-8 h-[2px] bg-[#EA580C] mb-6" />
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 mb-3">
            04 · Market Commentary
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-[-0.025em] text-neutral-950 leading-[1.1]">
            Recent Media &amp; Insights
          </h2>
        </div>

        {/* 3 Video Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {MEDIA_ITEMS.map((item) => {
            const isPlaying = playingId === item.id;

            return (
              <div key={item.id} className="flex flex-col">
                {/* Video Frame (16:9) */}
                <div className="relative aspect-16/9 w-full bg-neutral-950 overflow-hidden mb-6 border border-neutral-200/80">
                  {isPlaying ? (
                    <div className="w-full h-full relative">
                      {item.type === 'mp4' ? (
                        <video
                          src={item.videoSrc}
                          poster={item.poster}
                          controls
                          autoPlay
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support HTML5 video playback.
                        </video>
                      ) : (
                        <iframe
                          src={item.videoSrc}
                          title={item.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayingId(item.id)}
                      aria-label={`Play video: ${item.title}`}
                      className="group relative w-full h-full block text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
                    >
                      <img
                        src={item.poster}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      {/* Subtle dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />

                      {/* Centered Clean Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/95 group-hover:bg-[#F7A600] text-neutral-950 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-200">
                          <Play className="w-5 h-5 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-[19px] font-bold tracking-[-0.015em] text-neutral-950 leading-[1.3] mb-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] text-neutral-700 font-normal leading-[1.6]">
                  {item.description}{' '}
                  {item.hashtagLink && (
                    <a
                      href={item.hashtagLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 text-neutral-800 hover:text-[#EA580C] transition-colors"
                    >
                      {item.hashtagLink.text}
                    </a>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
