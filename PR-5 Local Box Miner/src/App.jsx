import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [task, setTask] = useState({});
  let [taskList, setTaskList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [index, setIndex] = useState(-1);
  let [person] = useState(["Manager", "Team Leader", "Employee"]);
  let [member, setMember] = useState([]);
  let [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 500);
  }, [taskList]);

  let getData = () => {
    let newData = JSON.parse(localStorage.getItem("taskData"));
    if (newData != null) {
      setTaskList(newData);
      setLoading(true);
    } else {
      setTaskList([]);
    }
  };

  let getInputData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newMember = [...member];

    if (name === "member") {
      if (newMember.includes(value)) {
        let pos = newMember.findIndex((v) => v === value);
        if (pos !== -1) newMember.splice(pos, 1);
      } else {
        newMember.push(value);
      }
      setMember(newMember);
      value = newMember;
    }
    setTask({ ...task, [name]: value });
    setLoading(true);
  };

  let validateForm = () => {
    let newErrors = {};
    if (!task.task) newErrors.task = "Task name is required";
    if (!task.type) newErrors.type = "Type is required";
    if (!task.priority) newErrors.priority = "Priority is required";
    if (member.length === 0) newErrors.member = "Select at least one member";
    if (!task.person) newErrors.person = "Please select a person";
    if (!task.image) newErrors.image = "Image URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  let setData = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let newList = [...taskList];
    if (index !== -1) {
      newList[index] = task;
    } else {
      task.id = Math.round(Math.random() * 100);
      newList.push(task);
    }

    setTaskList(newList);
    localStorage.setItem("taskData", JSON.stringify(newList));
    setTask({});
    setMember([]);
    setIndex(-1);
    setErrors({}); 
    setLoading(true);
  };

  let removeData = (id) => {
    let newList = [...taskList];
    let pos = taskList.findIndex((v) => v.id === id);
    if (pos !== -1) {
      newList.splice(pos, 1);
    }
    setTaskList(newList);
    localStorage.setItem("taskData", JSON.stringify(newList));
  };

  let updateData = (id) => {
    let newList = [...taskList];
    let pos = newList.findIndex((v) => v.id === id);
    if (pos !== -1) {
      setTask(newList[pos]);
      setMember(newList[pos].member || []);
      setIndex(pos);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Todo App</h1>

      <div className="row">
        
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4 className="mb-3">{index !== -1 ? "Edit Task" : "Add Task"}</h4>
            <form onSubmit={(e) => setData(e)} noValidate>
              
              <div className="mb-3">
                <label className="form-label">Task</label>
                <input
                  type="text"
                  name="task"
                  className={`form-control ${errors.task ? "is-invalid" : ""}`}
                  value={task.task || ""}
                  onChange={getInputData}
                />
                {errors.task && <div className="invalid-feedback">{errors.task}</div>}
              </div>

              
              <div className="mb-3">
                <label className="form-label">Type</label>
                <input
                  type="text"
                  name="type"
                  className={`form-control ${errors.type ? "is-invalid" : ""}`}
                  value={task.type || ""}
                  onChange={getInputData}
                />
                {errors.type && <div className="invalid-feedback">{errors.type}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label d-block">Priority</label>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="priority"
                    value="Important"
                    className="form-check-input"
                    checked={task.priority === "Important"}
                    onChange={getInputData}
                  />
                  <label className="form-check-label">Important</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="priority"
                    value="Non-Important"
                    className="form-check-input"
                    checked={task.priority === "Non-Important"}
                    onChange={getInputData}
                  />
                  <label className="form-check-label">Non-Important</label>
                </div>
                {errors.priority && <div className="text-danger small">{errors.priority}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label d-block">Members</label>
                {["Hemi", "Urvi", "Ayushi"].map((m, i) => (
                  <div className="form-check form-check-inline" key={i}>
                    <input
                      type="checkbox"
                      name="member"
                      value={m}
                      className="form-check-input"
                      checked={member.includes(m)}
                      onChange={getInputData}
                    />
                    <label className="form-check-label">{m}</label>
                  </div>
                ))}
                {errors.member && <div className="text-danger small">{errors.member}</div>}
              </div>

    
              <div className="mb-3">
                <label className="form-label">Completed By</label>
                <select
                  className={`form-select ${errors.person ? "is-invalid" : ""}`}
                  name="person"
                  onChange={getInputData}
                  value={task.person || ""}
                >
                  <option value="">--select--</option>
                  {person.map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
                {errors.person && <div className="invalid-feedback">{errors.person}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  name="image"
                  className={`form-control ${errors.image ? "is-invalid" : ""}`}
                  value={task.image || ""}
                  onChange={getInputData}
                />
                {errors.image && <div className="invalid-feedback">{errors.image}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                {index !== -1 ? "Update Task" : "Add Task"}
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card shadow p-3">
            <h4 className="mb-3">Task List</h4>
            <table className="table table-striped table-bordered text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>No</th>
                  <th>Task</th>
                  <th>Type</th>
                  <th>Priority</th>
                  <th>Members</th>
                  <th>Person</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  taskList.length ? (
                    taskList.map((v, i) => (
                      <tr key={v.id}>
                        <td>{i + 1}</td>
                        <td>{v.task}</td>
                        <td>{v.type}</td>
                        <td>
                          <span
                            className={`badge ${
                              v.priority === "Important"
                                ? "bg-danger"
                                : "bg-secondary"
                            }`}
                          >
                            {v.priority}
                          </span>
                        </td>
                        <td>{v.member.toString()}</td>
                        <td>{v.person}</td>
                        <td>
                          {v.image && (
                            <img
                              src={v.image}
                              alt="task"
                              height={60}
                              width={60}
                              className="rounded"
                            />
                          )}
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger me-2"
                            onClick={() => removeData(v.id)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-sm btn-warning"
                            onClick={() => updateData(v.id)}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">No tasks found</td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td colSpan="8">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
