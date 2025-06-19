"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumDeclarationNode = void 0;
const symbol_collection_1 = require("../transformer/symbol-collection");
const identifier_node_1 = require("./identifier-node");
const literal_node_1 = require("./literal-node");
class EnumDeclarationNode {
    constructor(name, literals, style, options) {
        this.type = 'EnumDeclaration';
        this.members = [];
        this.id = new identifier_node_1.IdentifierNode(name);
        this.style = style;
        const symbolType = style === 'runtime' ? 'RuntimeEnumMember' : 'PojoEnumMember';
        const symbolCollection = new symbol_collection_1.SymbolCollection({
            entries: literals.map((literal) => [
                literal,
                { node: new literal_node_1.LiteralNode(literal), type: symbolType },
            ]),
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
exports.EnumDeclarationNode = EnumDeclarationNode;
//# sourceMappingURL=enum-declaration-node.js.map