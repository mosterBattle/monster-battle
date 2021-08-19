import React from 'react';
import {Redirect, useParams, Link} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {Card, Row} from 'react-bootstrap';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Logout from '../components/Logout'
import Header from '../components/Header'

import Auth from '../utils/auth';
import MonsterList from '../components/MonsterList';

function ProfilePage() {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};
    // redirect to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Redirect to="/me" />;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user?.username) {
      return (
        <div>
            <Header></Header>
        </div>
      );
    }

    console.log(user);
    
    return (
        <div>
            <Logout></Logout>
            <Card>
                <Card.Body>
                    <Row>
                        <p>Total Matches: {`${user.totalMatches}`}</p>
                        <p>Total Wins: {`${user.wins}`}</p>
                        <p>Gold: {`${user.gold}`}</p>
                    </Row>
                    <Row>
                        <MonsterList monsters={user.monsters}/>
                    </Row>
                </Card.Body>
                <Card.Footer>
                  <Link className="mainBtn" to="/addmonster">
                    Add Monster
                  </Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ProfilePage;