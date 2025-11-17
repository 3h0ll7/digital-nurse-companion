export type SupportedLanguage = "en" | "ar";

interface Translation {
  proceduresTitle: string;
  searchProcedures: string;
  allLabel: string;
  noProcedures: string;
  quickViewTitle: string;
  quickViewDescription: string;
  viewFullProcedure: string;
  navProcedures: string;
  navCalculators: string;
  navAssistant: string;
  navReference: string;
  indications: string;
  contraindications: string;
  equipment: string;
  steps: string;
  complications: string;
  documentation: string;
  backToProcedures: string;
  referenceTitle: string;
  labValuesTab: string;
  scalesTab: string;
  labSearchPlaceholder: string;
  normalLabValues: string;
  assessmentScales: string;
  settingsTitle: string;
  settingsDescription: string;
  languageLabel: string;
  themeLabel: string;
  lightTheme: string;
  darkTheme: string;
  close: string;
}

export const translations: Record<SupportedLanguage, Translation> = {
  en: {
    proceduresTitle: "Nursing Procedures",
    searchProcedures: "Search procedures...",
    allLabel: "All",
    noProcedures: "No procedures found",
    quickViewTitle: "Procedure overview",
    quickViewDescription: "Review the summary below or open the full checklist for step-by-step guidance.",
    viewFullProcedure: "Open full procedure",
    navProcedures: "Procedures",
    navCalculators: "Calculators",
    navAssistant: "AI Assistant",
    navReference: "Reference",
    indications: "Indications",
    contraindications: "Contraindications",
    equipment: "Equipment Needed",
    steps: "Procedure Steps",
    complications: "Potential Complications",
    documentation: "Documentation",
    backToProcedures: "Back to Procedures",
    referenceTitle: "Quick Reference",
    labValuesTab: "Lab Values",
    scalesTab: "Assessment Scales",
    labSearchPlaceholder: "Search lab values...",
    normalLabValues: "Normal Lab Values",
    assessmentScales: "Assessment Scales",
    settingsTitle: "Preferences",
    settingsDescription: "Choose a language and color theme that matches your environment.",
    languageLabel: "Language",
    themeLabel: "Theme",
    lightTheme: "Light",
    darkTheme: "Dark",
    close: "Close",
  },
  ar: {
    proceduresTitle: "إجراءات التمريض",
    searchProcedures: "ابحث عن الإجراءات...",
    allLabel: "الكل",
    noProcedures: "لا توجد إجراءات",
    quickViewTitle: "نظرة عامة على الإجراء",
    quickViewDescription: "اطلع على الملخص أدناه أو افتح الدليل الكامل للخطوات التفصيلية.",
    viewFullProcedure: "عرض الإجراء الكامل",
    navProcedures: "الإجراءات",
    navCalculators: "الحاسبات",
    navAssistant: "المساعد الذكي",
    navReference: "المرجع",
    indications: "الدواعي",
    contraindications: "موانع الاستخدام",
    equipment: "الأدوات اللازمة",
    steps: "خطوات الإجراء",
    complications: "المضاعفات المحتملة",
    documentation: "التوثيق",
    backToProcedures: "العودة للإجراءات",
    referenceTitle: "المرجع السريع",
    labValuesTab: "تحاليل المختبر",
    scalesTab: "المقاييس",
    labSearchPlaceholder: "ابحث في التحاليل...",
    normalLabValues: "القيم الطبيعية",
    assessmentScales: "مقاييس التقييم",
    settingsTitle: "التفضيلات",
    settingsDescription: "اختر اللغة والوضع اللوني المناسب لبيئة عملك.",
    languageLabel: "اللغة",
    themeLabel: "الوضع",
    lightTheme: "فاتح",
    darkTheme: "داكن",
    close: "إغلاق",
  },
};

export const languages: { value: SupportedLanguage; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
];
