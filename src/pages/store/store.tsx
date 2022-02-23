import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './store.scss'

function StorePageComponent(props: any) {

    const title: string = 'Store'

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <PageHeaderComponent header={title} />
        </div>
    );
}

export default StorePageComponent;




