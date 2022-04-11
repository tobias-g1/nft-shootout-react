import PageHeaderComponent from "../../shared/components/page-header/page-header";
import "./marketplace.scss";
import DocumentMeta from "react-document-meta";
import { Content } from "antd/lib/layout/layout";
import { NavLink, Outlet } from "react-router-dom";

function MarketplacePageComponent(props: any) {
    const title: string = "Marketplace";
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
            style={{ backgroundImage: "url(/assets/img/background.png)" }}
        >
            <DocumentMeta {...meta} />
            <PageHeaderComponent header={title} description={description} />
            <Content>
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
                                <span>Unlisted</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <Outlet />
            </Content>
        </div>
    );
}

export default MarketplacePageComponent;
