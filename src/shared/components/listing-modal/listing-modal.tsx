import "./listing-modal.scss";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Alert, Form, Input, Modal, Button } from "antd";

function ListingForSaleModal(props: any, ref: any) {
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

  return (
    <>
      <Modal
        visible={isListingModalVisible}
        title="List for Sale"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>List your NFT for sale in our marketplace. Upon listing of this NFT, this
          NFT will be removed from your wallet and put on sale at the price
          entered above. You cancel this listing at anytime.</p>

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
      </Modal>
    </>
  );
}

export default forwardRef(ListingForSaleModal);
