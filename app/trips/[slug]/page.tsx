import { trips } from "@/lib/trips";
import TripPageClient from "./TripPageClient";

export async function generateStaticParams() {
  const staticSlugs = ["gokarna-murudeshwar-trip", "chikmagalur-trip", "coorg-trip", "nandi-hills-sunrise-trek"];
  const allSlugs = [...trips.map(trip => trip.slug), ...staticSlugs];
  const uniqueSlugs = [...new Set(allSlugs)];
  return uniqueSlugs.map((slug) => ({ slug }));
}

interface TripPageProps {
  params: {
    slug: string;
  };
}

export default function TripPage({ params }: TripPageProps) {
  const trip = trips.find((t) => t.slug === params.slug);
  return <TripPageClient trip={trip} />;
}
