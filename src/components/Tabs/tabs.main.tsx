"use client";

import { motion } from "framer-motion";

interface TabItemProps {
  title: string;
  isActive: boolean;
  setActiveTab: () => void;
  id?: string;
}

const TabItem = ({ title, isActive, setActiveTab, id }: TabItemProps) => {
  return (
    <button
      className={`px-5 py-2 text-sm font-medium transition-all relative ${
        isActive ? "text-white" : "text-white/60 hover:text-white"
      }`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
      onClick={() => setActiveTab()}
    >
      {isActive && (
        <motion.span
          layoutId={`bubble-tab-${id || ""}`}
          className="absolute inset-0 z-0 bg-white rounded-full overflow-hidden border border-white/10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
        />
      )}
      <span
        className={`relative z-10 whitespace-nowrap ${
          isActive ? "text-black" : ""
        }`}
      >
        {title}
      </span>
    </button>
  );
};

interface TabsProps {
  tabs: { label: string; value: string }[];
  activeTab: string;
  setActiveTab: (index: string) => void;
  id?: string;
}

const Tabs = ({ tabs, activeTab, setActiveTab, id }: TabsProps) => {
  return (
    <div className="flex gap-2">
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          title={tab.label}
          isActive={activeTab === tab.value}
          setActiveTab={() => setActiveTab(tab.value)}
          id={id}
        />
      ))}
    </div>
  );
};

export default Tabs;
