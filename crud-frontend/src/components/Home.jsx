import React from "react";
import TableMain from "./Table";

function Home() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Employee List
          </h1>
          <p className="mt-3">Only Admin Can Edit and Delete the Employee</p>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <TableMain />
        </div>
      </main>
    </>
  );
}

export default Home;
