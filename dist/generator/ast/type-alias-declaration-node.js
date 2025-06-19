"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeAliasDeclarationNode = void 0;
const identifier_node_1 = require("./identifier-node");
class TypeAliasDeclarationNode {
    constructor(name, expression) {
        this.type = 'TypeAliasDeclaration';
        this.id = new identifier_node_1.IdentifierNode(name);
        this.expression = expression;
    }
}
exports.TypeAliasDeclarationNode = TypeAliasDeclarationNode;
//# sourceMappingURL=type-alias-declaration-node.js.map