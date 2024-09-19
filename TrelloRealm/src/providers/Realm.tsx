import { PropsWithChildren } from "react";
import real from "realm";
import { RealmProvider } from "@realm/react";
import { Task } from "../models/Task";

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return <RealmProvider schema={[Task]}>{children}</RealmProvider>;
}
