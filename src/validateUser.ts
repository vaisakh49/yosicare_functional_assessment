interface User {
  username: string;
  name: string;
  email: string;
  password: string;
}

export const validateUser = (
  username: string,
  password: string
): User | null => {
  const mockUser: User = {
    username: "testuser",
    password: "password123",
    name: "John Doe",
    email: "john.doe@example.com",
  };

  if (username === mockUser.username && password === mockUser.password) {
    return { ...mockUser, password: "" }; // Don’t return the password
  } else {
    return null;
  }
};
