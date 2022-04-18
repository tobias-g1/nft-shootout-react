import { Step } from '../../models/step.model';
import './step-indicator.scss'

type Props = {
    steps: Step[];
}

function StepIndicatorComponent(props: Props) {

    return (
        <div className="step-indicator">
            {       props.steps.sort((a,b) => a.order - b.order).map((step, index) => {
            return <div><span>{step.status}</span>{step.name}</div>
          })}
        </div>
    );
}

export default StepIndicatorComponent;
