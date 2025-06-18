import type { IdentifierStyle } from '../transformer/identifier-style';
import type { SymbolEntry } from '../transformer/symbol-collection';
import { SymbolCollection } from '../transformer/symbol-collection';
import { IdentifierNode } from './identifier-node';
import { LiteralNode } from './literal-node';

type PojoEnumMember = [key: string, value: LiteralNode<string>];

export class PojoEnumDeclarationNode {
  readonly members: PojoEnumMember[];
  id: IdentifierNode;
  readonly type = 'PojoEnumDeclaration';

  constructor(
    name: string,
    literals: string[],
    options?: { identifierStyle?: IdentifierStyle },
  ) {
    this.members = [];
    this.id = new IdentifierNode(name);

    const symbolCollection = new SymbolCollection({
      entries: literals.map(
        (literal): SymbolEntry => [
          literal,
          { node: new LiteralNode(literal), type: 'PojoEnumMember' },
        ],
      ),
      identifierStyle: options?.identifierStyle,
    });

    for (const { id, symbol } of symbolCollection.entries()) {
      if (symbol.type !== 'PojoEnumMember') {
        continue;
      }

      this.members.push([id, symbol.node]);
    }
  }
}