import TokenCard from '../TokenCard';

export default function TokenCardExample() {
  return (
    <div className="p-4 bg-background">
      <TokenCard 
        name="Habitat Asset Token"
        symbol="HAT"
        description="Fractional ownership in property and infrastructure. HAT tokens represent your stake in the community's real estate assets."
        variant="primary"
      />
    </div>
  );
}