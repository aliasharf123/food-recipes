"use client"

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';


export default function Login() {
    const [opened, { open, close }] = useDisclosure(false);

    return ( 
    <Modal opened={true} onClose={close} title="Authentication">
        login in
    </Modal> 
    );
}
