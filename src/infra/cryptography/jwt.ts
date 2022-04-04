
import * as jwt from 'jsonwebtoken'
import { Decrypter } from '../../data/contracts/cryptography/decrypter'
import { Encrypter } from '../../data/contracts/cryptography/encrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  async encrypt (values: object): Promise<string> {
    return jwt.sign(values, process.env.SECRET_KEY, {
      expiresIn: '1h'
    })
  }

  async decrypt (token: string): Promise<any> {
    try {
      return jwt.verify(token, process.env.SECRET_KEY) as any
    } catch (error) {
      return null
    }
  }
}
