import PageHeaderComponent from '../../shared/components/page-header/page-header';
import './my-players.scss'

function MyPlayersPageComponent(props: any) {

    const title: string = 'My Players'

    return (
        <div className="my-players page-wrapper" style={{ backgroundImage: "url(/assets/img/background.png)" }}>
            <PageHeaderComponent header={title} />
        </div>
    );
    
}

export default MyPlayersPageComponent;




