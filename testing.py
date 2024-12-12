class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.parent = None
        self.color = "RED"  # Default color
        
class RedBlackTree:
    def __init__(self):
        self.NIL = Node(None)
        self.NIL.color = "BLACK"
        self.root = self.NIL
        
    def insert_without_fixup(self, key):
        node = Node(key)
        node.left = self.NIL
        node.right = self.NIL
        
        y = self.NIL
        x = self.root
        
        while x != self.NIL:
            y = x
            if node.key < x.key:
                x = x.left
            else:
                x = x.right
                
        node.parent = y
        
        if y == self.NIL:
            self.root = node
        elif node.key < y.key:
            y.left = node
        else:
            y.right = node
            
    def manually_set_color(self, key, color):
        node = self.find_node(self.root, key)
        if node:
            node.color = color
            
    def find_node(self, node, key):
        if node == self.NIL or key == node.key:
            return node
            
        if key < node.key:
            return self.find_node(node.left, key)
        return self.find_node(node.right, key)

    def transplant(self, u, v):
        if u.parent == self.NIL:
            self.root = v
        elif u == u.parent.left:
            u.parent.left = v
        else:
            u.parent.right = v
        v.parent = u.parent

    def minimum(self, node):
        while node.left != self.NIL:
            node = node.left
        return node

    def left_rotate(self, x):
        y = x.right
        x.right = y.left
        if y.left != self.NIL:
            y.left.parent = x
        y.parent = x.parent
        if x.parent == self.NIL:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
        y.left = x
        x.parent = y

    def right_rotate(self, x):
        y = x.left
        x.left = y.right
        if y.right != self.NIL:
            y.right.parent = x
        y.parent = x.parent
        if x.parent == self.NIL:
            self.root = y
        elif x == x.parent.right:
            x.parent.right = y
        else:
            x.parent.left = y
        y.right = x
        x.parent = y

    def delete(self, key):
        z = self.find_node(self.root, key)
        if z:
            self.delete_node(z)

    def delete_node(self, z):
        y = z
        y_original_color = y.color
        
        if z.left == self.NIL:
            x = z.right
            self.transplant(z, z.right)
        elif z.right == self.NIL:
            x = z.left
            self.transplant(z, z.left)
        else:
            y = self.minimum(z.right)
            y_original_color = y.color
            x = y.right
            
            if y.parent == z:
                x.parent = y
            else:
                self.transplant(y, y.right)
                y.right = z.right
                y.right.parent = y
                
            self.transplant(z, y)
            y.left = z.left
            y.left.parent = y
            y.color = z.color
            
        if y_original_color == "BLACK":
            self.delete_fixup(x)

    def delete_fixup(self, x):
        while x != self.root and x.color == "BLACK":
            if x == x.parent.left:
                w = x.parent.right
                # Case 1
                if w.color == "RED":
                    w.color = "BLACK"
                    x.parent.color = "RED"
                    self.left_rotate(x.parent)
                    w = x.parent.right
                
                # Case 2
                if w.left.color == "BLACK" and w.right.color == "BLACK":
                    w.color = "RED"
                    x = x.parent
                else:
                    # Case 3
                    if w.right.color == "BLACK":
                        w.left.color = "BLACK"
                        w.color = "RED"
                        self.right_rotate(w)
                        w = x.parent.right
                    
                    # Case 4
                    w.color = x.parent.color
                    x.parent.color = "BLACK"
                    w.right.color = "BLACK"
                    self.left_rotate(x.parent)
                    x = self.root
            else:
                # Same as above with "right" and "left" exchanged
                w = x.parent.left
                if w.color == "RED":
                    w.color = "BLACK"
                    x.parent.color = "RED"
                    self.right_rotate(x.parent)
                    w = x.parent.left
                
                if w.right.color == "BLACK" and w.left.color == "BLACK":
                    w.color = "RED"
                    x = x.parent
                else:
                    if w.left.color == "BLACK":
                        w.right.color = "BLACK"
                        w.color = "RED"
                        self.left_rotate(w)
                        w = x.parent.left
                    
                    w.color = x.parent.color
                    x.parent.color = "BLACK"
                    w.left.color = "BLACK"
                    self.right_rotate(x.parent)
                    x = self.root
        
        x.color = "BLACK"

    def print_tree(self, node, level=0):
        if node != self.NIL:
            self.print_tree(node.right, level + 1)
            print('  ' * level + str(node.key) + '(' + node.color + ')')
            self.print_tree(node.left, level + 1)

# Test the implementation
if __name__ == "__main__":
    rbt = RedBlackTree()
    
    # Insert values and set colors as before
    values = [60, 40, 80, 20, 50, 70, 90, 10, 30, 45, 55, 75, 85, 25]
    for value in values:
        rbt.insert_without_fixup(value)

    colors = {
        60: "BLACK",  # root
        40: "RED",
        80: "BLACK",
        20: "BLACK",
        50: "BLACK",
        70: "BLACK",
        90: "BLACK",
        10: "BLACK",
        30: "BLACK",
        45: "BLACK",
        55: "BLACK",
        75: "RED",
        85: "RED",
        25: "RED"
    }

    for key, color in colors.items():
        rbt.manually_set_color(key, color)

    print("Initial Tree:")
    rbt.print_tree(rbt.root)
    
    # Test deletion
    print("\nAfter deleting 50:")
    rbt.delete(50)
    rbt.print_tree(rbt.root)