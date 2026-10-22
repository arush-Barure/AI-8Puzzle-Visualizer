const assert=require('node:assert/strict');
const {UCS,neighbors,validate,randomState,parity}=require('../js/search.js');
const goal=[1,2,3,4,5,6,7,8,0];
function solve(start,g=goal){const s=new UCS(start,g);while(!s.done)s.step();return s;}
let count=0;function test(name,fn){fn();count++;console.log('PASS '+name);}
test('Reject duplicate and missing tiles',()=>{assert.equal(validate([1,1,2,3,4,5,6,7,0]),false);assert.throws(()=>new UCS([1],goal));});
test('Solved input costs zero',()=>{const s=solve(goal);assert.equal(s.path().length,1);assert.equal(s.current.g,0);assert.equal(s.expanded,1);});
test('One-move optimum',()=>assert.equal(solve([1,2,3,4,5,6,7,0,8]).current.g,1));
test('Two-move optimum and legal parent chain',()=>{const s=solve([1,2,3,4,0,6,7,5,8]),p=s.path();assert.equal(s.current.g,2);for(let i=1;i<p.length;i++)assert(neighbors(p[i-1].state).some(n=>n.state.join('')===p[i].state.join('')));});
test('PDF example with nonstandard goal costs five',()=>assert.equal(solve([2,8,3,1,6,4,7,0,5],[1,2,3,8,0,4,7,6,5]).current.g,5));
test('Parity mismatch is rejected before expansion',()=>{const s=solve([2,1,3,4,5,6,7,8,0]);assert.equal(s.found,false);assert.equal(s.expanded,0);});
test('Random walks preserve arbitrary-goal reachability',()=>{const g=[1,2,3,8,0,4,7,6,5];for(let i=0;i<100;i++)assert.equal(parity(randomState(g)),parity(g));});
test('Costs removed from frontier never decrease',()=>{const s=new UCS([1,3,6,5,0,2,4,7,8],goal);let prev=-1;while(!s.done){const x=s.step();if(x){assert(x.node.g>=prev);prev=x.node.g;}}assert.equal(s.current.g,8);});
test('Matches independently enumerated shortest distances through depth six',()=>{const queue=[goal],dist=new Map([[goal.join(''),0]]);for(let i=0;i<queue.length;i++){const a=queue[i],d=dist.get(a.join(''));if(d===6)continue;for(const n of neighbors(a)){const k=n.state.join('');if(!dist.has(k)){dist.set(k,d+1);queue.push(n.state);}}}for(const a of queue)assert.equal(solve(a).current.g,dist.get(a.join('')));console.log('Verified '+queue.length+' reachable states.');});
console.log(count+' tests passed.');
