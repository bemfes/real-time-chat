interface User {
  id: string;
  name: string;
  room: string;
}

const users: User[] = [];

export const addUser = ({ id, name, room }: User): User | { error: string } => {
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

export const removeUser = (id: string): User[] => {
  return users.filter((user) => user.id !== id);
};

export const getUser = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};

export const getUsersInRoom = (room: string): User[] => {
  return users.filter((user) => user.room === room);
};
