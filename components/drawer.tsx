'use client'

import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { usePathname } from 'next/navigation'
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { Links } from '@/utils/data';
import Link from 'next/link';

export default function DrawerContent() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()

  const showDrawer = () => {
    setOpen(true);
  };


  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
         <button  className='lg:hidden' onClick={showDrawer}>
          <DehazeOutlinedIcon/>
        </button>
      </Space>
      <Drawer
        title="options"
        placement="left"
        width={500}
        onClose={onClose}
        open={open}
      >
         {Links.map((value , index)=>(
            <p  key={index}>
                <Link href={`/${value}`} onClick={onClose} className={`${!pathname.includes(value) &&"text-primaary"} text-lg font-medium`}>{value}</Link>
            </p>
        ))}
      </Drawer>
    </>
  );
};

