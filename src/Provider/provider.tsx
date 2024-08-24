'use client'
import { SessionProvider } from 'next-auth/react';
// function สำหรับเก็บ session ไว้ใช้งาน
const AppProvider = ({children}:{children:React.ReactNode}) => {
    return (
      <SessionProvider >
        {children}
      </SessionProvider>
    );
  };
  
  export default AppProvider;