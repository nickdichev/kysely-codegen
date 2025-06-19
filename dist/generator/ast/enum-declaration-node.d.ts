import type { IdentifierStyle } from '../transformer/identifier-style';
import { IdentifierNode } from './identifier-node';
import { LiteralNode } from './literal-node';
export type EnumStyle = 'runtime' | 'pojo';
type EnumMember = [key: string, value: LiteralNode<string>];
export declare class EnumDeclarationNode {
    readonly members: EnumMember[];
    id: IdentifierNode;
    readonly style: EnumStyle;
    readonly type = "EnumDeclaration";
    constructor(name: string, literals: string[], style: EnumStyle, options?: {
        identifierStyle?: IdentifierStyle;
    });
}
export {};
