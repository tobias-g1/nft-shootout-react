import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './terms.scss'

function TermsPageComponent(props: any) {

    const title: string = 'Terms & Conditions'

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <PageHeaderComponent header={title} />
        </div>
    );
}

export default TermsPageComponent;




