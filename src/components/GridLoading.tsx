import { Skeleton } from "@chakra-ui/react";

const GridLoading = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Skeleton
        isLoaded={false}
        height="360px"
        startColor="#525252"
        endColor="#737373"
        speed={0.6}
      />
      <Skeleton
        isLoaded={false}
        height="360px"
        startColor="#525252"
        endColor="#737373"
        speed={0.6}
      />
      <Skeleton
        isLoaded={false}
        height="360px"
        startColor="#525252"
        endColor="#737373"
        speed={0.6}
      />
    </div>
  );
};

export default GridLoading;
