import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex  flex-col gap-3 items-center justify-center h-screen text-3xl bg-red-200 font-semibold">
      <h1>
        Resume Builder
      </h1>
      <Button asChild>
        <Link href={'/resume-builder'}>
        Go To Resume Builder
        </Link>
      </Button>
      <Button variant={'default'}>
        Test
      </Button>
    </div>
    </>
  );
}
