export const listToTree = (data, options = {}) => {
    const { idKey = 'id', parentKey = 'parent_id', childrenKey = 'children', parentValue = 0 } = toValue(options);
    let tree = [], childrenOf = {}, item, id, parentId;

    for (let i = 0, length = data.length; i < length; i++) {
        item = data[i];
        id = item[idKey];
        parentId = item[parentKey] || parentValue;
        // every item may have children
        childrenOf[id] = childrenOf[id] || [];
        // init its children
        item[childrenKey] = childrenOf[id];
        if (parentId != parentValue) {
            // init its parent's children object
            childrenOf[parentId] = childrenOf[parentId] || [];
            // push it into its parent's children object
            childrenOf[parentId].push(item);
        } else {
            tree.push(item);
        }
    };
    return tree;
}