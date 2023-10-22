interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

//递归
// type InOrderTraversal<T extends TreeNode | null, NT extends TreeNode = NonNullable<T>> =
//   T extends TreeNode
//   ? [...InOrderTraversal<NT['left']>, NT['val'], ...InOrderTraversal<NT['right']>]
//   : []
//取消类型分发
type InOrderTraversal<T extends TreeNode | null> =
  [T] extends [TreeNode]
  ? [...InOrderTraversal<T['left']>, T['val'], ...InOrderTraversal<T['right']>]
  : []