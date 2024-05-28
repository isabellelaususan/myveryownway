import PropTypes from 'prop-types';
import {useState} from 'react';
import TabContent from './TabContent';
import {category} from './constants';
const Tabs = ({tabs}: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex">
      <div className="text-xl flex flex-col gap-3 w-1/4">
        {category.map((tab, index) => (
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
        <TabContent productList={category[activeTab]?.content} />
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default Tabs;
