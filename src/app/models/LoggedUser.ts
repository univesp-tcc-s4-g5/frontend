export class LoggedUser {
    name: string;
    email: string;
    ra: string;
    loggedAt: Date;
    isAdmin: boolean;

    constructor(name: string, email: string, ra: string, loggedAt: Date, isAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.ra = ra;
        this.loggedAt = loggedAt;
        this.isAdmin = isAdmin;
    }

}
