import { MinLength } from 'class-validator'

export class CreateAuthorDto {
    @MinLength(3)
    name : string
}
