import PageHeaderComponent from "../../shared/components/page-header/page-header";
import "./store.scss";
import DocumentMeta from "react-document-meta";
import { Content } from "antd/lib/layout/layout";
import { NavLink, Outlet } from "react-router-dom";

function StorePageComponent(props: any) {
    const title: string = "Store";
    const description: string =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse";
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

export default StorePageComponent;
