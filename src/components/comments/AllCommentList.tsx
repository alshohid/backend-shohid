import React from 'react'

export default function AllCommentList({ item}:any) {
  return (
    <div key={item.id} className="p-4 bg-gray-100 rounded-lg shadow">
      <h4 className="font-semibold text-lg">
        {item.users.firstName} {item.users.lastName}
      </h4>
      <p className="mt-1 text-gray-600">{item.descriptions}</p>
    </div>
  );
}
