import { ValidateTokenUseCase } from '../../domain/useCases/validate-token'
import { Decrypter } from '../contracts/cryptography/decrypter'

export class ValidateTokenService implements ValidateTokenUseCase {
  constructor (private readonly decrypter: Decrypter) {}
  async validate (token: string): Promise<boolean> {
    const object = await this.decrypter.decrypt(token)
    return !!object
  }
}
