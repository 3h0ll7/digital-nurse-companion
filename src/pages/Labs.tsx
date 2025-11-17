import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import AppLayout from "@/components/layout/AppLayout";
import { labValues } from "@/data/labValues";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Labs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(labValues.map((lab) => lab.category)))], []);

  const filteredLabs = labValues.filter((lab) => {
    const matchesSearch =
      lab.test.toLowerCase().includes(search.toLowerCase()) ||
      lab.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || lab.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout title="Lab Panels" subtitle="Critical values & ranges">
      <section className="space-y-3">
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search tests or categories"
          className="bg-card"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={cat === category ? "default" : "outline"}
              onClick={() => setCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        {filteredLabs.map((lab) => (
          <div key={lab.test} className="rounded-2xl border bg-card p-4 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{lab.category}</p>
                <p className="text-lg font-semibold text-card-foreground">{lab.test}</p>
              </div>
              <Badge variant="secondary">{lab.unit}</Badge>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              <p>Normal: {lab.normalRange}</p>
              {(lab.criticalLow || lab.criticalHigh) && (
                <p className="text-medical-red">
                  Critical: {lab.criticalLow && `≤${lab.criticalLow}`} {lab.criticalHigh && ` / ≥${lab.criticalHigh}`}
                </p>
              )}
            </div>
          </div>
        ))}
        {filteredLabs.length === 0 && (
          <div className="rounded-xl border border-dashed p-6 text-center text-muted-foreground">
            No lab tests found.
          </div>
        )}
      </section>
    </AppLayout>
  );
};

export default Labs;
