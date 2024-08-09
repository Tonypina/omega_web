
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export const options: NextAuthOptions = {
    providers: [        
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                const res = await axios({
                    method: 'post',
                    url: process.env.API_URL + 'login',
                    data: {
                        email: credentials.email,
                        password: credentials.password,
                    },
                    headers: {
                        Accept : "application/json",
                        'Content-Type': 'application/json'
                    },
                })
                
                if (res.data && res.data.data && res.data.data.token) {
                    
                    return {
                        user: {
                            name: res.data.data.name,
                            email: credentials.email
                        },
                        token: res.data.data.token,
                    };
                } else {
                    console.error('Error during authentication');
                    return null;
                }
            }
        })
    ],
}