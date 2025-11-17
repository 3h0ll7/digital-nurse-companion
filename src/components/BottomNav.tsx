import { BookOpen, Calculator, MessageSquare, Info } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePreferences } from "@/contexts/PreferencesContext";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = usePreferences();

  const navItems = [
    { path: "/procedures", icon: BookOpen, label: t.navProcedures },
    { path: "/calculators", icon: Calculator, label: t.navCalculators },
    { path: "/ai-assistant", icon: MessageSquare, label: t.navAssistant },
    { path: "/reference", icon: Info, label: t.navReference },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path);
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
