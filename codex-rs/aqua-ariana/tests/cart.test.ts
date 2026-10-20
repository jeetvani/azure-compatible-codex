import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCart, parseQuantity, setCartQuantity, removeCartItem, displaySubtotal, verifiedProduct } from '../lib/cart.ts';
import { getCheckoutReadiness } from '../lib/checkout-readiness.ts';
import { products, type Product } from '../content/catalog.ts';
// Test-only synthetic values. Never imported by the application.
const product: Product = { id: 'fixture', verified: true, name: 'Fixture', capacity: 'Test capacity', sellingUnit: 'Test unit', priceMinor: 125, currency: {code: 'EUR', minorUnitDigits: 2} };
const catalog = [product];
test('shipped catalog is empty and checkout has no payable amount', () => {
 assert.deepEqual(products, []);
 assert.deepEqual(getCheckoutReadiness(), { canCheckout:false, canPay:false, payableTotal:null, paymentConnected:false });
 assert.deepEqual(parseCart('[{"productId":"fixture","quantity":1}]',products),[]);
});
test('strict whole quantities reject malformed and unsafe input', () => {
 for (const value of ['', '0', '-1', '1.5', '1e2', ' 2', '2 ', '01', 'Infinity', '9007199254740992']) assert.equal(parseQuantity(value),null,value);
 assert.equal(parseQuantity('2'),2);assert.equal(parseQuantity('3',2),null);
});
test('restoration drops invalid JSON, IDs, unverified data, quantities and duplicates', () => {
 for (const value of [null,'{','null','{}']) assert.deepEqual(parseCart(value,catalog),[]);
 assert.deepEqual(parseCart(JSON.stringify([{productId:'unknown',quantity:1},{productId:'fixture',quantity:2,secret:'discard'},{productId:'fixture',quantity:3}]),catalog),[{productId:'fixture',quantity:2}]);
 for (const quantity of [0,-1,1.5,'2',null,Number.MAX_SAFE_INTEGER+1]) assert.deepEqual(parseCart(JSON.stringify([{productId:'fixture',quantity}]),catalog),[]);
 assert.deepEqual(parseCart('[{"productId":"fixture","quantity":2}]',[{...product,verified:false}]),[]);
 assert.deepEqual(parseCart('[{"productId":"fixture","quantity":2}]',[{...product,maximumQuantity:1}]),[]);
});
test('local update, removal and persistence round trip', () => {
 const cart = setCartQuantity([],'fixture',2,catalog);
 assert.deepEqual(parseCart(JSON.stringify(cart),catalog),cart);
 assert.equal(setCartQuantity(cart,'fixture',0,catalog),cart);
 assert.equal(setCartQuantity(cart,'unknown',1,catalog),cart);
 assert.deepEqual(setCartQuantity(cart,'fixture',3,catalog),[{productId:'fixture',quantity:3}]);
 assert.deepEqual(removeCartItem(cart,'fixture'),[]);
});
test('subtotals require verified common currency and safe integer amounts', () => {
 assert.equal(displaySubtotal([],catalog),null);
 assert.deepEqual(displaySubtotal([{productId:'fixture',quantity:2}],catalog),{minor:250,currency:product.currency});
 const other = {...product,id:'other',currency:{code:'GBP',minorUnitDigits:2}};
 assert.equal(displaySubtotal([{productId:'fixture',quantity:1},{productId:'other',quantity:1}],[product,other]),null);
 assert.equal(displaySubtotal([{productId:'fixture',quantity:Number.MAX_SAFE_INTEGER}],catalog),null);
 assert.equal(verifiedProduct({...product,priceMinor:1.5}),false);
 assert.equal(verifiedProduct({...product,capacity:''}),false);
});
