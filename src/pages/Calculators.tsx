import { Droplet, Activity, Scale, Calculator as CalcIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";

const calculators = [
  {
    id: "dosage",
    name: "Dosage Calculation",
    description: "Calculate medication dosage based on weight",
    icon: Droplet,
  },
  {
    id: "iv-drip",
    name: "IV Drip Rate",
    description: "Calculate mL/hour and drops/min",
    icon: Activity,
  },
  {
    id: "bmi",
    name: "BMI Calculator",
    description: "Calculate Body Mass Index",
    icon: Scale,
  },
  {
    id: "creatinine",
    name: "Creatinine Clearance",
    description: "Calculate renal function",
    icon: CalcIcon,
  },
];

const Calculators = () => {
  const navigate = useNavigate();

  return (
    <AppLayout title="Clinical Calculators" subtitle="Smart dosing & drip tools">
      <div className="space-y-3">
        {calculators.map((calc) => {
          const Icon = calc.icon;
          return (
            <div
              key={calc.id}
              onClick={() => navigate(`/calculator/${calc.id}`)}
              className="bg-card p-5 rounded-xl shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="bg-medical-blue-light p-3 rounded-full">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-card-foreground mb-1">
                    {calc.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {calc.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AppLayout>
  );
};

export default Calculators;
