import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-white/70 mb-8">Page not found</p>
      <Link href="/" className="btn btn-primary">
        Go Home
      </Link>
    </main>
  );
}
