import type { ExpressionNode } from './expression-node';
import { IdentifierNode } from './identifier-node';

export class TypeAliasDeclarationNode {
  id: IdentifierNode;
  readonly type = 'TypeAliasDeclaration';
  readonly expression: ExpressionNode;

  constructor(name: string, expression: ExpressionNode) {
    this.id = new IdentifierNode(name);
    this.expression = expression;
  }
}