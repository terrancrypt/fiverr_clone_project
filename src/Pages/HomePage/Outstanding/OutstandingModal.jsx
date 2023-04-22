import React, { useRef, useState } from "react";
import { Modal } from "antd";

const OutstandingModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const refVideo = useRef();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    refVideo.current.pause();
  };

  return (
    <div className="w-full">
      <div className="outstanding__video-wrapper relative" onClick={showModal}>
        <img
          className="w-full h-full cursor-pointer"
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
          alt=""
        />
      </div>
      <Modal
        centered
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width="900px"
        closeIcon=" "
      >
        <video ref={refVideo} autoPlay controls className="w-full">
          <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" />
        </video>
      </Modal>
    </div>
  );
};

export default OutstandingModal;
