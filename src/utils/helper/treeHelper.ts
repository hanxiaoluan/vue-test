
interface TreeHelperConfig {
    id: string;
    children: string;
    pid: string;
}

// const DEFAULT_CONFIG: TreeHelperConfig = {
//     id: 'id',
//     children: 'children',
//     pid: 'pid'
// }

export function filter<T = any>(
    tree: T[],
    fun: (n: T) => boolean,
    {
        children = 'children'
    }: Partial<TreeHelperConfig> = {}

): T[] {
    function listFilter(list: T[]) {
        return list.map((node: any) => ({ ...node })).filter(node => {
            node[children] = node[children] && listFilter(node[children])
            return fun(node) || (node[children] && node[children].length)
        })
    }
    return listFilter(tree)
}

export function forEach<T=any>(
    tree: T[],
    fun: (n: T) => any,
    {
        children = 'children'
    }: Partial<TreeHelperConfig> = {}
): void {
    const list: any[] = [...tree]
    for (let i = 0; i < list.length; i++) {
        fun(list[i])
        children && list[i][children] && list.splice(i + 1, 0, ...list[i][children])
    }
}

export function findPath<T=any>(
    tree: T[],
    fun: (n: T) => any,
    {
        children = 'children'
    }: Partial<TreeHelperConfig> = {}
): T|T[]|null {
    const path: T[] = []
    const list = [...tree]
    const visitedSet = new Set()
    while (list.length) {
        const node = list[0] as any
        if (visitedSet.has(node)) {
            path.pop()
            list.shift()
        } else {
            visitedSet.add(node)
            node[children!] && list.unshift(...node[children!])
            path.push(node)
            if (fun(node)) {
                return path
            }
        }
    }

    return null
}

