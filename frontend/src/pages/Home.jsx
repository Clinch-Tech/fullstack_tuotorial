import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../utils/url.utils";
import http from "../utils/http.utils";

const Home = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData();
    setIsLoading(false);
  }, []);

  async function getData() {
    try {
      // const responseUser = await http.get(`/users/1`);

      const r = await http.get("/me");
      console.log(r);

      // setUser(responseUser.data);
    } catch (e) {
      console.log("error", e);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-50px)]">
        Loading...
      </div>
    );
  }

  return (
    <div>
      Home Page
      <div>{user.name}</div>
    </div>
  );
};

export default Home;
