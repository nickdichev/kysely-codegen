import type { IdentifierStyle } from '../transformer/identifier-style';
import { IdentifierNode } from './identifier-node';
import { LiteralNode } from './literal-node';
type PojoEnumMember = [key: string, value: LiteralNode<string>];
export declare class PojoEnumDeclarationNode {
    readonly members: PojoEnumMember[];
    id: IdentifierNode;
    readonly type = "PojoEnumDeclaration";
    constructor(name: string, literals: string[], options?: {
        identifierStyle?: IdentifierStyle;
    });
}
export {};
