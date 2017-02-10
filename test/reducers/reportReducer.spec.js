import reducer from '../../src/reducers/reportReducer';
import * as types from '../../src/actions/actionTypes';
import {columnDefsInitialState} from '../../src/config/gridConfig';

import Immutable from 'immutable';

describe('Report reducer specs', () => {
    let reportState;
    const initialState = Immutable.fromJS({
        data: [],
        error: null,
        reportId: null,
        columnDefs: columnDefsInitialState
    });

    it('should return the initial state', () => {
        reportState = reducer(undefined, {});
        reportState.should.deep.equal(initialState);
    });

    it('should handle REPORTS_FETCH_START', () => {
        reportState = reducer({}, {
            type: types.REPORTS_FETCH_START
        });
        reportState.should.deep.equal({});
    });

    it('should handle REPORTS_FETCH_SUCCESS', () => {
        reportState = reducer(initialState, {
            type: types.REPORTS_FETCH_SUCCESS,
            data: [{
                id: 1,
                name: 'Report 1'
            }]
        });

        Immutable.is(reportState, Immutable.fromJS({
            data: [{
                id: 1,
                name: 'Report 1'
            }],
            error: null,
            reportId: null,
            columnDefs: columnDefsInitialState
        })).should.be.true;
    });

    it('should handle REPORTS_FETCH_FAILED', () => {
        reportState = reducer(initialState, {
            type: types.REPORTS_FETCH_FAILED,
            error: 'Error occurred'
        });

        Immutable.is(reportState, Immutable.fromJS({
            data: [],
            error: 'Error occurred',
            reportId: null,
            columnDefs: columnDefsInitialState
        })).should.be.true;
    });

    it('should handle REPORTS_RESET', () => {
        reportState = reducer(initialState, {
            type: types.REPORTS_RESET
        });

        Immutable.is(reportState, initialState).should.be.true;
    });
});