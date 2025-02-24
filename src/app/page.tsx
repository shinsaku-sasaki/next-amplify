import Link from "next/link";

export default function Home() {
  return (
    <div >
      <Link href="/ssg">
        SSG
      </Link>
      <hr />
      <Link href="/ssr">
        SSR
      </Link>
      <hr />
      <Link href="/csr">
        CSR
      </Link>
    </div>
  );
}
