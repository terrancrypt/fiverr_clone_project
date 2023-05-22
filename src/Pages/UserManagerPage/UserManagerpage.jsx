import { useEffect, useState } from "react";
import { userManagerSev } from "../../services/userManagerSev/userManagerSev";

export default function UserManagerPage() {
  const [userManager, setUserManager] = useState({});
  useEffect(() => {
    let fetchUserManager = async () => {
      try {
        let userManager = await userManagerSev.getUser();
        setUserManager(userManager.data.content);
        console.log(userManager);
      } catch (error) {}
    };
    fetchUserManager();
  }, []);
  return <div></div>;
}
