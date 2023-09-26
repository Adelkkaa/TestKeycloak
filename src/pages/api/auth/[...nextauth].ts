import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID as string,
      clientSecret: process.env.KEYCLOAK_SECRET as string,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  secret: "dRYFTX3G64ht8n+Nr0KwrFMWIhXlW9gBTO8PeBatA7E",
  //   callbacks: {
  //     async jwt({ token, account }) {
  //       if (account) {
  //         token.accessToken = account.access_token;
  //       }
  //       return token;
  //     },
  //     async session({ session, token }) {
  //       return session;
  //     },
  //   },
};
export default NextAuth(authOptions);
// import type { NextApiRequest, NextApiResponse } from "next";
// import type { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth";
// // import type { IUserData } from "../../../types/next-auth";
// import KeycloakProvider from "next-auth/providers/keycloak";

// const vvgAuthOptions: NextAuthOptions = {
//   providers: [
//     KeycloakProvider({
//       clientId: process.env.KEYCLOAK_ID as string,
//       clientSecret: process.env.KEYCLOAK_SECRET as string,
//       issuer: process.env.KEYCLOAK_ISSUER,
//     }),
//   ],

//   secret: "dRYFTX3G64ht8n+Nr0KwrFMWIhXlW9gBTO8PeBatA7E",

//   /////////////////////////////////////////////////////////////////////////////
//   session: {
//     // Choose how you want to save the user session.
//     // The default is "jwt", an encrypted JWT (JWE) in the session cookie.
//     // If you use an adapter however, we default it to "database" instead.
//     // You can still force a JWT session by explicitly defining "jwt".
//     // When using "database", the session cookie will only contain a sessionToken value,
//     // which is used to look up the session in the database.
//     // strategy: 'database',
//     strategy: "jwt", // JWT strategy is only if credentials is configured

//     // Seconds - How long until an idle session expires and is no longer valid.
//     // maxAge: 30 * 24 * 60 * 60, // 30 days
//     maxAge: 8 * 60 * 60, // 8 hours

//     // Seconds - Throttle how frequently to write to database to extend a session.
//     // Use it to limit write operations. Set to 0 to always update the database.
//     // Note: This option is ignored if using JSON Web Tokens
//     // updateAge: 24 * 60 * 60, // 24 hours
//     updateAge: 1 * 60 * 60, // 1 hour
//   },
//   /////////////////////////////////////////////////////////////////////////////

//   /////////////////////////////////////////////////////////////////////////////
//   jwt: {
//     // A secret to use for key generation. Defaults to the top-level secret.
//     secret: "LYGCcnyGP11idfAEfpN5Q0Fpq2E/vmbN2qshK8glpto",

//     // The maximum age of the NextAuth.js issued JWT in seconds.
//     // Defaults to session.maxAge.
//     // maxAge: 30 * 24 * 60 * 60, // 30 days
//     maxAge: 8 * 60 * 60, // 8 hours

//     // You can define your own encode/decode functions for signing and encryption
//     // if you want to override the default behavior.
//     // async encode({ secret, token, maxAge }) {},
//     // async decode({ secret, token }) {},
//   },
//   /////////////////////////////////////////////////////////////////////////////

//   /////////////////////////////////////////////////////////////////////////////
//   pages: {
//     signIn: "/auth/signin", // default '/auth/signin'
//     signOut: "/auth/signout", // default '/auth/signout'
//     error: "/auth/error", // Error code passed in query string as ?error=
//     // verifyRequest: '/auth/verify-request', // default '/auth/verify-request'
//     // (used for check email message)
//     // newUser: '/auth/new-user'              // default '/auth/new-user'
//     // New users will be directed here on first sign in (leave the property out if not of interest)
//   },
//   /////////////////////////////////////////////////////////////////////////////

//   /////////////////////////////////////////////////////////////////////////////
//   //   callbacks: {
//   //     ///////////////////////////////////////////////////////////////////////////
//   //     // // signIn() is a callback to control if a user is allowed to sign in.
//   //     // // https://next-auth.js.org/configuration/callbacks#sign-in-callback
//   //     signIn: async (props) => {
//   //       // debugger;
//   //       // console.log(
//   //       //   'pages/api/auth/[...nextauth].js::callbacks::signIn() props are:',
//   //       //   JSON.stringify(props, null, 2)
//   //       // );
//   //       // const { user, account, profile, email, credentials } = props;
//   //       // debugger;
//   //       if (!process.env.KIPARISS_GETUSER_URL) {
//   //         // debugger;
//   //         console.error(
//   //           "src/pages/api/auth/[...nextauth].ts: environment KIPARISS_GETUSER_URL is not set!"
//   //         );
//   //         return false;
//   //       }
//   //       // debugger;
//   //       const res = await fetch(process.env.KIPARISS_GETUSER_URL, {
//   //         method: "GET",
//   //         credentials: "include",
//   //         headers: {
//   //           Authorization: "Bearer " + props.account?.access_token,
//   //         },
//   //       });
//   //       if (res.status !== 200) {
//   //         // debugger;
//   //         console.error(
//   //           "src/pages/api/auth/[...nextauth].ts: KIPARISS_GETUSER_URL fetch status !== 200 !"
//   //         );
//   //         return false;
//   //       }
//   //       try {
//   //         const userData = await res.json();
//   //         props.user.userData = userData;
//   //         props.user.accessToken = props.account?.access_token;
//   //         props.user.idToken = props.account?.id_token;
//   //         // debugger;
//   //         return true;
//   //       } catch (error) {
//   //         // debugger;
//   //         console.error(
//   //           "src/pages/api/auth/[...nextauth].ts: error while processing KIPARISS_GETUSER_URL:",
//   //           error
//   //         );
//   //         return false;
//   //       }
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     ///////////////////////////////////////////////////////////////////////////
//   //     // redirect: async (props) => {
//   //     //   console.log(
//   //     //     'pages/api/auth/[...nextauth].js::callbacks::redirect() props are:',
//   //     //     props
//   //     //   );
//   //     //   const { url, baseUrl } = props;
//   //     //   debugger;
//   //     //   if (url.startsWith(baseUrl)) return url;
//   //     //   // Allows relative callback URLs
//   //     //   else if (url.startsWith('/')) return new URL(url, baseUrl).toString();
//   //     //   return baseUrl;
//   //     // },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     ///////////////////////////////////////////////////////////////////////////
//   //     session: async (props) => {
//   //       // debugger;
//   //       // console.log(
//   //       //   'pages/api/auth/[...nextauth].js::callbacks::session() props are:',
//   //       //   JSON.stringify(props, null, 2)
//   //       // );
//   //       const { session, token /*, user */ } = props;
//   //       if (session && token) {
//   //         if (token?.userData && Object.keys(token?.userData).length > 0) {
//   //           session.userData = token?.userData;
//   //         }
//   //         session.accessToken = token?.accessToken;
//   //         session.idToken = token?.idToken;
//   //         delete session.user;
//   //       }
//   //       return session;
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     ///////////////////////////////////////////////////////////////////////////
//   //     jwt: async (props) => {
//   //       // debugger;
//   //       // console.log(
//   //       //   'pages/api/auth/[...nextauth].js::callbacks::jwt() props are:',
//   //       //   props
//   //       // );
//   //       const { token, user /*, account, profile, isNewUser */ } = props;

//   //       // first time jwt callback is run, user object is available
//   //       if (user) {
//   //         if (user?.userData && Object.keys(user?.userData).length > 0) {
//   //           token.userData = {
//   //             ...token.userData,
//   //             ...(user.userData as Record<string, unknown>),
//   //           } as IUserData;
//   //         }
//   //         token.accessToken = user?.accessToken;
//   //         token.idToken = user?.idToken;
//   //       }

//   //       // debugger;
//   //       return token;
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////
//   //   },
//   //   /////////////////////////////////////////////////////////////////////////////

//   //   /////////////////////////////////////////////////////////////////////////////
//   //   events: {
//   //     ///////////////////////////////////////////////////////////////////////////
//   //     // https://next-auth.js.org/configuration/events
//   //     async signIn(message) {
//   //       /* on successful sign in */
//   //       console.info(
//   //         "successful signIn(), message is:",
//   //         JSON.stringify(
//   //           {
//   //             email: message?.user?.userData?.email,
//   //             surname: message?.user?.userData?.surname,
//   //           },
//   //           null,
//   //           2
//   //         )
//   //       );
//   //       // const {
//   //       //   user, // (from your adapter or from the provider if a credentials type provider)
//   //       //   account, // (from your adapter or the provider)
//   //       //   profile, // (from the provider, is undefined on credentials provider, use user instead)
//   //       //   isNewUser, // (whether your adapter had a user for this account already)
//   //       // } = message;
//   //       // debugger;
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     ///////////////////////////////////////////////////////////////////////////
//   //     async signOut(message) {
//   //       /* on signout */
//   //       // debugger;
//   //       console.info(
//   //         "successful signOut() message is:",
//   //         JSON.stringify(
//   //           {
//   //             email: message?.token?.userData?.email,
//   //             surname: message?.token?.userData?.surname,
//   //           },
//   //           null,
//   //           2
//   //         )
//   //       );
//   //       // const {
//   //       //   token, // The JWT token for this session.
//   //       //   session, // The session object from your adapter that is being ended
//   //       // } = message;
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     ///////////////////////////////////////////////////////////////////////////
//   //     async createUser() // message
//   //     {
//   //       /* user created */
//   //       // console.log(
//   //       //   'pages/api/auth/[...nextauth].js::events::createUser() message is:',
//   //       //   JSON.stringify(message, null, 2)
//   //       // );
//   //       // const userData =
//   //       //   // The message object will contain the user.
//   //       //   message;
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     ///////////////////////////////////////////////////////////////////////////
//   //     async updateUser() //message
//   //     {
//   //       /* user updated - e.g. their email was verified */
//   //       // console.log(
//   //       //   'pages/api/auth/[...nextauth].js::events::updateUser() message is:',
//   //       //   JSON.stringify(message, null, 2)
//   //       // );
//   //       // const userData =
//   //       //   // The message object will contain the user.
//   //       //   message;
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     ///////////////////////////////////////////////////////////////////////////
//   //     async linkAccount() // message
//   //     {
//   //       // console.log(
//   //       //   'pages/api/auth/[...nextauth].js::events::linkAccount() message is:',
//   //       //   JSON.stringify(message, null, 2)
//   //       // );
//   //       /* account (e.g. Twitter) linked to a user */
//   //       // const {
//   //       //   user, // The user object from your adapter.
//   //       //   providerAccount, // The object returned from the provider.
//   //       // } = message;
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     ///////////////////////////////////////////////////////////////////////////
//   //     async session() //message
//   //     {
//   //       /* session is active, Sent at the end of a request for the current session. */
//   //       // console.log(
//   //       //   'pages/api/auth/[...nextauth].js::events::session() message is:',
//   //       //   JSON.stringify(message, null, 2)
//   //       // );
//   //       // const {
//   //       //   token, // The JWT token for this session.
//   //       //   session, // The session object from your adapter.
//   //       // } = message;
//   //     },
//   //     ///////////////////////////////////////////////////////////////////////////

//   //     // ///////////////////////////////////////////////////////////////////////////
//   //     // async error(
//   //     //   // message
//   //     // ) {
//   //     //   /* error in authentication flow */
//   //     //   // debugger;
//   //     //   // console.log(
//   //     //   //   'pages/api/auth/[...nextauth].js::events::error() message is:',
//   //     //   //   JSON.stringify(message, null, 2)
//   //     //   // );
//   //     // },
//   //     // ///////////////////////////////////////////////////////////////////////////
//   //   },
//   //   /////////////////////////////////////////////////////////////////////////////

//   //   // adapter: SequelizeAdapter(sequelize),

//   //   debug: process.env.NODE_ENV !== "production",

//   //   // logger: {
//   //   //   error(code, metadata) {
//   //   //     console.error(code, metadata);
//   //   //   },
//   //   //   warn(code) {
//   //   //     console.warn(code);
//   //   //   },
//   //   //   debug(code, metadata) {
//   //   //     console.debug(code, metadata);
//   //   //   },
//   //   // },

//   //   // theme: {
//   //   //   colorScheme: "auto", // "auto" | "dark" | "light"
//   //   //   brandColor: "", // Hex color code
//   //   //   logo: "" // Absolute URL to image
//   //   // },

//   // Advanced Options         // https://next-auth.js.org/configuration/options#advanced-options
//   // useSecureCookies: true,  // https://next-auth.js.org/configuration/options#usesecurecookies
//   // cookies: {}              // https://next-auth.js.org/configuration/options#cookies
// };

// export const authOptions: NextAuthOptions = { ...vvgAuthOptions };

// export default async function auth(req: NextApiRequest, res: NextApiResponse) {
//   // debugger; // XXXeslint-disable-line no-debuggerXXX
//   // Do whatever you want here, before the request is passed down to NextAuth
//   // console.info('authOptions are:, ', authOptions);
//   // console.info('vvgAuthOptions are:, ', vvgAuthOptions);
//   if (!authOptions.providers) {
//     // debugger; // XXXeslint-disable-line no-debuggerXXX
//   }
//   return await NextAuth(req, res, { ...vvgAuthOptions });
// }
