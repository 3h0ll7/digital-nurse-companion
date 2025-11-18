import { useMemo, useState } from "react";
import { GitBranch, Search } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mindMaps } from "@/data/mindMaps";

const MindMaps = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categoryOptions = useMemo(() => {
    const counts = mindMaps.reduce<Record<string, number>>((acc, map) => {
      acc[map.category] = (acc[map.category] ?? 0) + 1;
      return acc;
    }, {});

    return [
      { label: "All", value: "All", count: mindMaps.length },
      ...Object.keys(counts)
        .sort()
        .map((cat) => ({ label: cat, value: cat, count: counts[cat] })),
    ];
  }, []);

  const filteredMindMaps = mindMaps.filter((topic) => {
    const matchesCategory = category === "All" || topic.category === category;
    const normalizedQuery = query.toLowerCase().trim();

    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return (
      topic.title.toLowerCase().includes(normalizedQuery) ||
      topic.centralConcept.toLowerCase().includes(normalizedQuery) ||
      topic.branches.some(
        (branch) =>
          branch.title.toLowerCase().includes(normalizedQuery) ||
          branch.details.some((detail) => detail.toLowerCase().includes(normalizedQuery)),
      )
    );
  });

  return (
    <AppLayout
      title="Mind Map Library"
      subtitle="50 priority nursing topics organized for rapid review"
      actions={
        <Badge variant="secondary" className="text-xs">
          <GitBranch size={14} className="mr-1" /> {filteredMindMaps.length} topics
        </Badge>
      }
    >
      <section className="space-y-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by condition, focus, or branch detail"
            className="pl-10"
            aria-label="Search mind maps"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categoryOptions.map((option) => (
            <Button
              key={option.value}
              size="sm"
              variant={category === option.value ? "default" : "outline"}
              onClick={() => setCategory(option.value)}
              className="whitespace-nowrap"
            >
              {option.label}
              <span className="ml-2 rounded-full bg-background/60 px-2 text-xs text-foreground/80">
                {option.count}
              </span>
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        {filteredMindMaps.map((topic) => (
          <Card key={topic.id} className="p-4 space-y-3 shadow-card">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{topic.category}</p>
                <h2 className="text-xl font-semibold text-card-foreground">{topic.title}</h2>
                <p className="text-sm text-muted-foreground">{topic.centralConcept}</p>
              </div>
              <Badge variant="outline" className="self-start sm:self-auto">
                {topic.clinicalPearl}
              </Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {topic.branches.map((branch) => (
                <div key={branch.title} className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <p className="text-sm font-semibold text-card-foreground">{branch.title}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                    {branch.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        ))}
        {filteredMindMaps.length === 0 && (
          <Card className="p-6 text-center text-muted-foreground">
            No mind maps match that search. Try a different keyword or reset the filters.
          </Card>
        )}
      </section>
    </AppLayout>
  );
};

export default MindMaps;
