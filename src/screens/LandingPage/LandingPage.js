import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import "./LandingPage.css";
import { UserContext } from "../../App";

const LandingPage = () => {
  const { dispatch } = useContext(UserContext);
  const setNav = () => {
    dispatch({ type: "USER", payload: true });
  };
  setNav();

  return (
    <Container>
      <div className="title">
        <div className="title-label">User List</div>
        <button href="/users" className="title-button">
          + Invite New User
        </button>
      </div>
      <div className="body table-wrapper-scroll-y my-custom-scrollbar">
        <Table bordered hover>
          <thead className="table-head table-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="table-body">
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>scot</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Admin</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@walterpmoore.com</td>
              <td>Viewer</td>
              <td>
                <a href="/users">Edit</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default LandingPage;
