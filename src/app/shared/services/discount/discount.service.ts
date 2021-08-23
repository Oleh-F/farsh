import { Injectable } from '@angular/core';
import { IDiscount } from '../../models/discount/discount.model';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
public arrDiscounts: Array<IDiscount> = [
  {
    id: 1,
    title: 'ФАРШ НАРАХОВУЄ БОНУСИ ВІД КОЖНОГО ЗАМОВЛЕННЯ',
    text: `Компанія ФАРШ запустила бонусно-накопичувальну систему для своїх постійних а також всіх нових клієнтів у розмірі 3% від суми в чеку на тип замовлення Доставка Курєром, 1% від суми в чеку на тип замовлення Доставка Самовивіз

    -бонуси нараховуються після закриття замовлення зі сторони компанії
    
    -бонуси будуть нараховані тільки зареєстрованим користувачам, які увійшли у свій кабінет https://farsh.in.ua/my-account/
    
    -розрахунок бонусами можливий в еквіваленті – не більше 30% (доставка курєром) і не більше 15% (самовивіз)
    
    –термін дії використання бонусів 6 місяців(180 днів), після чого бонуси згорають.
    
    Важливо: Номер при реєстрації і в Особистому кабінеті мають співпадати(заборонено змінювати)`,
    image: 'https://farsh.in.ua/wp-content/uploads/2020/12/DSC04807-scaled-e1608636715892-655x400.jpg'
  }
];
  constructor() { }
}
