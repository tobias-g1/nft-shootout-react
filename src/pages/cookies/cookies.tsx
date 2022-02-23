import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './cookies.scss'

function CookiesPageComponent(props: any) {

    const title: string = 'Cookies'

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <PageHeaderComponent header={title} />
        </div>
    );
}

export default CookiesPageComponent;




