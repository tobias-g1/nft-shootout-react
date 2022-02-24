import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './privacy.scss'

function PrivacyPageComponent(props: any) {

    const title: string = 'Privacy Policy'

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <PageHeaderComponent header={title} />
        </div>
    );
}

export default PrivacyPageComponent;




