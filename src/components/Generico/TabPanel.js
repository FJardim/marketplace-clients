import { useTabs } from "../contexts/TabsContexts";

const TabPanel = ({ children, className, value }) => {
    const { value: contextValue } = useTabs();

    if (value !== contextValue) return null;

    return <div className={className}>{children}</div>;
};

export default TabPanel;