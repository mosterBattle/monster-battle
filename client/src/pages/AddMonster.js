import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_MONSTER } from '../utils/mutations';

const AddMonster = () => {
  const [formState, setFormState] = useState({
    name: '',
    level: '',
    hp: '',
    str: '',
    def: '',
    spd: '',
    swg: '',
  });
  const [addMonster, { error, data }] = useMutation(ADD_MONSTER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    formState.level = parseInt(formState.level);
    formState.hp = parseInt(formState.hp);
    formState.str = parseInt(formState.str);
    formState.def = parseInt(formState.def);
    formState.spd = parseInt(formState.spd);
    formState.swg = parseInt(formState.swg);

    try {
      const { data } = await addMonster({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mainBody">
          <div className="mainOptions">
            {data ? (
              <p className="text-white">
                Success! You may now head <Link to="/">back to your profile</Link>
              </p>
            ) : (
              <div>
              <h4 >Add a Monster or <Link to="/">go back</Link></h4>
              <form onSubmit={handleFormSubmit} className="d-flex flex-column align-center">
                <input
                  className="formInput"
                  placeholder="Your monster's name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="formInput"
                  placeholder="Level"
                  name="level"
                  type="number"
                  min="1"
                  value={formState.level}
                  onChange={handleChange}
                />
                <input
                  className="formInput"
                  placeholder="Maximum Health Points"
                  name="hp"
                  type="number"
                  min="1"
                  value={formState.hp}
                  onChange={handleChange}
                />
                <input
                  className="formInput"
                  placeholder="Strength"
                  name="str"
                  type="number"
                  min="1"
                  value={formState.str}
                  onChange={handleChange}
                />
                <input
                  className="formInput"
                  placeholder="Defense"
                  name="def"
                  type="number"
                  min="1"
                  value={formState.def}
                  onChange={handleChange}
                />
                <input
                  className="formInput"
                  placeholder="Speed"
                  name="spd"
                  type="number"
                  min="1"
                  value={formState.spd}
                  onChange={handleChange}
                />
                <input
                  className="formInput"
                  placeholder="Swagger"
                  name="swg"
                  type="number"
                  min="1"
                  value={formState.swg}
                  onChange={handleChange}
                />
                <button
                  className="mainBtn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
              </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
      </div>
    </div>
  );
};

export default AddMonster;
