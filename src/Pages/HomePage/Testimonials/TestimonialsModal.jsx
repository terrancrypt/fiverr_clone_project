import { Modal } from "antd";
import React, { useRef, useState } from "react";

const TestimonialsModal = ({ item }) => {
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
    <>
      <div onClick={showModal} className="testimonials__item-img w-2/5 relative">
        <img
          className="rounded w-full h-full cursor-pointer"
          src={item.urlImage}
          alt={item.title}
        />
      </div>

      {/* Modal Video */}
      <Modal
        centered
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width="900px"
        closeIcon=" "
      >
        <video ref={refVideo} autoPlay controls className="w-full">
          <source src={item.urlVideo} />
        </video>
      </Modal>
    </>
  );
};

export default TestimonialsModal;
