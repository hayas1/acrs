var searchIndex = JSON.parse('{\
"aclib":{"doc":"Rust practice: Data structure and AlgorithmsThe goal is to…","i":[[0,"collections","aclib","",null,null],[0,"counter","aclib::collections","",null,null],[8,"Counter","aclib::collections::counter","",null,null],[10,"new","","",0,[[["iterator",8]]]],[10,"count","","",0,[[]]],[10,"most_common","","",0,[[],["vec",3]]],[0,"sort","aclib::collections","",null,null],[5,"bubble_sort","aclib::collections::sort","O(n^2), stable sorted by bubble sort",null,[[]]],[5,"selection_sort","","O(n^2), stable sorted by selection sort",null,[[]]],[5,"insertion_sort","","O(n + inversion_number(data)), stable sorted by insertion…",null,[[]]],[5,"heap_sort","","O(n log(n)), sorted by heap sort",null,[[]]],[5,"merge_sort","","O(n log(n)), stable sorted by merge sort",null,[[]]],[5,"quick_sort","","O(n log(n)), sorted data by quick sort",null,[[]]],[0,"sorted_vec","aclib::collections","",null,null],[3,"SortedVec","aclib::collections::sorted_vec","",null,null],[11,"new","","O(1), get empty vec",1,[[]]],[11,"iter","","O(1), get iterator of vec",1,[[],["iter",3]]],[11,"insert","","O(n), insert element",1,[[]]],[11,"max_elements","","O(k), max k elements",1,[[]]],[11,"min_elements","","O(k), max k elements",1,[[]]],[0,"cumsum","aclib","",null,null],[0,"cumsum1d","aclib::cumsum","",null,null],[3,"CumSum","aclib::cumsum::cumsum1d","",null,null],[11,"new","","O(n), create n+1 size vec for cumsum",2,[[]]],[11,"interval_sum","","O(1), calculate half-open interval summation [l, r)",2,[[]]],[0,"imos1d","aclib::cumsum","",null,null],[3,"Imos1D","aclib::cumsum::imos1d","",null,null],[11,"new","","O(n), create n+1 size vec for imos 1d",3,[[["option",4]]]],[11,"sum_timing","","O(1), calculate sum of timing t",3,[[]]],[0,"distance","aclib","",null,null],[0,"levenshtein","aclib::distance","",null,null],[5,"levenshtein_distance","aclib::distance::levenshtein","O(nm), calculate edit distance between sequence a and…",null,[[]]],[0,"manhattan_chebyshev","aclib::distance","",null,null],[5,"manhattan_distance_2d","aclib::distance::manhattan_chebyshev","O(1), calculate manhattan distance between two point of…",null,[[],[["copy",8],["integer",8]]]],[5,"rotate_45","","O(n), 45-degree rotation, manhattan distance become to be…",null,[[],["vec",3]]],[5,"chebyshev_distance_2d","","O(1), calculate chebyshev distance between two point of…",null,[[],[["copy",8],["integer",8]]]],[5,"manhattan_distance","","O(n), calculate manhattan distance between two point of…",null,[[],[["copy",8],["integer",8]]]],[5,"chebyshev_distance","","O(n), calculate chebyshev distance between two point of…",null,[[],[["copy",8],["integer",8]]]],[0,"graph","aclib","",null,null],[0,"with_petgraph","aclib::graph","",null,null],[0,"arbitrary","aclib::graph::with_petgraph","example of how to use petgraph::Graph::from_edges",null,null],[0,"grid","","",null,null],[5,"field_to_directed_grid","aclib::graph::with_petgraph::grid","O(hw), make directed grid like graph from map (\'.\' is…",null,[[]]],[0,"search","aclib::graph::with_petgraph","",null,null],[0,"without_petgraph","aclib::graph","",null,null],[0,"search","aclib::graph::without_petgraph","",null,null],[0,"structure","","",null,null],[3,"AdjacencyList","aclib::graph::without_petgraph::structure","weighted/unweighted and directed/undirected graph structure",null,null],[4,"Undirected","","",null,null],[4,"Directed","","",null,null],[4,"Unweighted","","",null,null],[4,"Weighted","","",null,null],[13,"Weight","","",4,null],[11,"new_unweighted_undirected","","O(m), convert sequence of edges(unweighted, undirected) to…",5,[[]]],[11,"new_unweighted_directed","","O(m), convert sequence of edges(unweighted, undirected) to…",5,[[]]],[11,"new_weighted_undirected","","O(m), convert sequence of edges(weighted, undirected) to…",5,[[]]],[11,"new_weighted_directed","","O(m), convert sequence of edges(weighted, undirected) to…",5,[[]]],[11,"weight","","O(1), get weight of edge",5,[[]]],[11,"neighbors","","O(1), get node\'s neighbors set reference",5,[[],["hashset",3]]],[11,"nodes_len","","O(1), number of nodes",5,[[]]],[11,"add_node","","O(1), add node and return its index",5,[[]]],[11,"remove_node","","O(1), remove node and return its neighbors if possible…",5,[[],[["option",4],["hashset",3]]]],[0,"integer","aclib","",null,null],[0,"counting","aclib::integer","",null,null],[3,"Counting","aclib::integer::counting","",null,null],[11,"new","","O(n), ready to compute combination(n,k) mod p, where p is…",6,[[]]],[11,"factorial","","O(1), compute n! mod p",6,[[]]],[11,"permutation","","O(1), compute nPk mod p",6,[[]]],[11,"combination","","O(1), compute nCk mod p",6,[[]]],[11,"combination_with_repetition","","O(1), compute nHk mod p",6,[[]]],[0,"gcd","aclib::integer","",null,null],[5,"gcd_recursive","aclib::integer::gcd","O(|v| log(min(v)), calculate gcd recursively",null,[[["vec",3]],[["copy",8],["integer",8]]]],[5,"lcm_recursive","","O(|v| log(min(v))), calculate lcm recursively",null,[[["vec",3]],[["copy",8],["integer",8]]]],[0,"modulo","aclib::integer","",null,null],[5,"mod_pow","aclib::integer::modulo","O(log(b)), calculate a^b % modulo",null,[[["integer",8],["copy",8]],[["copy",8],["integer",8]]]],[5,"mod_pow_u64","","O(log(b)), calculate a^b % modulo",null,[[]]],[5,"ex_euclid","","O(log(min(a, b))), calculate pair (gcd(a,b), x, y) such…",null,[[["integer",8],["copy",8],["signed",8]]]],[5,"inverse_mod_mul","","O(log(min(a, modulo))), calculate inverse element of a in…",null,[[["integer",8],["copy",8],["signed",8]],[["copy",8],["integer",8],["option",4],["signed",8]]]],[0,"prime","aclib::integer","",null,null],[5,"sieve_of_eratosthenes","aclib::integer::prime","O(n log(log(n))), calculate n size vec, which vec[i] mean…",null,[[],["vec",3]]],[5,"primes","","O(n log(log(n))), calculate vec of primes from 0 to max",null,[[],["vec",3]]],[5,"fast_primes","","O(n)...?, calculate vec of primes from 0 to max",null,[[],["vec",3]]],[5,"min_primes","","O(n log(log(n))), calculate vec, which vec[i] mean…",null,[[],["vec",3]]],[5,"factorization","","O(sqrt(n)), calculate prime factorization of n",null,[[],["hashmap",3]]],[5,"factorization_with_min_primes","","O(log(n)), calculate prime factorization of n, with…",null,[[],["hashmap",3]]],[5,"devisors","","O(sqrt(n)), calculate vec of devisors",null,[[],["vec",3]]],[0,"sort","aclib::integer","",null,null],[5,"counting_sorted","aclib::integer::sort","O(n + (max(data)-min(data))), return stable sorted data.",null,[[],[["copy",8],["integer",8],["asprimitive",8],["vec",3]]]],[5,"counting_sorted_with","","O(n + (max(f(data))-min(f(data)))), return stable sorted…",null,[[],["vec",3]]],[5,"radix_sorted","","O(n(log(max(data))), return stable sorted data.",null,[[],[["copy",8],["integer",8],["asprimitive",8],["vec",3]]]],[5,"radix_sorted_with","","O(n(log(max(f(data)))), return stable sorted data.",null,[[],["vec",3]]],[0,"knapsack","aclib","",null,null],[0,"dp","aclib::knapsack","",null,null],[5,"knapsack_dp_value","aclib::knapsack::dp","O(sum(v)n), knapsack capacity is c, value of pi is v[i],…",null,[[["integer",8],["copy",8]],[["vec",3],["vec",3]]]],[5,"knapsack_dp_value_solve","","O(sum(v)n), solve knapsack with value-dp",null,[[["integer",8],["copy",8]]]],[5,"knapsack_dp_weight","","O(cn), knapsack capacity is c, value of pi is v[i], weight…",null,[[],[["vec",3],["vec",3]]]],[5,"dp_weight_with_backtrack","","O(cn), compute vec of products from table made by…",null,[[],["vec",3]]],[0,"meet_in_the_middle","aclib::knapsack","",null,null],[5,"knapsack_half_enumerate","aclib::knapsack::meet_in_the_middle","O(2^(n/2)), knapsack capacity is c, value of pi is v[i],…",null,[[]]],[0,"solver","aclib::knapsack","",null,null],[5,"knapsack","aclib::knapsack::solver","",null,[[]]],[0,"segtree","aclib","",null,null],[0,"lazy_segtree","aclib::segtree","",null,null],[0,"addtree","aclib::segtree::lazy_segtree","",null,null],[3,"AddTree","aclib::segtree::lazy_segtree::addtree","",null,null],[11,"new","","O(n), create segment tree. (e is identity element for a…",7,[[]]],[11,"leaf_offset","","O(1), get beginning index of the segment tree leaf.",7,[[]]],[11,"num_of_leaf","","O(1), get size of leaves",7,[[]]],[11,"update_range","","O(log(n)), update the half interval [l, r) with add x.",7,[[]]],[11,"recursive_update_range","","O(log^2(n))?, set lazy value from root to leaf",7,[[]]],[11,"query","","O(log^2(n))?, calculate half-open interval summation from…",7,[[]]],[11,"recursive_query","","O(log^2(n))?, calculate summation from root to leaf.",7,[[]]],[11,"propagation","","O(log(n))?, propagate lazy value to children and ancestors",7,[[]]],[0,"non_copy","aclib::segtree","",null,null],[3,"SegmentTree","aclib::segtree::non_copy","",null,null],[11,"from","","O(n), create segment tree, note that this method requires…",8,[[["vec",3]]]],[11,"leaf_offset","","O(1), get beginning index of the segment tree leaf.",8,[[]]],[11,"update","","O(log(n)), set leaf[k] = x, and update segment tree.…",8,[[]]],[11,"update_with","","O(log(n)), update leaf[k] by f(leaf[k]), and update…",8,[[]]],[11,"swap","","O(log(n)), swap leaf[k] and leaf[l], and update segment…",8,[[]]],[11,"update_parents","","O(log(n)), update segment tree. (non-recursive)",8,[[]]],[11,"query","","O(log(n)), calculate f(l, l+1, ..., r-1). note the half…",8,[[]]],[11,"bisect_left","","O(log^2(n)), search the leftmost leaf where cmp(x) is true…",8,[[],["option",4]]],[11,"bisect_right","","O(log^2(n)), search the rightmost leaf where cmp(x) is…",8,[[],["option",4]]],[0,"non_recursive","aclib::segtree","",null,null],[3,"SegmentTree","aclib::segtree::non_recursive","",null,null],[11,"new","","O(n), create segment tree. (e is identity element for a…",9,[[]]],[11,"leaf_offset","","O(1), get beginning index of the segment tree leaf.",9,[[]]],[11,"num_of_leaf","","O(1), get size of leaves",9,[[]]],[11,"update","","O(log(n)), set leaf[k] = x, and update segment tree.…",9,[[]]],[11,"update_with","","O(log(n)), update leaf[k] by f(leaf[k]), and update…",9,[[]]],[11,"swap","","O(log(n)), swap leaf[k] and leaf[l], and update segment…",9,[[]]],[11,"query","","O(log(n)), calculate f(l, l+1, ..., r-1). note the half…",9,[[]]],[11,"bisect_left","","O(log^2(n)), search the leftmost leaf where cmp(x) is true…",9,[[],["option",4]]],[11,"bisect_right","","O(log^2(n)), search the rightmost leaf where cmp(x) is…",9,[[],["option",4]]],[0,"recursive","aclib::segtree","",null,null],[3,"SegmentTree","aclib::segtree::recursive","",null,null],[11,"new","","O(n), create segment tree. (e is identity element for a…",10,[[]]],[11,"leaf_offset","","O(1), get beginning index of the segment tree leaf.",10,[[]]],[11,"num_of_leaf","","O(1), get size of leaves.",10,[[]]],[11,"left_child","","O(1), get left child index of node x.",10,[[]]],[11,"right_child","","O(1), get right child index of node x.",10,[[]]],[11,"parent","","O(1), get parent index of node x.",10,[[]]],[11,"root","","O(1), get root index.",10,[[]]],[11,"is_root","","O(1), either node x is root or not.",10,[[]]],[11,"update","","O(log(n)), update segment tree, leaf[k] = x.",10,[[]]],[11,"update_with","","O(log(n)), update leaf[k] by f(leaf[k]), and update…",10,[[]]],[11,"recursive_update","","O(log(i)), update from leaf to root.",10,[[]]],[11,"query","","O(log(n)), calculate f(l, l+1, ..., r-1). note the half…",10,[[]]],[11,"recursive_query","","O(log(n)-log(node)), calculate from root to leaf.",10,[[]]],[11,"bisect_left","","O(log^2(n)), search the leftmost leaf where cmp(x) is true…",10,[[],["option",4]]],[11,"bisect_right","","O(log^2(n)), search the rightmost leaf where cmp(x) is…",10,[[],["option",4]]],[0,"unionfind","aclib","",null,null],[0,"smooth_unionfind","aclib::unionfind","",null,null],[3,"UnionFind","aclib::unionfind::smooth_unionfind","",null,null],[11,"new","","O(n), create n trees with themselves as roots",11,[[]]],[11,"union","","O(log(n)), marge 2 trees with primary and standby roots",11,[[]]],[11,"find","","O(log(n)), find the root of x, and update the roots of…",11,[[]]],[11,"equiv","","O(log(n)), check does x and y belong same root",11,[[]]],[0,"unionfind","aclib::unionfind","",null,null],[3,"UnionFind","aclib::unionfind::unionfind","",null,null],[11,"new","","O(n), create n trees with themselves as roots",12,[[]]],[11,"union","","worst: O(n), marge 2 trees with primary and standby roots",12,[[]]],[11,"find","","worst: O(n), find the root of x",12,[[]]],[0,"with_petgraph","aclib::unionfind","example of how to use petgraph::unionfind::Unionfind",null,null],[11,"from","aclib::collections::sorted_vec","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","aclib::cumsum::cumsum1d","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","aclib::cumsum::imos1d","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","aclib::graph::without_petgraph::structure","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"vzip","","",14,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"vzip","","",15,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","aclib::integer::counting","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","aclib::segtree::lazy_segtree::addtree","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","aclib::segtree::non_copy","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","aclib::segtree::non_recursive","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","aclib::segtree::recursive","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","aclib::unionfind::smooth_unionfind","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","aclib::unionfind::unionfind","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"extend","aclib::collections::sorted_vec","O(n + k log(k)), extend elements (size k)",1,[[["intoiterator",8]]]],[11,"index","","O(size(index)), get the element(s) of at the index of the…",1,[[]]],[11,"index","aclib::graph::without_petgraph::structure","O(1), get weight of edge",5,[[]]],[11,"index","","O(1), get node\'s neighbors set",5,[[]]],[11,"index","aclib::segtree::non_copy","O(1)...?, this function seem to make size n temporary…",8,[[]]],[11,"index","aclib::segtree::non_recursive","O(1)...?, this function seem to make size n temporary…",9,[[]]],[11,"index_mut","aclib::segtree::non_copy","O(1)...?, this function seem to make size n temporary…",8,[[]]],[11,"from_iter","aclib::collections::sorted_vec","O(n log(n)), make sorted list from iterator",1,[[["intoiterator",8]]]],[11,"bfs","aclib::graph::without_petgraph::structure","O(n), return breadth first search order",5,[[],["vec",3]]],[11,"dfs","","O(n), return depth first search order",5,[[],["vec",3]]]],"p":[[8,"Counter"],[3,"SortedVec"],[3,"CumSum"],[3,"Imos1D"],[4,"Weighted"],[3,"AdjacencyList"],[3,"Counting"],[3,"AddTree"],[3,"SegmentTree"],[3,"SegmentTree"],[3,"SegmentTree"],[3,"UnionFind"],[3,"UnionFind"],[4,"Undirected"],[4,"Directed"],[4,"Unweighted"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);