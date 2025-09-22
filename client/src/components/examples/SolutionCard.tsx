import SolutionCard from '../SolutionCard';
import { Home } from 'lucide-react';

export default function SolutionCardExample() {
  return (
    <div className="p-4 bg-background">
      <SolutionCard 
        icon={<Home />}
        title="Universal Design Housing"
        description="Accessible, inclusive communities designed for all abilities and income levels"
      />
    </div>
  );
}