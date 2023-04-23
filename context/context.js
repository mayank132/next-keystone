import { createContext, useState } from "react";

export const User_data = createContext();

function Context({ children }) {
    const [user, setUser] = useState();
  
    return (
      <User_data.Provider value={{ user, setUser }}>
        {children}
      </User_data.Provider>
    );
  }

  export {Context}
  