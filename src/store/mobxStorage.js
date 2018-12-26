import { observable, action } from 'mobx';
import { setDate } from '../actions/appActions';


export class MobXStorage{
    @observable date = null;
    @observable str = '234';

    @action.bound setDate(date){
        this.date = date;
    }

    @action.bound setString(str){
        this.str = str;
    }
}

export default { 'my-storage': new MobXStorage() };
