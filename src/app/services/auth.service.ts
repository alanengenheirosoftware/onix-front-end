import { Injectable } from '@angular/core'
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserSession, ICognitoUserData, IAuthenticationDetailsData } from 'amazon-cognito-identity-js'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private cognitoUserPool!: CognitoUserPool

  constructor() {
    this.cognitoUserPool = new CognitoUserPool({
      UserPoolId: environment.awsCognito.userPoolId,
      ClientId: environment.awsCognito.clientId,
    })
  }

  isLoggedIn(): boolean {
    const cognitoUser: CognitoUser | null = this.cognitoUserPool.getCurrentUser()

    return !!cognitoUser
  }

  signin(username: string, password: string) {
    const authenticationData: IAuthenticationDetailsData = {
      Username: username,
      Password: password,
    }

    const authenticationDetails: AuthenticationDetails = new AuthenticationDetails(authenticationData)

    const userDataPool: ICognitoUserData = {
      Username: username,
      Pool: this.cognitoUserPool,
    }

    const cognitoUser: CognitoUser = new CognitoUser(userDataPool)

    return new Observable((observer) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session: CognitoUserSession) => {
          observer.next(session)
          observer.complete()
        },
        onFailure: (err: unknown) => {
          alert('Usuário ou senha inválidos')
          observer.error(err)
        },
        newPasswordRequired: (userAttributes: any) => {
          delete userAttributes.email_verified
          delete userAttributes.email

          cognitoUser.completeNewPasswordChallenge(password, userAttributes, {
            onSuccess: (session: CognitoUserSession) => {
              observer.next(session)
              observer.complete()
            },
            onFailure: (err: unknown) => {
              observer.error(err)
            },
          })
        },
      })
    })
  }
}
