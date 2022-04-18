import "./listing-modal.scss";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Form, Input, Modal, Button, Image } from "antd";
import { Item } from "../../models/item";
import fallback from "../../../assets/img/fallback.png"
import StepIndicatorComponent from "../step-indicator/step-indicator";
import { Step } from "../../models/step.model";

type Props = {
  item: Item;
};

function ListForSaleModal(props: Props, ref: any) {

  const [isListingModalVisible, setListingModalVisible] = useState(false);
  const [form] = Form.useForm();

  useImperativeHandle(
    ref,
    () => ({
      toggleModal() {
        setListingModalVisible(!isListingModalVisible);
      },
    }),
    []
  );

  const handleOk = () => {
    setListingModalVisible(!isListingModalVisible);
  };

  const handleCancel = () => {
    setListingModalVisible(!isListingModalVisible);
  };

  const getTitle = () => {
   
    return `List ${props.item.tokenId} for Sale`
  }

  const steps: Step[] = [
    {
      order: 1,
      name: 'Approve NFT',
      status: 0
    },
    {
      order: 2,
      name: 'Set Price',
      status: 0
    }
  ]



  return (
    <>
      <Modal
        visible={isListingModalVisible}
        title='a'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
       <div className="modal-wrapper">
         <Image src={!props.item.imageUrl ? '' : props.item.imageUrl } fallback={fallback}></Image>
       <div>
         <p>List your NFT for sale in our marketplace. Upon listing of this NFT, this
          NFT will be removed from your wallet and put on sale at the price
          entered above.</p>
          <StepIndicatorComponent steps={steps}></StepIndicatorComponent>
       </div>
       </div>
       <div className="approve">
         <Button type="primary">Approve</Button>
       </div>
       <div className="set-price">
       <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item
            name="price"
            label="Set Price"
            rules={[
              { required: true },
              { type: "number", min: 1 },
            ]}
          >
            <Input placeholder="Enter List Price" />
          </Form.Item>
          <Form.Item >
            <Button className="footer-submit"
              key="submit"
              htmlType="submit"
              type="primary"
              onClick={handleOk}
            >
              List for Sale
            </Button>
          </Form.Item>
        </Form>

      </div>
      </Modal>
    </>
  );
}

export default forwardRef(ListForSaleModal);
