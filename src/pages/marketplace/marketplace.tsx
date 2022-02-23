import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './marketplace.scss'

function MarketplacePageComponent(props: any) {

    const title: string = 'Marketplace'

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <PageHeaderComponent header={title} />
        </div>
    );
}

export default MarketplacePageComponent;




