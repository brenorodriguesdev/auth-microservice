import bcrypt from 'bcrypt'
import { HasherComparer } from '../../data/contracts/cryptography/hasher-comparer'

export class BcryptAdapter implements HasherComparer {
  async compare (text: string, hashText: string): Promise<boolean> {
    return await bcrypt.compare(text, hashText)
  }
}
