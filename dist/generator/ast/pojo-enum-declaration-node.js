"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PojoEnumDeclarationNode = void 0;
const symbol_collection_1 = require("../transformer/symbol-collection");
const identifier_node_1 = require("./identifier-node");
const literal_node_1 = require("./literal-node");
class PojoEnumDeclarationNode {
    constructor(name, literals, options) {
        this.type = 'PojoEnumDeclaration';
        this.members = [];
        this.id = new identifier_node_1.IdentifierNode(name);
        const symbolCollection = new symbol_collection_1.SymbolCollection({
            entries: literals.map((literal) => [
                literal,
                { node: new literal_node_1.LiteralNode(literal), type: 'PojoEnumMember' },
            ]),
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
exports.PojoEnumDeclarationNode = PojoEnumDeclarationNode;
//# sourceMappingURL=pojo-enum-declaration-node.js.map