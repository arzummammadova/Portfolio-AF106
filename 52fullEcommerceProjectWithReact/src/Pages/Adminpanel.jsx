import React from 'react';








const Adminpanel = () => {
  return (
    <div className="admin-container">
      <main className="content">
        <header>
          <h1 className="text-center">List of Products</h1>
          <button className="add-btn">Create</button>
        </header>

        <section>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                  <td>1</td>
                  <td>imga</td>
                  <td>category</td>
                  <td>12$</td>
                  <td>delete remove</td>
                  <td>dlete remove</td>
                 </tr>
              </tbody>
            </table>
          </div>

          {/* Modal Overlay */}
          <div className="cover" style={{ display: 'none' }}></div>

          {/* Modal Content */}
          <div className="row">
            <div className="myModal">
              <button className="close">X</button>
              <form className="form">
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="image"
                    placeholder="Enter image URL"
                    required
                    accept="image/*"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter product title"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    placeholder="Enter product category"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    placeholder="Enter product price"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary submit btnd">
                  Create
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Adminpanel;
