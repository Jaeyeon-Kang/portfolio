import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { fetchPokemonData } from "../api/pokemon";
import { Pokemon } from "../../../types/pokemon";
import PokemonTable from "../../../components/PokemonTable";

const InfiniteScroll: React.FC = () => {
  const { ref, inView } = useInView();

  const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["items"],
      queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
        fetchPokemonData<Pokemon>({
          url: "https://pokeapi.co/api/v2/pokemon/",
          pageParam, // getNextPageParam에서 반환된 값을 다음 호출에 전달
          limit: pageParam === 0 ? 30 : 10,
          dataMapper: (item: any) => ({
            id: item.id,
            name: item.name,
            height: item.height,
            weight: item.weight,
            baseExperience: item.base_experience,
          }),
        }),
      getNextPageParam: (lastPage) => lastPage.nextPage, // 각 페이지 요청이 끝난 후, 다음에 요청할 페이지의 pageParam 값을 반환
      initialPageParam: 0,
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>{(error as Error)?.message}</div>;
  }

  const allPokemon = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Pokémon Table</h1>

      <PokemonTable pokemon={allPokemon} />

      <div ref={ref} className="mt-4 text-center">
        {isFetchingNextPage && "Fetching more data..."}
      </div>
    </div>
  );
};

export default InfiniteScroll;
