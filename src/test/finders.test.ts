import { describe, inst, it } from '@efekos/es-test/bin/testRunner.js';
import { DefaultTheNumberFinders } from '../finders/index.js';
import { Finder } from '../types/index.js';
import { HandlerFn } from '@efekos/es-test/bin/types.js';
import { expect } from 'chai';

describe('Finder tests',()=>{

    function finderType(f:Finder,n:number,t:string):HandlerFn {
        return ()=>{
            const res = f.find(n);
            expect(res).to.be.a('array').to.have.lengthOf(1);
            expect(res[0]).to.be.a('object').to.have.property('type').to.be.a('string').to.be.equal(t);
        };
    }

    function none(f:Finder,n:number):HandlerFn {
        return ()=>{
            const res = f.find(n);
            expect(res).to.be.deep.equal([]);
        };
    }

    it('is even',()=>{
        
        inst(finderType(DefaultTheNumberFinders.IsEven,2,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,4,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,6,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,8,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,10,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,12,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,14,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,16,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,18,'even'));
        inst(finderType(DefaultTheNumberFinders.IsEven,20,'even'));
        inst(none(DefaultTheNumberFinders.IsEven,1));
        inst(none(DefaultTheNumberFinders.IsEven,3));
        inst(none(DefaultTheNumberFinders.IsEven,5));
        inst(none(DefaultTheNumberFinders.IsEven,7));
        inst(none(DefaultTheNumberFinders.IsEven,9));
        inst(none(DefaultTheNumberFinders.IsEven,11));
        inst(none(DefaultTheNumberFinders.IsEven,13));
        inst(none(DefaultTheNumberFinders.IsEven,2465903));
        inst(none(DefaultTheNumberFinders.IsEven,17));
        inst(none(DefaultTheNumberFinders.IsEven,19));
        inst(none(DefaultTheNumberFinders.IsEven,21));
        inst(none(DefaultTheNumberFinders.IsEven,23));
        inst(none(DefaultTheNumberFinders.IsEven,25));
        inst(none(DefaultTheNumberFinders.IsEven,3968723984653));
        inst(none(DefaultTheNumberFinders.IsEven,3496929459));
        inst(none(DefaultTheNumberFinders.IsEven,25));
        inst(none(DefaultTheNumberFinders.IsEven,25));
        inst(finderType(DefaultTheNumberFinders.IsEven,3958932,'even'));

    },true);

    it('is odd',()=>{

        inst(finderType(DefaultTheNumberFinders.IsOdd,1,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,3,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,5,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,7,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,9,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,11,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,13,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,15,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,17,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,3456930543,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,2493583599,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,2496583453,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,2469549333,'odd'));
        inst(finderType(DefaultTheNumberFinders.IsOdd,6790898231,'odd'));
        inst(none(DefaultTheNumberFinders.IsOdd,2352434));
        inst(none(DefaultTheNumberFinders.IsOdd,3524322));
        inst(none(DefaultTheNumberFinders.IsOdd,5746988));
        inst(none(DefaultTheNumberFinders.IsOdd,3623462));
        inst(none(DefaultTheNumberFinders.IsOdd,6456774));
        inst(none(DefaultTheNumberFinders.IsOdd,4969288));
        inst(none(DefaultTheNumberFinders.IsOdd,3496940));

    },true);

    it('is prime',()=>{

        inst(finderType(DefaultTheNumberFinders.IsPrime,2,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,3,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,5,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,7,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,11,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,13,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,17,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,19,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,23,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,29,'prime'));
        inst(finderType(DefaultTheNumberFinders.IsPrime,31,'prime'));
        inst(none(DefaultTheNumberFinders.IsPrime,39));
        inst(none(DefaultTheNumberFinders.IsPrime,1));
        inst(none(DefaultTheNumberFinders.IsPrime,-23456));
        inst(none(DefaultTheNumberFinders.IsPrime,-34));
        inst(none(DefaultTheNumberFinders.IsPrime,4));
        inst(none(DefaultTheNumberFinders.IsPrime,6));
        inst(none(DefaultTheNumberFinders.IsPrime,6));
        inst(none(DefaultTheNumberFinders.IsPrime,345));
        inst(none(DefaultTheNumberFinders.IsPrime,346934));

    },true);

    it('is square',()=>{

        inst(finderType(DefaultTheNumberFinders.IsSquare,1,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,4,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,9,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,16,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,25,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,36,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,49,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,64,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,81,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,100,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,121,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,144,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,169,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,196,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,225,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,256,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,324,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,625,'square'));
        inst(finderType(DefaultTheNumberFinders.IsSquare,400,'square'));
        inst(none(DefaultTheNumberFinders.IsSquare,512));
        inst(none(DefaultTheNumberFinders.IsSquare,346));
        inst(none(DefaultTheNumberFinders.IsSquare,35784));
        inst(none(DefaultTheNumberFinders.IsSquare,35732));
        inst(none(DefaultTheNumberFinders.IsSquare,247567));
        inst(none(DefaultTheNumberFinders.IsSquare,356783));
        inst(none(DefaultTheNumberFinders.IsSquare,24367));

    },true);

    it('funi',()=>{

        inst(finderType(DefaultTheNumberFinders.Funny,31,'funny'));
        inst(finderType(DefaultTheNumberFinders.Funny,62,'funny'));
        inst(finderType(DefaultTheNumberFinders.Funny,69,'funny'));
        inst(finderType(DefaultTheNumberFinders.Funny,420,'funny'));
        inst(none(DefaultTheNumberFinders.Funny,354));
        inst(none(DefaultTheNumberFinders.Funny,35));
        inst(none(DefaultTheNumberFinders.Funny,32));
        inst(none(DefaultTheNumberFinders.Funny,123));
        inst(none(DefaultTheNumberFinders.Funny,410));

    },true);

    function dividableCase(n:number,ns:number[]){
        return ()=> {
            const res = DefaultTheNumberFinders.Dividables.find(n);
            res.forEach(i=>{
                expect(i).to.be.a('object').to.have.property('type').to.be.a('string').to.be.equal('dividable');
                expect(i).to.have.property('message').to.be.a('string').to.be.match(/^Is dividable by \d+\.$/);
                const me = i.message.match(/^Is dividable by (\d+)\.$/);
                expect(me).to.be.a('array').to.have.lengthOf(2);
                if(!me) return;
                const num = parseInt(me[1]);
                expect(ns).to.include(num);
            });
        };
    }

    it('dividables',()=>{

        inst(dividableCase(10,[5,2]));
        inst(dividableCase(25,[5]));
        inst(dividableCase(31,[]));
        inst(dividableCase(12,[2,3,4,6]));
        inst(dividableCase(16,[2,4,8]));
        inst(dividableCase(15,[3,5]));

    },true);

});