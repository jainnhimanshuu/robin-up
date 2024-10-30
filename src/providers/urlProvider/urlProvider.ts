export class URLProvider {
  static getBasePath(): string {
    return "/api";
  }

  static getLoginUrl(): string {
    return `${this.getBasePath()}/auth/login`;
  }

  static getSignupUrl(): string {
    return `${this.getBasePath()}/auth/signup`;
  }

  static getCheckUsernameUrl(): string {
    return `${this.getBasePath()}/auth/check-username`;
  }
}
