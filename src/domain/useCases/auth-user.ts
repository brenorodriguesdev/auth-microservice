import { AuthUserModel } from '../models/auth-user'

export interface AuthUserUseCase {
  auth: (data: AuthUserModel) => Promise<string | Error>
}
