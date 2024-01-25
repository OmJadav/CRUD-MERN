import { useEffect, useState } from "react";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import { Table } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import EmpForm from "./EmpForm";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "./Loader";

export default function TableMain() {
  const [loading, setloading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [emps, setEmps] = useState([]);
  const [open, setOpen] = useState(false);
  const [employeeName, setEmployeeName] = useState("");
  const [employeeid, setEmployeeid] = useState("");

  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();
  const tableHeads = ["Employee Name", "Role", "Phone", "Joining Date"];

  useEffect(() => {
    const fetchEmp = async () => {
      try {
        setloading(true);

        const response = await axios.get(`/allemp`);
        setEmps(response.data);
        setloading(false);
      } catch (error) {
        setloading(false);

        console.log(" Employee fetching Error:", error);
      }
    };

    fetchEmp();
  }, []);
  const sendId_name = async (id, name) => {
    setOpen(true);
    setEmployeeid(id);
    setEmployeeName(name);
  };
  const deleteEmployee = async () => {
    setOpen(false);
    try {
      const response = await axios.get(`/delete/${employeeid}`).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log("Employee deleting Error :", error);
    }
  };
  return (
    <>
      <div className="mt-3 mb-5">
        <Button color="purple" onClick={() => setOpenModal(true)}>
          {" "}
          + Add Employee
        </Button>
      </div>
      <div className="overflow-x-auto">
        {loading && <Loader />}
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
            {emps &&
              emps.length > 0 &&
              emps.map((emp) => (
                <Table.Row
                  key={emp._id}
                  className="border-gray-700 bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-white">
                    {emp.name}
                  </Table.Cell>
                  <Table.Cell>{emp.role}</Table.Cell>
                  <Table.Cell>{emp.phone}</Table.Cell>
                  <Table.Cell>{emp.doj}</Table.Cell>
                  <Table.Cell className="flex flex-row">
                    <Link to={`/view/${emp._id}`}>
                      <Button className="mr-3" color="success">
                        View
                      </Button>
                    </Link>
                    <Link to={`/edit/${emp._id}`}>
                      <Button className="mr-3" color="blue">
                        Edit
                      </Button>
                    </Link>
                    {/* <Link to={`/delete/${emp._id}`}> */}
                    <Button
                      className="mr-3"
                      color="failure"
                      onClick={() => sendId_name(emp._id, emp.name)}
                    >
                      Delete
                    </Button>
                    {/* </Link> */}
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>

      {/* Modal code start  */}
      <Modal
        dismissible
        show={openModal}
        onClose={() => {
          setOpenModal(false);
          navigate("/");
        }}
      >
        <Modal.Header>Add An Employee</Modal.Header>
        <Modal.Body>
          {/* Imported Form  */}

          <EmpForm />

          {/*Form end */}
        </Modal.Body>
      </Modal>
      {/* Modal code ends  */}

      {/* delete Modal Starts  */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Delete Employee
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete{" "}
                            <span className="text-red-600">
                              {" "}
                              {employeeName}
                            </span>
                            ? All of your data will be permanently removed. This
                            action cannot be undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={deleteEmployee}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* delete Modal ends  */}
    </>
  );
}
