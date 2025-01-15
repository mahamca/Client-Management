import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar } from './ui/avatar';


const clients = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-1234' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678' },
  { id: 3, name: 'Robert White', email: 'robert@example.com', phone: '555-8765' },
];

const Test = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Client Management</h1>

        {/* Add New Client Button */}
        <div className="mb-4">
          <Button variant="primary" className="bg-blue-600 text-white p-4 rounded-md">
            Add New Client
          </Button>
        </div>

        {/* Client Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Client Card */}
          {clients.map((client) => (
            <Card key={client.id} className="bg-white shadow-lg dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <Avatar src="https://via.placeholder.com/150" alt={client.name} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{client.name}</h3>
                  <p className="text-gray-500 dark:text-gray-300">{client.email}</p>
                  <p className="text-gray-500 dark:text-gray-300">{client.phone}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Client Table */}
        <div className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Name</th>
                <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Email</th>
                <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Phone</th>
                <th className="py-3 px-6 text-left text-gray-700 dark:text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-6 text-gray-900 dark:text-white">{client.name}</td>
                  <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.email}</td>
                  <td className="py-3 px-6 text-gray-500 dark:text-gray-300">{client.phone}</td>
                  <td className="py-3 px-6 text-blue-500 dark:text-blue-300 cursor-pointer">
                    <Button variant="outline" className="text-blue-600 dark:text-blue-300">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Test;
