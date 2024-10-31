export class URLProvider {
  static getBasePath(): string {
    // ISSUE: https://github.com/vercel/next.js/issues/42297
    // if (typeof window !== "undefined") return "";
    // const vc = process.env.VERCEL_URL;
    // if (vc) return `https://${vc}/api`;
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

  static getProfilePathUrl(username: string): string {
    return `${this.getBasePath()}/profile/${username}`;
  }
}
