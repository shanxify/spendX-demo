import sys

def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

def fibonacci_series(n):
    series = []
    a, b = 0, 1

    for _ in range(n):
        series.append(a)
        a, b = b, a + b

    return series

if __name__ == "__main__":
    n = int(sys.argv[1]) if len(sys.argv) > 1 else 10

    print(f"Factorial of {n}: {factorial(n)}")
    print(f"Fibonacci series ({n} terms): {fibonacci_series(n)}")

