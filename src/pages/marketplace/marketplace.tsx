import PageHeaderComponent from "../../shared/components/page-header/page-header";
import "./marketplace.scss";
import DocumentMeta from "react-document-meta";
import { Content } from "antd/lib/layout/layout";
import { NavLink, Outlet } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

function MarketplacePageComponent(props: any) {
    const title: string = "Marketplace";
    const { account } = useWeb3React()
    const description: string =
        "Buy and sell players, stadiums and youth scouts using our marketplace with the lowest fees.";
    const meta: any = {
        title,
        description: "TBA",
        meta: {},
    };

    return (
        <div
            className="my-players page-wrapper"
            style={{ backgroundImage: "url(/assets/img/background.jpeg)" }}
        >
            <DocumentMeta {...meta} />
            <PageHeaderComponent header={title} description={description} />
            <Content>
                {
                        <div className="tab-row">
                            <div className="selector">
                                <NavLink to="players" className={(navData) => (navData.isActive ? 'selected' : '')}>
                                    <div className="option">
                                        <span>Players</span>
                                    </div>
                                </NavLink>
                                <NavLink to="stadiums" className={(navData) => (navData.isActive ? 'selected' : '')}>
                                    <div className="option">
                                        <span>Stadiums</span>
                                    </div>
                                </NavLink>
                                <NavLink to="youth-scouts" className={(navData) => (navData.isActive ? 'selected' : '')}>
                                    <div className="option">
                                        <span>Youth Scouts</span>
                                    </div>
                                </NavLink>
                            </div>
                        </div> 
                }
                <Outlet />
            </Content>
        </div>
    );
}

export default MarketplacePageComponent;
