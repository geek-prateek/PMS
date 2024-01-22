export class RegisterUserDetails{
    name: string | null | undefined;
    email: string | null | undefined;
    username: string | null | undefined;
    dob: Date | null | undefined;
    gender: string | null | undefined;
    department: string | null | undefined;
    userRole: string | null | undefined;
    doj: Date | null | undefined;
    address: Address | null | undefined;
    
    constructor(name: string, email: string, username: string, dob: Date, gender: string, department: string, userRole: string, doj: Date, street: string, city: string, state: string, country: string, mobile: number){
      this.name = name;
      this.email = email;
      this.username = username;
      this.dob = dob;
      this.gender = gender;
      this.department = department;
      this.userRole = userRole;
      this.doj = doj;
      this.address = {
        street: street,
        city: city,
        state: state,
        country: country,
        mobile: mobile,
      }
    }
}

export class Address{
    street: string | null | undefined;
    city: string | null | undefined;
    state: string | null | undefined;
    country: string | null | undefined;
    mobile: number | null | undefined;
}