import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './play.scss'

function PlayPageComponent(props: any) {

    const title: string = 'Play'

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <PageHeaderComponent header={title} />
        </div>
    );
}

export default PlayPageComponent;




