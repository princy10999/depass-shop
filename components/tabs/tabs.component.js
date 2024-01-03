import {useMemo} from "react";

const Credential = (props) => {
    const {tabs, setTabs} = props;
    const renderTabContent = useMemo(() => {
        return tabs.filter((tab) => tab.isActive)[0].component
    }, [tabs]);

    return (
        <div>
            <div className="flex  gap-4 bg-slate-900    text-gray-500 px-6 py-4 relative">
                {tabs.map((tab, index) => <div
                    key={index}
                    className={`text-sm md:text-lg flex justify-center  items-center gap-5 px-5 ${tab.isActive ? 'border-b border-white' : ''} `}>
                    <div
                        className={`py-2 ${tab.isActive ? 'fill-white' : ''}`}>
                        {tab.icon}

                    </div>
                    <button className={`py-2 ${tab.isActive ? 'text-white' : ''}`} onClick={() => {
                        setTabs(tabs.map((_tab) => {
                            if (_tab.name === tab.name) {
                                _tab.isActive = true;
                            } else {
                                _tab.isActive = false;
                            }
                            return _tab;
                        }))
                    }}>{tab.label}
                    </button>
                </div>)}

            </div>
            <div className="bg-slate-900 py-2 ">
                <div className="bg-slate-900 px-4">
                    {renderTabContent}
                </div>
            </div>
        </div>

    )
}

export default Credential;