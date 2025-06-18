import type { IdentifierStyle } from '../transformer/identifier-style';
import type { SymbolEntry } from '../transformer/symbol-collection';
import { SymbolCollection } from '../transformer/symbol-collection';
import { IdentifierNode } from './identifier-node';
import { LiteralNode } from './literal-node';

export type EnumStyle = 'runtime' | 'pojo';

type EnumMember = [key: string, value: LiteralNode<string>];

export class EnumDeclarationNode {
  readonly members: EnumMember[];
  id: IdentifierNode;
  readonly style: EnumStyle;
  readonly type = 'EnumDeclaration';

  constructor(
    name: string,
    literals: string[],
    style: EnumStyle,
    options?: { identifierStyle?: IdentifierStyle },
  ) {
    this.members = [];
    this.id = new IdentifierNode(name);
    this.style = style;

    const symbolType = style === 'runtime' ? 'RuntimeEnumMember' : 'PojoEnumMember';

    const symbolCollection = new SymbolCollection({
      entries: literals.map(
        (literal): SymbolEntry => [
          literal,
          { node: new LiteralNode(literal), type: symbolType },
        ],
      ),
      identifierStyle: options?.identifierStyle,
    });

    for (const { id, symbol } of symbolCollection.entries()) {
      if (symbol.type !== symbolType) {
        continue;
      }

      this.members.push([id, symbol.node]);
    }
  }
}