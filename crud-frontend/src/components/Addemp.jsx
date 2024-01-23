import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Addemp() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <Link>
        <Button onClick={() => setOpenModal(true)}>+ Add Employee</Button>
      </Link>
    </>
  );
}
