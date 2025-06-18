import type { AliasDeclarationNode } from './alias-declaration-node';
import type { EnumDeclarationNode } from './enum-declaration-node';
import type { InterfaceDeclarationNode } from './interface-declaration-node';
import type { TypeAliasDeclarationNode } from './type-alias-declaration-node';

export class ExportStatementNode {
  readonly argument:
    | AliasDeclarationNode
    | InterfaceDeclarationNode
    | EnumDeclarationNode
    | TypeAliasDeclarationNode;
  readonly type = 'ExportStatement';

  constructor(
    argument:
      | AliasDeclarationNode
      | InterfaceDeclarationNode
      | EnumDeclarationNode
      | TypeAliasDeclarationNode,
  ) {
    this.argument = argument;
  }
}
