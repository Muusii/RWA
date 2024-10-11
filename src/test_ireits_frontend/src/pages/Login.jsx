import React, { useState, useEffect, FormEvent } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { HttpAgent } from '@dfinity/agent';
import { createActor } from '../declarations/test_ireits_backend';

const LoginPage = () => {
  const [greeting, setGreeting] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const authClient = await AuthClient.create();
      const isAuthenticated = await authClient.isAuthenticated();
      setLoggedIn(isAuthenticated);
    };

    checkAuthentication();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.namedItem('name').value;

    const greetingResponse = await NFID_new_backend.greet(name);
    setGreeting(greetingResponse);
  };

  const createNFID = async () => {
    const authClient = await AuthClient.create();
    const APP_NAME = "NFID Test";
    const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
    const CONFIG_QUERY = `?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;
    const identityProvider = `https://nfid.one/authenticate${CONFIG_QUERY}`;

    await new Promise((resolve) => {
      authClient.login({
        identityProvider,
        onSuccess: () => {
          resolve();
          setLoggedIn(true);
        },
        windowOpenerFeatures: `
          left=${window.screen.width / 2 - 525 / 2},
          top=${window.screen.height / 2 - 705 / 2},
          toolbar=0,location=0,menubar=0,width=525,height=705
        `,
      });
    });

    const identity = authClient.getIdentity();
    const agent = new HttpAgent({ identity });
    const actor = createActor("bw4dl-smaaa-aaaaa-qaacq-cai", { agent });
    console.log("actor is", actor);

    const principalId = authClient.getIdentity().getPrincipal().toText();
    console.log("PrincipalId is", principalId);
  };

  const logout = async () => {
    const authClient = await AuthClient.create();
    await authClient.logout();
    setLoggedIn(false);
  };

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      {loggedIn ? (
        <div>
          <p>Logged in</p>
          <button onClick={logout}>Logout</button>
          {/* Other authenticated user content can go here */}
        </div>
      ) : (
        <button onClick={createNFID}>Login</button>
      )}
    </main>
  );
}

export default LoginPage;
