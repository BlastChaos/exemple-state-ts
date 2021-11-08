import { Phone } from '../src/Phone';
import 'jest-extended';
  
let phone: Phone;



// https://stackoverflow.com/questions/133214/is-there-a-typical-state-machine-implementation-pattern/44955234#44955234
describe('PhoneStateTest', () => {

  beforeEach(async () => {
    phone = new Phone("123-456-7890");
  })

  it('get number', () => {
    expect(phone.number).toEqual("123-456-7890");
  });

  it('Devraus commencer avec un etat Fermer', () => {
    expect(phone.state).toEqual("ScreenOff");
  });

  it('Devrais devenir un etat allumer quand on pese le bouton et fermer quand on repèse', () => {
    phone.pressButton();
    expect(phone.state).toEqual("ScreenOn");
    phone.pressButton();
    expect(phone.state).toEqual("ScreenOff");
  });

  it('Devraus commencer avec un etat Fermer', () => {
    expect(phone.state).toEqual("ScreenOff");
  });

  it('Devraus etre en charge quand on plug et off quand on enleve', () => {
    phone.plug(true);
    expect(phone.state).toEqual("ScreenCharging");
    phone.plug(false);
    expect(phone.state).toEqual("ScreenOff");
  });

  // https://jestjs.io/docs/using-matchers
  // it('get initial state'), () => {
  //   expect(typeof (phone.state)).toEqual(ScreenOff);
  // }

  // it('Plug power'), () => {
  //   phone.plugPower();
  //   expect(typeof (phone.state)).toEqual(ScreenCharging);
  // }

  // it('un Plug power'), () => {
  //   phone.plugPower();
  //   phone.unplugPower();
  //   expect(typeof (phone.state)).toEqual(ScreenCharging);
  // }

});

