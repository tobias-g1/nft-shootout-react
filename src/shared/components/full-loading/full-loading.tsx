import { Spin } from 'antd';
import './full-loading.scss'

function FullLoadingComponent(props: any) {
    return (
        <div className="full-loading">
              <Spin size="default"  tip="Loading..." />
        </div>
    );
}

export default FullLoadingComponent;
