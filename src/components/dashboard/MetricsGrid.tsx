
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Metric {
  title: string;
  value: string;
  change: number;
  changeText: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MetricsGridProps {
  metrics: Metric[];
}

const MetricsGrid = ({ metrics }: MetricsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">{metric.title}</p>
              <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
            </div>
            <div className="p-2 rounded-full bg-gray-50">
              <metric.icon className="h-6 w-6 text-outgage-purple" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div
              className={cn(
                "inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium",
                metric.change > 0
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              )}
            >
              {metric.change > 0 ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {Math.abs(metric.change)}%
            </div>
            <span className="text-xs text-gray-500 ml-1.5">{metric.changeText}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;
