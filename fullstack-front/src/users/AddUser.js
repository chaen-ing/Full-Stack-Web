import React from 'react'

// 유저 등록 페이지
export default function AddUser() {
  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt shadow">
        <h2 className="text-center m-4">Register User</h2>
        {/* name */}
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
          type = {"text"}
          className="form-control"
          placeholder="Enter your name"
          name="name"/>
        </div>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
          type = {"text"}
          className="form-control"
          placeholder="Enter your username"
          name="username"/>
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            E-mail
          </label>
          <input
          type = {"text"}
          className="form-control"
          placeholder="Enter your e-mail address"
          name="email"/>
        </div>
        {/* 제출버튼 */}
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
        {/* 취소버튼 */}
        <button type="submit" className="btn btn-outline-danger mx-2">
          Cancel
        </button>
      </div>
    </div>
  </div>;
}
