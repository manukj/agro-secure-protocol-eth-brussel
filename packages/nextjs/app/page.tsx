"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import LoginScreen from "./screens/login/page";
import { useRouter } from 'next/navigation'

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const router = useRouter()

  return (
   <LoginScreen />
  );
};

export default Home;
