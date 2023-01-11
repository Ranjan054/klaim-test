import React, { useState, useEffect } from 'react';
import { Button, Space, Typography, Modal, Spin } from 'antd';
import axios from 'axios';

interface ProfileProps {
  success?: boolean;
  data?: {
    fullname: string;
    email: string;
    avatar: string;
  }
};

const Profile: React.FC<ProfileProps> = () => {

  const { Title } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({ fullname: "", email: "", avatar: "" });
  const [loading, setLoading] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get("https://run.mocky.io/v3/d1a4ff51-c431-4820-9258-3c5ae9308514")
      .then((res) => {
        if (res.data.success) {
          setData(res.data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        alert(err)
      })
  }, [])

  return (
    <>
      {
        loading ? <Spin /> : <div className='profile'>
          <Space>
            <img className='profile-img' src={data?.avatar} alt="owl" />
            <div>
              <Title>Welcome, {data?.fullname}</Title>
              <Button type="primary" onClick={showModal}>
                Update
              </Button>
            </div>
          </Space>
          <p className='subtitle'>[here is place for concatenated result from long running cell]</p>
        </div>
      }
      <Modal title="Requesting the quote" open={isModalOpen} footer={[<Button onClick={handleCancel}>Cancel</Button>]}>
        <p>step 1: Requsting...</p>
        <p>step 2: Requsting...</p>
      </Modal>
    </>
  )
}

export default Profile;