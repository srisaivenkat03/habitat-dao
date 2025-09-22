import StatCard from '../StatCard';

export default function StatCardExample() {
  return (
    <div className="p-4 bg-background">
      <StatCard number="580K" label="Americans experiencing homelessness" />
    </div>
  );
}