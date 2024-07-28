"use client";

import UserForm from "@/components/layout/profile/UserForm";
import Loader from "@/components/Loader";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { user } = useUser();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col">
      <div className="flex items-center justify-between p-4">
        <p>
          Раді вітати, {user?.firstName} {user?.lastName}
        </p>
        <UserButton />
      </div>

      <UserForm user={user} />
    </div>
  );
};

export default ProfilePage;
