"use client";

import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { usePathname } from "next/navigation";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import Link from "next/link";
import { Links } from "@/utils/navbarData";

export default function DrawerContent() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <button className="lg:hidden" onClick={showDrawer}>
          <DehazeOutlinedIcon />
        </button>
      </Space>
      <Drawer
        title="Navigations"
        placement="left"
        width={500}
        onClose={onClose}
        open={open}
      >
        {Links.map((value, index) => (
          <p key={index}>
            <Link
              href={`${value.link}`}
              onClick={onClose}
              className={`${
                !pathname.endsWith(value.link) && "text-primaary"
              } text-lg font-medium`}
            >
              {value.name}
            </Link>
          </p>
        ))}
      </Drawer>
    </>
  );
}
