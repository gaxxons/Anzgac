import React, { useState } from 'react';
import ContentEditor from '../../components/admin/ContentEditor';

const ManageContent = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const pages = [
    { id: 'home', name: 'Home Page' },
    { id: 'about', name: 'About Page' },
    { id: 'ministries', name: 'Ministries Page' },
    { id: 'events', name: 'Events Page' },
    { id: 'resources', name: 'Resources Page' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Manage Content</h1>
      
      <div className="mt-8">
        <div className="sm:hidden">
          <select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {pages.map((page) => (
              <option key={page.id} value={page.id}>
                {page.name}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden sm:block">
          <nav className="flex space-x-4 mb-8" aria-label="Tabs">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setSelectedPage(page.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedPage === page.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {page.name}
              </button>
            ))}
          </nav>
        </div>

        <ContentEditor page={selectedPage} />
      </div>
    </div>
  );
};

export default ManageContent;