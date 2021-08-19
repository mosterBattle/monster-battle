import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_GOLD } from '../utils/mutations';


const Victory = ({ userId }) => {
    const gold = 100;
    const reward = "Collect reward";

    const [addGold, { error }] = useMutation(ADD_GOLD);

    const handleBattleOutcome = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addGold({
                variables: { userId, gold },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Victory!</h1>
            <button value={gold} onClick={handleBattleOutcome}>{reward}</button>
            {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </div>
    )
};

export default Victory;