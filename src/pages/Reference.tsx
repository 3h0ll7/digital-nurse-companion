import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Droplet, Activity } from "lucide-react";
import { labValues } from "@/data/labValues";
import { assessmentScales } from "@/data/assessmentScales";
import { useNavigate } from "react-router-dom";
import { usePreferences } from "@/contexts/PreferencesContext";
import AppLayout from "@/components/layout/AppLayout";

const Reference = () => {
  const [labSearch, setLabSearch] = useState("");
  const navigate = useNavigate();
  const { t } = usePreferences();

  const filteredLabs = labValues.filter(
    (lab) =>
      lab.test.toLowerCase().includes(labSearch.toLowerCase()) ||
      lab.category.toLowerCase().includes(labSearch.toLowerCase())
  );

  const labCategories = Array.from(new Set(labValues.map((l) => l.category)));

  return (
    <AppLayout title={t.referenceTitle} subtitle="Clinical library">
      <Tabs defaultValue="labs" className="">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="labs">{t.labValuesTab}</TabsTrigger>
          <TabsTrigger value="scales">{t.scalesTab}</TabsTrigger>
        </TabsList>

        <TabsContent value="labs" className="space-y-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              type="text"
              placeholder={t.labSearchPlaceholder}
              value={labSearch}
              onChange={(e) => setLabSearch(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>

          <div className="bg-card rounded-xl shadow-card overflow-hidden">
            <div className="flex items-center gap-2 p-4 bg-medical-blue-light border-b">
              <Droplet className="text-primary" size={20} />
              <h2 className="font-bold text-card-foreground">{t.normalLabValues}</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-3 text-sm font-semibold text-secondary-foreground">
                      TEST
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-secondary-foreground">
                      NORMAL RANGE
                    </th>
                    <th className="text-left p-3 text-sm font-semibold text-secondary-foreground">
                      UNIT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLabs.map((lab, index) => (
                    <tr
                      key={index}
                      className="border-b border-border last:border-b-0 hover:bg-accent/50 transition-colors"
                    >
                      <td className="p-3">
                        <div className="font-medium text-card-foreground text-sm">
                          {lab.test}
                        </div>
                        {(lab.criticalLow || lab.criticalHigh) && (
                          <div className="text-xs text-medical-red mt-1">
                            Critical: {lab.criticalLow && `<<${lab.criticalLow}`}
                            {lab.criticalLow && lab.criticalHigh && " / "}
                            {lab.criticalHigh && `>>${lab.criticalHigh}`}
                          </div>
                        )}
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">
                        {lab.normalRange}
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">
                        {lab.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="scales" className="space-y-3">
          <div className="flex items-center gap-2 mb-4 p-4 bg-card rounded-xl">
            <Activity className="text-primary" size={20} />
            <h2 className="font-bold text-card-foreground">{t.assessmentScales}</h2>
          </div>

          {assessmentScales.map((scale) => (
            <div
              key={scale.id}
              onClick={() => navigate(`/scale/${scale.id}`)}
              className="bg-card p-4 rounded-xl shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
            >
              <h3 className="font-bold text-card-foreground mb-1">
                {scale.name}
              </h3>
              <p className="text-sm text-muted-foreground">{scale.description}</p>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default Reference;
