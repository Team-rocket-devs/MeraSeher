import React from 'react';
import { Users, Edit, Trash2, Plus } from 'lucide-react';
import { mockDepartments } from '../data/mockData';

export function Departments() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Departments
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage department information and staff assignments
          </p>
        </div>
        
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Department</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDepartments.map((dept) => (
          <div key={dept.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Head: {dept.head}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Total Issues</span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {dept.totalIssues}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Avg Resolution Time</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {dept.avgResolutionTime}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Staff Count</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {dept.staff}
                </span>
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                Assign Staff
              </button>
              <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}