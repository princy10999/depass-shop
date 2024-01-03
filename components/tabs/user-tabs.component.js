import {useMemo} from "react";

const UserTabComponent = (props) => {
    const {tabs, setTabs} = props;
    const renderTabContent = useMemo(() => {
        return tabs.filter((tab) => tab.isActive)[0].component
    }, [tabs]);

    return (
        <div>
            <div className="  ">
                <div className="px-4">
                    {renderTabContent}
                </div>
            </div>
            <div className="flex  w-full items-center justify-center py-12  text-gray-500 ">
                {tabs.map((tab, index) => <div
                    key={index}
                    className={`text-sm  justify-center items-center px-4 ${tab.isActive ? '' : ''} `}>
                    <button className={`py-2 ${tab.isActive ? 'text-white   rounded-md font-semibold' : ''}`} onClick={() => {
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

        </div>

    )
}

export default UserTabComponent;