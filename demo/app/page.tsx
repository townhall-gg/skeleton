"use client";

import { useState, useEffect } from "react";
import { Skeleton, SkeletonElement, SkeletonOnly, ContentOnly } from "@townhall-gg/skeleton";
import Image from "next/image";

// Icons
function LoadingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 86 87" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M56.9097 27.5281L43.7907 0.0351563L30.6717 27.5281L0.470276 31.5093L22.5637 52.482L17.0172 82.4354L43.7907 67.9043L70.5641 82.4354L65.0176 52.482L87.111 31.5093L56.9097 27.5281Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Toggle button
function ToggleButton({
  loading,
  onClick,
}: {
  loading: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
        loading
          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
      }`}
    >
      {loading ? (
        <>
          <LoadingIcon className="w-4 h-4 animate-spin" />
          Loading
        </>
      ) : (
        <>
          <CheckIcon className="w-4 h-4" />
          Loaded
        </>
      )}
    </button>
  );
}

// Demo components
function UserCard({ loading }: { loading: boolean }) {
  return (
    <Skeleton loading={loading} animation="wave">
      <div className="demo-card">
        <div className="avatar" />
        <h3>Sarah Johnson</h3>
        <p>Senior Product Designer at Figma. Passionate about creating beautiful, accessible interfaces that delight users.</p>
        <span className="badge">Pro Member</span>
      </div>
    </Skeleton>
  );
}

function ProductCard({ loading }: { loading: boolean }) {
  return (
    <Skeleton loading={loading} animation="pulse">
      <div className="product-card">
        <div className="image" />
        <div className="content">
          <h4>Premium Wireless Headphones</h4>
          <p className="price">$299.00</p>
          <p className="description">High-fidelity audio with 40-hour battery life and active noise cancellation.</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </Skeleton>
  );
}

function CommentList({ loading }: { loading: boolean }) {
  const comments = [
    { author: "Alex Chen", time: "2 hours ago", text: "This is exactly what I was looking for! Great work." },
    { author: "Maria Garcia", time: "5 hours ago", text: "The API is so clean and intuitive. Love it!" },
    { author: "James Wilson", time: "1 day ago", text: "Finally a skeleton loader that actually works with real content." },
  ];

  return (
    <Skeleton loading={loading} animation="wave">
      <div className="flex flex-col gap-3">
        {comments.map((comment, i) => (
          <div key={i} className="comment-card">
            <div className="avatar" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="author">{comment.author}</span>
                <span className="time">{comment.time}</span>
              </div>
              <p className="text">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Skeleton>
  );
}

function FormDemo({ loading }: { loading: boolean }) {
  return (
    <Skeleton loading={loading} animation="pulse">
      <div className="demo-card">
        <h3 className="mb-4">Contact Form</h3>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-white/60 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-1">Message</label>
            <textarea
              placeholder="Your message..."
              rows={3}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 resize-none"
            />
          </div>
          <button className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </Skeleton>
  );
}

export default function DemoPage() {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [globalLoading, setGlobalLoading] = useState(true);

  // Auto-toggle demo
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalLoading((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="main-content" className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-white text-[#0a0a0a] px-8 h-16 rounded-b-3xl flex items-center gap-6">
        <a href="/" className="text-xl font-bold tracking-tight flex items-center gap-2" aria-label="Townhall Skeleton home">
          <Image
            src="https://cdn.townhall.gg/TownHall/da46fc5a-9428-4076-a741-5e7871b9ca8d/47d26eaf-1855-4dd8-bf7b-d1a04ee2cf61/c2989029-608b-4ea0-b209-c7d1e9117330.svg"
            alt="Townhall"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span>Townhall</span>
        </a>
        <nav className="flex items-center gap-5 mono text-sm uppercase" aria-label="Main navigation">
          <a
            href="https://github.com/townhall-gg/skeleton"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            GitHub
          </a>
          <a
            href="https://townhall.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Townhall
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center pt-36 pb-20 px-6" aria-labelledby="hero-title">
        <p className="mono font-medium text-base uppercase tracking-widest mb-4 text-white/50">
          Auto-Skeleton Loader
        </p>

        <h1
          id="hero-title"
          className="font-bold uppercase text-center text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6"
        >
          @townhall-gg/skeleton
        </h1>

        <p className="text-center text-lg text-white/70 max-w-2xl mb-10">
          Wrap your UI and it automatically becomes a skeleton while loading.
          No manual skeleton components needed!
        </p>

        {/* Install command */}
        <div className="flex h-12 bg-white rounded-md items-center overflow-hidden">
          <div className="px-4 h-full flex items-center border-r-2 border-[#0a0a0a]">
            <span className="mono text-[#0a0a0a] text-sm">pnpm</span>
          </div>
          <div className="px-6 mono text-[#0a0a0a] text-sm">add @townhall-gg/skeleton</div>
          <button
            className="h-full px-4 border-l-2 border-[#0a0a0a] text-[#0a0a0a] hover:bg-black/10 transition-colors"
            onClick={() => navigator.clipboard.writeText("pnpm add @townhall-gg/skeleton")}
            aria-label="Copy install command"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>
      </section>

      {/* Auto Demo Section */}
      <section className="py-16 bg-white/5" aria-labelledby="auto-demo-title">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="auto-demo-title" className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-3">
              Watch It Work
            </h2>
            <p className="mono text-lg text-white/60">Auto-toggles every 3 seconds</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <UserCard loading={globalLoading} />
            <ProductCard loading={globalLoading} />
            <div className="md:col-span-1">
              <Skeleton loading={globalLoading}>
                <div className="demo-card h-full">
                  <h3>Statistics</h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-3xl font-bold text-blue-400">2.4k</p>
                      <p className="text-sm text-white/60">Active Users</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">98%</p>
                      <p className="text-sm text-white/60">Satisfaction</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">150+</p>
                      <p className="text-sm text-white/60">Countries</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">24/7</p>
                      <p className="text-sm text-white/60">Support</p>
                    </div>
                  </div>
                </div>
              </Skeleton>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 px-6" aria-labelledby="interactive-title">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="interactive-title" className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-3">
              Interactive Demo
            </h2>
            <p className="mono text-lg text-white/60">Click the buttons to toggle loading state</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* User Card Demo */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">User Profile Card</h3>
                <ToggleButton loading={loading1} onClick={() => setLoading1(!loading1)} />
              </div>
              <UserCard loading={loading1} />
            </div>

            {/* Product Card Demo */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Product Card</h3>
                <ToggleButton loading={loading2} onClick={() => setLoading2(!loading2)} />
              </div>
              <ProductCard loading={loading2} />
            </div>

            {/* Comments Demo */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Comment List</h3>
                <ToggleButton loading={loading3} onClick={() => setLoading3(!loading3)} />
              </div>
              <CommentList loading={loading3} />
            </div>

            {/* Form Demo */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Form</h3>
                <ToggleButton loading={loading4} onClick={() => setLoading4(!loading4)} />
              </div>
              <FormDemo loading={loading4} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white text-[#0a0a0a]" aria-labelledby="features-title">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="features-title" className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12 text-center">
            Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Zero Configuration",
                description: "Just wrap your component with <Skeleton loading> and it works. No manual skeleton creation needed.",
              },
              {
                title: "Preserves Layout",
                description: "Your actual DOM structure is preserved. Text becomes gray bars of the same size, images become rectangles.",
              },
              {
                title: "Smooth Animations",
                description: "Choose between pulse or wave animations. Both respect prefers-reduced-motion for accessibility.",
              },
              {
                title: "Fully Customizable",
                description: "Override colors, timing, and border radius via props or CSS variables. Works in light and dark modes.",
              },
              {
                title: "Accessible",
                description: "Adds aria-busy and aria-live attributes. Disables pointer events during loading state.",
              },
              {
                title: "Tiny Bundle",
                description: "< 1KB JavaScript + CSS. No dependencies besides React. Tree-shakeable exports.",
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-black/10 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-black/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 px-6 bg-white/5" aria-labelledby="code-title">
        <div className="max-w-3xl mx-auto">
          <h2 id="code-title" className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 text-center">
            Quick Start
          </h2>

          <pre className="bg-white text-[#0a0a0a] rounded-xl p-8 overflow-x-auto mono text-sm leading-relaxed">
            <code>{`import { Skeleton } from "@townhall-gg/skeleton";
import "@townhall-gg/skeleton/styles.css";

function UserCard({ user, isLoading }) {
  return (
    <Skeleton loading={isLoading}>
      <div className="card">
        <img src={user?.avatar} alt="Avatar" />
        <h2>{user?.name || "Loading..."}</h2>
        <p>{user?.bio || "Bio placeholder"}</p>
        <button>Follow</button>
      </div>
    </Skeleton>
  );
}

// That's it! When loading={true}:
// - Text becomes gray pulsing bars
// - Images become gray rectangles
// - Buttons become skeleton shapes
// - Layout is preserved perfectly`}</code>
          </pre>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center" aria-labelledby="cta-title">
        <h2 id="cta-title" className="sr-only">Get Started</h2>
        <div className="mb-12">
          <p className="mono text-lg mb-8 text-white/70">
            Built by the team behind Townhall
          </p>
          <div className="flex flex-col items-center gap-6 text-2xl font-bold uppercase">
            <a
              href="https://github.com/townhall-gg/skeleton"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-blue-400 transition-colors"
            >
              <span>Leave that</span>
              <StarIcon className="w-10 h-10 text-blue-400" />
              <span>Star</span>
            </a>
            <a
              href="https://github.com/townhall-gg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-blue-400 transition-colors"
            >
              <span>Follow us on</span>
              <svg className="w-10 h-10" viewBox="0 0 48 49" fill="none">
                <path
                  d="M24 4.4C35.05 4.4 44 13.35 44 24.4C43.999 28.59 42.684 32.68 40.24 36.08C37.795 39.48 34.345 42.04 30.375 43.38C29.375 43.58 29 42.95 29 42.43C29 41.75 29.025 39.6 29.025 36.93C29.025 35.05 28.4 33.85 27.675 33.23C32.125 32.73 36.8 31.03 36.8 23.35C36.8 21.15 36.025 19.38 34.75 17.98C34.95 17.48 35.65 15.43 34.55 12.68C34.55 12.68 32.875 12.13 29.05 14.73C27.45 14.28 25.75 14.05 24.05 14.05C22.35 14.05 20.65 14.28 19.05 14.73C15.225 12.15 13.55 12.68 13.55 12.68C12.45 15.43 13.15 17.48 13.35 17.98C12.075 19.38 11.3 21.18 11.3 23.35C11.3 31 15.95 32.73 20.4 33.23C19.825 33.73 19.3 34.6 19.125 35.9C17.975 36.43 15.1 37.28 13.3 34.25C12.925 33.65 11.8 32.18 10.225 32.2C8.55 32.23 9.55 33.15 10.25 33.53C11.1 34 12.075 35.78 12.3 36.35C12.7 37.48 14 39.63 19.025 38.7C19.025 40.38 19.05 41.95 19.05 42.43C19.05 42.95 18.675 43.55 17.675 43.38C13.692 42.05 10.227 39.5 7.772 36.1C5.318 32.69 3.998 28.6 4 24.4C4 13.35 12.95 4.4 24 4.4Z"
                  fill="currentColor"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <p className="mono text-sm text-white/50">
          Made with ❤️ by{" "}
          <a href="https://townhall.gg" className="underline">
            Townhall
          </a>
        </p>
      </section>

      {/* Footer */}
      <div className="bg-blue-500 py-4 text-center">
        <p className="font-bold uppercase text-xl text-white">
          TOWNHALL SKELETON • AUTO SKELETON LOADER • ZERO CONFIG • ACCESSIBLE
        </p>
      </div>
    </main>
  );
}
