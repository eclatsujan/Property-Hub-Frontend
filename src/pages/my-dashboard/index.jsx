import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import Seo from "../../components/common/seo";
import MyDashboard from "../../components/dashboard/my-dashboard";
import { useAuthStore } from "../../store/auth/auth";
import { useEffect } from "react";

const index = () => {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  
  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [isLoggedIn]);
  
  if (!isLoggedIn) {
    return <></>
  }
  return (
    <>
      <Seo pageTitle="Dashboard" />
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
