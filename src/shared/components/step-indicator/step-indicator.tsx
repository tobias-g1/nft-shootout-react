import { Step } from "../../models/step.model";
import "./step-indicator.scss";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  steps: Step[];
};

function StepIndicatorComponent(props: Props) {
  return (
    <div className="step-indicator">
      {props.steps
        .sort((a, b) => a.order - b.order)
        .map((step, index) => {
          return (
            <div className="step-row">
              <span className={ step.status === 2 ? "complete" : ""}><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon></span>
              <h3>{step.name}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default StepIndicatorComponent;
