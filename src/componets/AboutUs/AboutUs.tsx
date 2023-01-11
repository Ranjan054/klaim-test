import { Spin } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface AboutProps {
    success?: boolean;
    data?: {
        info: string;
    }
};


const AboutUs: React.FC<AboutProps> = () => {

    const [data, setData] = useState({ info: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://run.mocky.io/v3/e7a9fd1a-34ab-4154-8209-f87a7cd5d482")
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
        <div className='about-us'>
            {
                loading ? <Spin /> : <h2>
                    {data?.info}
                </h2>
            }
        </div>
    )
}

export default AboutUs;