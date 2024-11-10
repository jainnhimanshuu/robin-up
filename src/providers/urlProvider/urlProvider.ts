export class URLProvider {
  static getBasePath(): string {
    return "/api";
  }

  static getFBBaseUrl(): string {
    return "https://www.facebook.com/v21.0";
  }

  static getFBGraphUrl(): string {
    return "https://graph.facebook.com/v21.0";
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

  static getProfilePathUrl(username: string): string {
    return `${this.getBasePath()}/profile/${username}`;
  }
}
