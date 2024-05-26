'use client';

import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function New() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  return (
    <main className="main-inner">
      {popularGames ? <CardsListSection id="popular" title="Популярные" data={popularGames} /> : <Preloader />}
    </main>
  );
}