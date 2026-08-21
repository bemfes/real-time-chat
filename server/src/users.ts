import type { IUser } from "@chat/common/types/types";

const users: IUser[] = [];

export const addUser = ({
  id,
  name,
  room,
}: IUser): IUser | { error: string } => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name,
  );

  if (existingUser) {
    return { error: "That username is taken" };
  }

  const user = { id, name, room };

  users.push(user);

  return user;
};

export const removeUser = (id: string): IUser | undefined => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

export const getUser = (id: string): IUser | undefined => {
  return users.find((user) => user.id === id);
};

export const getUsersInRoom = (room: string): IUser[] => {
  return users.filter((user) => user.room === room);
};
