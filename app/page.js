import Image from "next/image";
import styles from "./page.module.css";
import StickerDisplay from "@/shared/components/StickerDisplay";
import StickerGallery from "@/shared/components/StickerGallery";

export default function Home() {
  return (
    <div>
      Welcome to my app!!
      <StickerDisplay />
      <StickerGallery />
    </div>
  );
}
