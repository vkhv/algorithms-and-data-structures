/** @flow */

import search from '../src/main';

const graph: {[string]: Array<string>} = {};
graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

describe('bread-first_search', () => {
  test('simple one', () => {
    expect(search('you', graph)).toBe('thom is a mango seller!');
  });
});
