import { FriendshipLetter } from "@/components/FriendshipLetter";
import { FriendshipPhotos } from "@/components/FriendshipPhotos";
import { FriendshipTimeline } from "@/components/FriendshipTimeline";
import { Meeting } from "@/components/Meeting";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <FriendshipPhotos />
      <FriendshipLetter />
      <FriendshipTimeline />
      <Meeting />
    </main>
  );
}