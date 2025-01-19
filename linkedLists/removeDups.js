/*
Write code to remove duplicates from an unsorted linked list.
Follow up: How would you solve this problem if a temporary buffer is not allowed?
Assumption: List nodes cannot be rearranged and must preserve order.
*/

function removeDupsHashSLL(node) {
    const set = new Set();
    let previousNode = null;
    while (node) {
        if (set.has(node.value)) {
            previousNode.next = node.next;
        } else {
            set.add(node.value);
            previousNode = node;
        }
        node = node.next;
    }
}

function removeDupsHashDLL(node) {
    const set = new Set();
    while (node) {
        if (set.has(node.value)) {
            if (node.prev) node.prev.next = node.next;
            if (node.next) node.next.prev = node.prev;
        } else set.add(node.value);
        node = node.next;
    }
}

function removeDupsNoBufferSLL(node) {
    while (node) {
        let runner = node;
        while (runner.next) {
            if (runner.next.value === node.value) runner.next = runner.next.next;
            else runner = runner.next;
        }
        node = node.next;
    }
}

function removeDupsNoBufferDLL(node) {
    while (node) {
        let runner = node;
        while (runner.next) {
            if (runner.next.value === node.value) {
                if (runner.next.next) runner.next.next.prev = runner;
                runner.next = runner.next.next;
            }
            else runner = runner.next;
        }
        node = node.next;
    }
}
