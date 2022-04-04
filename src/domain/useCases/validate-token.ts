export interface ValidateTokenUseCase {
  validate: (token: string) => Promise<boolean>
}
