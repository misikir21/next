import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Welome to the world of nextjs</h1>
      <Link href="/user">user</Link>
    </main>
  );
}
