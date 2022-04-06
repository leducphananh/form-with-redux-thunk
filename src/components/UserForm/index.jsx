import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser, resetUser, setUser, updateUser } from 'redux/actions/UserActions';
import Validate from './Validate';

function UserForm(props) {

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [error, setError] = useState({});

    const history = useHistory();

    const handleCheckbox = (id) => {
        const isChecked = user.courses.includes(id);
        const newCourse = isChecked ? user.courses.filter(item => item !== id) : [...user.courses, id];
        const action = setUser({
            ...user,
            courses: newCourse
        })
        dispatch(action);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const validate = Validate(user);
        if (Object.values(validate).some(item => item)) {
            setError(validate);
            return;
        }

        const action = addUser(user);
        dispatch(action);

        history.push('/home');
    }

    const handleFormUpdate = (e) => {
        e.preventDefault();

        const validate = Validate(user);
        if (Object.values(validate).some(item => item)) {
            setError(validate);
            return;
        }

        const action = updateUser(user);
        dispatch(action);

        history.push('/home');
    }

    useEffect(() => {
        return () => {
            dispatch(resetUser());
        }
    }, [dispatch]);

    return (
        <div className="form">
            <form
                onSubmit={handleFormSubmit}
            >
                <h3>Sign up</h3>
                <div className="desc">It's quick and easy ❤️</div>
                <div className="spacer"></div>

                <div className="form-group">
                    <label htmlFor="name" className="form-label label-required">Name</label>
                    <input
                        value={user.name}
                        onChange={e => {
                            dispatch(setUser({
                                ...user,
                                name: e.target.value
                            }))
                            error.name = null;
                        }}
                        onBlur={() => {
                            const obj = { name: user.name };
                            setError({
                                ...error,
                                ...Validate(obj)
                            });
                        }}
                        placeholder="Enter name"
                        autoComplete="off"
                        className="form-control" />
                    <span className="form-message">{error.name}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="gender" className="form-label label-required">Gender</label>
                    <div className="form-wrap">
                        <div className="form-item">
                            <input
                                onChange={e => {
                                    dispatch(setUser({
                                        ...user,
                                        gender: e.target.value
                                    }))
                                }}
                                type="radio"
                                name="gender"
                                value="Male"
                                id="male"
                                checked={user.gender === 'Male'}
                            />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="form-item">
                            <input
                                onChange={e => {
                                    dispatch(setUser({
                                        ...user,
                                        gender: e.target.value
                                    }))
                                }}
                                type="radio"
                                name="gender"
                                value="Female"
                                id="female"
                                checked={user.gender === 'Female'}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="dob" className="form-label label-required">Date of Birth</label>
                    <input
                        value={user.dob}
                        onChange={e => {
                            dispatch(setUser({
                                ...user,
                                dob: e.target.value
                            }))
                            error.dob = null;
                        }}
                        onBlur={() => {
                            const obj = { dob: user.dob };
                            setError({
                                ...error,
                                ...Validate(obj)
                            });
                        }}
                        type="date"
                        name="date"
                        className="form-control" />
                    <span className="form-message">{error.dob}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label label-required">Phone number</label>
                    <input
                        value={user.phone}
                        onChange={e => {
                            dispatch(setUser({
                                ...user,
                                phone: e.target.value
                            }))
                            error.phone = null;
                        }}
                        onBlur={() => {
                            const obj = { phone: user.phone };
                            setError({
                                ...error,
                                ...Validate(obj)
                            });
                        }}
                        name="phone"
                        placeholder="Enter phone number"
                        autoComplete="off"
                        className="form-control" />
                    <span className="form-message">{error.phone}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label label-required">Email</label>
                    <input
                        value={user.email}
                        onChange={e => {
                            dispatch(setUser({
                                ...user,
                                email: e.target.value
                            }))
                            error.email = null;
                        }}
                        onBlur={() => {
                            const obj = { email: user.email };
                            setError({
                                ...error,
                                ...Validate(obj)
                            });
                        }}
                        name="email"
                        placeholder="Enter email"
                        autoComplete="off"
                        className="form-control" />
                    <span className="form-message">{error.email}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label label-required">Address</label>
                    <select
                        value={user.address}
                        onChange={e => {
                            dispatch(setUser({
                                ...user,
                                address: e.target.value
                            }))
                            error.address = null;
                        }}
                        onBlur={() => {
                            const obj = { address: user.address };
                            setError({
                                ...error,
                                ...Validate(obj)
                            });
                        }}
                        className="form-control">
                        <option value="">-- Address --</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Hà Đông">Hà Đông</option>
                        <option value="Hà Tây">Hà Tây</option>
                        <option value="Hà Nam">Hà Nam</option>
                        <option value="Hà Bắc">Hà Bắc</option>
                    </select>
                    <span className="form-message">{error.address}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        value={user.description}
                        onChange={e => {
                            dispatch(setUser({
                                ...user,
                                description: e.target.value
                            }))
                        }}
                        name="description"
                        rows="8">
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="level" className="form-label">Courses</label>
                    <div className="form-wrap">
                        <div className="form-item">
                            <input
                                onChange={() => handleCheckbox('HTML')}
                                checked={user.courses.includes('HTML')}
                                type="checkbox"
                                name="courses"
                                value="HTML"
                                id="HTML" />
                            <label htmlFor="HTML">HTML</label>
                        </div>
                        <div className="form-item">
                            <input
                                onChange={() => handleCheckbox('CSS')}
                                checked={user.courses.includes('CSS')}
                                type="checkbox"
                                name="courses"
                                value="CSS"
                                id="CSS" />
                            <label htmlFor="CSS">CSS</label>
                        </div>
                        <div className="form-item">
                            <input
                                onChange={() => handleCheckbox('JS')}
                                checked={user.courses.includes('JS')}
                                type="checkbox"
                                name="courses"
                                value="JS"
                                id="JS" />
                            <label htmlFor="JS">JS</label>
                        </div>
                    </div>
                </div>
                <div className="group-btn">
                    <button
                        className={user.id ? 'btn btn-inactive' : 'btn btn-active'}
                        type="submit"
                    >
                        Submit
                    </button>
                    <button
                        onClick={handleFormUpdate}
                        className={user.id ? 'btn btn-active' : 'btn btn-inactive'}
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserForm;