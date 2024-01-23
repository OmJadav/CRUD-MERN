import React, { useState } from "react";
import "../App.css";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import AddEmpModal from "./AddEmpModal";
export default function TableMain() {
  const [openModal, setOpenModal] = useState(true);

  const tableHeads = ["Employee Name", "Role", "Phone", "Joining Date"];

  const employees = [
    { name: "Om Jadav", role: "SDE-3", phone: 1231231230, doj: "12-02-2023" },
    {
      name: "Sachin Chavda",
      role: "SDE-3",
      phone: 1231231123,
      doj: "17-05-2023",
    },
  ];

  return (
    <>
      <div className="mt-3 mb-5">
        <Link to="addemp">
          <Button color="purple"> + Add Employee</Button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            {tableHeads.map((tableHead) => (
              <Table.HeadCell>{tableHead}</Table.HeadCell>
            ))}
            <Table.HeadCell>
              <span className="sr-only">Actions</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {employees.map((emp) => (
              <Table.Row className="border-gray-700 bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-white">
                  {emp.name}
                </Table.Cell>
                <Table.Cell>{emp.role}</Table.Cell>
                <Table.Cell>{emp.phone}</Table.Cell>
                <Table.Cell>{emp.doj}</Table.Cell>
                <Table.Cell className="flex flex-row">
                  <Link>
                    <Button className="mr-3" color="success">
                      View
                    </Button>
                  </Link>
                  <Link>
                    <Button className="mr-3" color="blue">
                      Edit
                    </Button>
                  </Link>
                  <Link>
                    <Button className="mr-3" color="failure">
                      Delete
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
