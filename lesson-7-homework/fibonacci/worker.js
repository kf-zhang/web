function fibonacci(n) {
    if(n<=2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


onmessage = event => {
    const num = event.data;
    const result = fibonacci(num);
    self.postMessage(result);
    self.close();
};

