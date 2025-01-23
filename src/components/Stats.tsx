

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
      {stats.map((stat, index) => (
        <div key={index}>
          <h3 className="text-3xl font-bold">{stat.value}</h3>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}