import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
 
const EditUser = () => {
  const [name, setName] = useState("");
  const [nim, setNIM] = useState("");
  const [kelas, setKelas] = useState("");
  const [semester, setSemester] = useState("");
  const navigate = useNavigate();
  const [jeniskelamin, setJenis_Kelamin] = useState("Laki-Laki");
  const [alamat, setAlamat] = useState("");
  const { id } = useParams();
 
  useEffect(() => {
    getUserById();
  }, []);
 
  const getUserById = async () => {
    const response = await axios.get(`https://sukri-backend.herokuapp.com/users/${id}`);
    setName(response.data.name);
    setNIM(response.data.nim);
    setKelas(response.data.kelas);
    setSemester(response.data.semester);
    setJenis_Kelamin(response.data.jeniskelamin);
    setAlamat(response.data.alamat);
  };
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://sukri-backend.herokuapp.com/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NIM</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nim}
                onChange={(e) => setNIM(e.target.value)}
                placeholder="NIM"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kelas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="Kelas"
              />
            </div>
            </div>
            <div className="field">
            <label className="label">Semester</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                placeholder="Kelas"
              />
            </div>
            </div>
          <div className="field">
            <label className="label">Jenis Kelamin</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={jeniskelamin}
                  onChange={(e) => setJenis_Kelamin(e.target.value)}
                >
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
            <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="alamat"
              />
            </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditUser;