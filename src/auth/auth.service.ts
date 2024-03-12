import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: "user1",
      password: "$2a$10$jI0h2Qp1Q3ZNRmxwKPGq7OJxwLZVUgm9UWu8yH0RtX3vo3l5nNcfG",
    },
    {
      userId: 2,
      username: "user2",
      password: "$2a$10$kLg/3as.zVgP2BsD6GwUmukRROiR6TwKrOZ5RJbYgWwqbC/hZtP9O",
    },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find((u) => u.username === username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
