import { ajax } from 'rxjs/ajax';
import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import * as a from '../actions';


const nameInputEpic = (action$, state$) => (
    action$.pipe(
        ofType('NAME_INPUT'),
        map(({name}) => a.changeName(name)),
        delay(1000)
    )
);


const epics = combineEpics(
    nameInputEpic
);

export default epics;
