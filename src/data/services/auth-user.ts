import { AuthUserModel } from '../../domain/models/auth-user'
import { AuthUserUseCase } from '../../domain/useCases/auth-user'
import { Encrypter } from '../contracts/cryptography/encrypter'
import { HasherComparer } from '../contracts/cryptography/hasher-comparer'
import { UserRepository } from '../contracts/repositories/user-repository'

export class AuthUserService implements AuthUserUseCase {
  constructor (private readonly userRepository: UserRepository, private readonly hasherComparer: HasherComparer, private readonly encrypter: Encrypter) {}
  async auth ({ email, password }: AuthUserModel): Promise<string | Error> {
    const user = await this.userRepository.findByEmail(email)
    if (!user) {
      return new Error('E-mail ou senha inválido!')
    }
    const passwordHashed = user.password
    const isPasswordValid = await this.hasherComparer.compare(password, passwordHashed)
    if (!isPasswordValid) {
      return new Error('E-mail ou senha inválido!')
    }
    const token = await this.encrypter.encrypt({ id: user.id })
    return token
  }
}
