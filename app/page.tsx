import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  flex-col gap-3 items-center justify-center h-screen text-3xl font-semibold">
      <h1>
        Resume Builder
      </h1>
      <Button variant={'default'}>
        <Link href={'/resume-builder'}>
          Go To Resume Builder
        </Link>
      </Button>
      <Button variant={'outline'}>
        Test
      </Button>
    </div>
  );
}
