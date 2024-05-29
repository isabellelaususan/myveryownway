import {useState} from 'react';
import TabContent from './TabContent';

interface Tab {
  title: string;
  content: Product[];
}

export type TabsType = {
  tabs: Tab[];
};

const Tabs = ({tabs}: TabsType) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex">
      <div className="text-xl flex flex-col gap-3 w-1/4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`hover:bg-fullGreen rounded-full px-4 py-1 w-fit cursor-pointer ${
              activeTab === index ? 'bg-fullGreen' : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab?.title}
          </button>
        ))}
      </div>
      <div>
        <TabContent productList={tabs[activeTab]?.content} />
      </div>
    </div>
  );
};

export default Tabs;
