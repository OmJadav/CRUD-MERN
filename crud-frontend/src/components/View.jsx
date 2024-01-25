import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
function View() {
  let [loading, setLoading] = useState(true);
  const params = useParams();
  const empid = params.empid;
  const [empDetails, setEmpDetails] = useState([]);
  useEffect(() => {
    const fetchEmpById = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/view/${empid}`);
        setEmpDetails(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error view by id axios:", error);
      }
    };

    fetchEmpById();
  }, [empid]);

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            View Employee Details
          </h1>
        </div>
      </header>
      {loading && <Loader />}

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* All the description starts from here  */}
          <div>
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Personal details of Employee.
              </p>
            </div>
            {/* {empids &&
              empids.length > 0 &&
              empids.map((emp) => ( */}
            {empDetails && (
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Full name
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {empDetails.name}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Role
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {empDetails.role}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Date Of Joining
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {empDetails.doj}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {empDetails.email}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Salary
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {empDetails.salary}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Phone Number
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {empDetails.phone}
                    </dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Address
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {empDetails.address}
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
          {/* All the description ends from here  */}
        </div>
      </main>
    </>
  );
}

export default View;
