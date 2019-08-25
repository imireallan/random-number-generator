import { Injectable } from '@angular/core';
import { PhoneNumber } from './shared/phone-number';

@Injectable({
  providedIn: 'root'
})
export class RandomGenerateServiceService {
  maxNumber: number;
  minNumber: number;
  phoneNumberList: PhoneNumber[];

  private randomNumberGenerator(): number {
    /* istanbul ignore next */
    return Math.floor(Math.random() * (1000000000 - 100000000)) + 100000000;
  }

  public generatePhoneNumbers(quantity: number): void {
    this.phoneNumberList = [];
    const phoneNumbers = [];
    let i: number;
    /* istanbul ignore next */
    for (i = 0; i < quantity; i++) {
      /* istanbul ignore next */
      let phoneNumber = this.randomNumberGenerator();
      if (phoneNumbers.includes(phoneNumber)) {
        phoneNumber = this.randomNumberGenerator();
      }
      phoneNumbers.push(phoneNumber);
      this.phoneNumberList.push({
        id: i + 1,
        number: '0'.concat(phoneNumber.toString())
      });
    }
    /* istanbul ignore next */
    this.maxNumber = Math.max(...phoneNumbers);
    /* istanbul ignore next */
    this.minNumber = Math.min(...phoneNumbers);
  }
}
