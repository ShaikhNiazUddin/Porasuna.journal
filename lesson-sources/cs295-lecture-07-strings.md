Hello! I am your **Python tutor**. We will go through your lecture files step by step, starting with **Lecture 7 (Strings)**. 

---

# **Lecture 7: Strings in Python**

---

### **Topic 1: What are Strings & String Creation**
* **What it is**: A string is an ordered sequence of characters used to store text. Strings are created using single (`'`), double (`"`), or triple (`'''`) quotes.

```python
s1 = "Hello"
s2 = 'World'
s3 = """Multi-line
string example"""
print(s1)
print(len(s1))
print(type(s1))
```
* **Line-by-line explanation**:
  1. `s1 = "Hello"`: Creates a string `s1` with double quotes.
  2. `s2 = 'World'`: Creates a string `s2` with single quotes.
  3. `s3 = """..."""`: Creates a multi-line string `s3`.
  4. `print(s1)`: Prints the text `"Hello"`.
  5. `print(len(s1))`: Calculates and prints the number of characters in `s1`.
  6. `print(type(s1))`: Prints the data type of `s1`.
* **Output**:
  ```text
  Hello
  5
  <class 'str'>
  ```
  * **Why**: `s1` contains 5 letters. Python categorises text inside quotes under the `<class 'str'>` type.
* 💡 **Remember this**: Use `len()` to get the total character count of any string.

---

### **Topic 2: String Indexing and Access**
* **What it is**: Indexing lets you access a single character by its position. Positive indices start at `0` from the left, while negative indices count backwards from `-1` on the right.

```python
word = "Python"
print(word[0])
print(word[1])
print(word[2])
print(word[5])
print(word[-1])
print(word[-2])
print(word[-6])
```
* **Line-by-line explanation**:
  1. `word = "Python"`: Stores `"Python"` in `word`.
  2. `print(word[0])`: Prints the first character at index 0.
  3. `print(word[1])`: Prints the second character at index 1.
  4. `print(word[2])`: Prints the third character at index 2.
  5. `print(word[5])`: Prints the 6th character at index 5.
  6. `print(word[-1])`: Prints the last character using negative indexing.
  7. `print(word[-2])`: Prints the second to last character.
  8. `print(word[-6])`: Prints the first character from the right.
* **Output**:
  ```text
  P
  y
  t
  n
  n
  o
  P
  ```
  * **Why**: Position `0` is `'P'` and position `-1` is `'n'`.
* 💡 **Remember this**: Indexing always starts at `0`, so accessing `word[len(word)]` causes an `IndexError`.

---

### **Topic 3: String Traversal Methods**
* **What it is**: Traversal means reading a string character by character from start to end. You can loop using a `while` loop or a `for` loop.

```python
# Method 1: Using while loop with index
text = "hello"
i = 0
while i < len(text):
    print(f"Character at {i}: {text[i]}")
    i += 1

# Method 2: Using for loop (Recommended)
text = "hello"
for char in text:
    print(char)
```
* **Line-by-line explanation**:
  1. `i = 0`: Starts counter at index 0.
  2. `while i < len(text):`: Runs as long as `i` is less than string length 5.
  3. `print(f"Character at {i}: {text[i]}")`: Prints current index and character.
  4. `i += 1`: Moves index to the next character.
  5. `for char in text:`: Directly loops through each character in `text` one by one.
  6. `print(char)`: Prints each character.
* **Output**:
  ```text
  Character at 0: h
  Character at 1: e
  Character at 2: l
  Character at 3: l
  Character at 4: o
  h
  e
  l
  l
  o
  ```
  * **Why**: Both loops iterate through the 5 characters of `"hello"`.
* 💡 **Remember this**: Using a `for` loop is cleaner and recommended for strings.

---

### **Topic 4: String Slicing (Basic & Negative)**
* **What it is**: Slicing extracts a part of a string using `[start:end]`. The `start` position is included, but the `end` position is excluded.

```python
s = "Monty Python"
print(s[0:5])
print(s[6:12])
print(s[:5])
print(s[6:])
print(s[:])
print(s[-6:])
print(s[:-7])
```
* **Line-by-line explanation**:
  1. `s[0:5]`: Cuts characters from index 0 up to 4.
  2. `s[6:12]`: Cuts characters from index 6 up to 11.
  3. `s[:5]`: Omits start, defaults to index 0 up to 4.
  4. `s[6:]`: Omits end, cuts from index 6 to the end.
  5. `s[:]`: Copies the entire string.
  6. `s[-6:]`: Takes the last 6 characters.
  7. `s[:-7]`: Takes everything except the last 7 characters.
* **Output**:
  ```text
  Monty
  Python
  Monty
  Python
  Monty Python
  Python
  Monty
  ```
  * **Why**: Python stops cutting right before the `end` index.
* 💡 **Remember this**: Omitting `start` defaults to `0`, and omitting `end` defaults to the string length.

---

### **Topic 5: Advanced Slicing with Step**
* **What it is**: Slicing with `[start:end:step]` allows you to skip characters or step backwards to reverse text.

```python
text = "ABCDEFGHIJ"
print(text[0:10:2])
print(text[::2])
print(text[1::2])
print(text[::-1])
print(text[5:1:-1])
```
* **Line-by-line explanation**:
  1. `text[0:10:2]`: Reads index 0 to 9, taking every 2nd character.
  2. `text[::2]`: Reads the full string, taking every 2nd character.
  3. `text[1::2]`: Starts at index 1, taking every 2nd character.
  4. `text[::-1]`: Step `-1` reads the string backwards to reverse it.
  5. `text[5:1:-1]`: Steps backwards from index 5 down to 2.
* **Output**:
  ```text
  ACEGI
  ACEGI
  BDFHJ
  JIHGFEDCBA
  FEDC
  ```
  * **Why**: Positive step moves left-to-right, while negative step moves right-to-left.
* 💡 **Remember this**: Use `[::-1]` to quickly reverse any string in Python.

---

### **Topic 6: Concatenation and Repetition**
* **What it is**: The `+` operator joins strings together, and the `*` operator repeats a string multiple times.

```python
first = "Hello"
second = "World"
result = first + " " + second
print(result)

line = "-" * 25
print(line)
print("Ha" * 3)

header = "=" * 40
title = "PYTHON PROGRAMMING"
full_header = header + "\n" + title + "\n" + header
print(full_header)
```
* **Line-by-line explanation**:
  1. `result = first + " " + second`: Combines `first`, a space, and `second`.
  2. `line = "-" * 25`: Repeats `"-"` 25 times.
  3. `print("Ha" * 3)`: Repeats `"Ha"` 3 times.
  4. `full_header = ...`: Combines lines and title text using `\n` (newline).
* **Output**:
  ```text
  Hello World
  -------------------------
  HaHaHa
  ========================================
  PYTHON PROGRAMMING
  ========================================
  ```
  * **Why**: Operator overloading allows `+` to join text and `*` to repeat text.
* 💡 **Remember this**: Both `+` and `*` generate brand new string objects.

---

### **Topic 7: String Immutability & Workaround (Pitfall)**
* **What it is**: Strings are immutable (cannot be changed after creation). Trying to change a letter in-place causes a `TypeError`.

```python
name = "Python"
# Bad code: name[0] = "J" -> Raises TypeError!

# Fix: Create a new string using slicing
new_name = "J" + name[1:]
print(new_name)

text = "hello"
# Fix: Reassign variable to a new string
text = "H" + text[1:]
print(text)
```
* **Line-by-line explanation**:
  1. `new_name = "J" + name[1:]`: Takes `'J'` and attaches everything from index 1 onward (`"ython"`).
  2. `text = "H" + text[1:]`: Creates a new string starting with `'H'` and reassigns `text`.
* **Output**:
  ```text
  Jython
  Hello
  ```
  * **Why**: Python strings do not allow item assignment, so you must construct a new string.
* 💡 **Remember this**: Never assign to `str[i]`; always create a new string with slicing.

---

### **Topic 8: Counting Characters**
* **What it is**: You can count how many times a character appears in a string using a loop, `.count()`, or a list comprehension.

```python
word = "banana"
count = 0

# Method 1: Loop
for letter in word:
    if letter == 'a':
        count += 1
print(f"Method 1: 'a' appears {count} times")

# Method 2: count() method
count = word.count('a')
print(f"Method 2: 'a' appears {count} times")

# Method 3: List comprehension
count = len([char for char in word if char == 'a'])
print(f"Method 3: 'a' appears {count} times")
```
* **Line-by-line explanation**:
  1. `Method 1`: Loops over each letter and adds `1` to `count` when `letter == 'a'`.
  2. `Method 2`: Calls built-in `.count('a')` directly.
  3. `Method 3`: Filters matching characters into a list and measures its length.
* **Output**:
  ```text
  Method 1: 'a' appears 3 times
  Method 2: 'a' appears 3 times
  Method 3: 'a' appears 3 times
  ```
  * **Why**: All three methods find the 3 `'a'` characters inside `"banana"`.
* 💡 **Remember this**: Built-in `.count()` is a concise way to count substrings.

---

### **Topic 9: Membership Testing (`in` Operator)**
* **What it is**: The `in` operator checks if a substring exists inside a string and returns `True` or `False`.

```python
text = "banana"
print('a' in text)
print('ana' in text)
print('seed' in text)
print('' in text)
print('B' in text)
print('B'.lower() in text)

filename = "data_report_2025.pdf"
if "report" in filename:
    print("This is a report file")
if filename.endswith(".pdf"):
    print("PDF document")
```
* **Line-by-line explanation**:
  1. `'a' in text`: Checks if `'a'` exists in `"banana"`.
  2. `'seed' in text`: Checks if `'seed'` exists.
  3. `'' in text`: Empty string is always present in any string.
  4. `'B' in text`: Checks uppercase `'B'`, which fails due to case sensitivity.
  5. `filename.endswith(".pdf")`: Checks if string ends with `".pdf"`.
* **Output**:
  ```text
  True
  True
  False
  True
  False
  True
  This is a report file
  PDF document
  ```
  * **Why**: Membership checks are case-sensitive.
* 💡 **Remember this**: Convert text to `.lower()` before checking if you want case-insensitive matching.

---

### **Topic 10: String Comparison Methods**
* **What it is**: Strings are compared character-by-character using Unicode code point order.

```python
print("apple" < "banana")
print("Apple" < "apple")
print("abc" == "abc")
print("abc" == "ABC")

word1 = "Python"
word2 = "python"
print(word1.lower() == word2.lower())

print("5" == str(5))

words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```
* **Line-by-line explanation**:
  1. `"apple" < "banana"`: `'a'` comes before `'b'` alphabetically.
  2. `"Apple" < "apple"`: Uppercase `'A'` (ASCII 65) is smaller than lowercase `'a'` (ASCII 97).
  3. `word1.lower() == word2.lower()`: Compares lowercase versions for equality.
  4. `sorted(words)`: Sorts string list alphabetically.
* **Output**:
  ```text
  True
  True
  True
  False
  True
  True
  ['apple', 'banana', 'cherry']
  ```
  * **Why**: Uppercase letters have smaller ASCII numerical values than lowercase letters.
* 💡 **Remember this**: Numbers and strings are never equal (`"5" != 5`).

---

### **Topic 11: Essential String Methods - Part 1 (Case, Strip, Search)**
* **What it is**: Methods like `.upper()`, `.strip()`, `.find()`, and `.index()` help modify case, remove spaces, and locate text.

```python
text = " Hello World! "

print(text.upper())
print(text.lower())
print("python".capitalize())

print(text.strip())
print(text.lstrip())
print(text.rstrip())

print("banana".find('na'))
print("banana".find('na', 3))
print("banana".find('x'))
print("banana".index('na'))
```
* **Line-by-line explanation**:
  1. `text.upper()` / `lower()`: Converts text to all upper/lower case.
  2. `text.strip()`: Removes outer spaces.
  3. `find('na')`: Returns index of first match (or `-1` if missing).
  4. `index('na')`: Returns index of first match (raises `ValueError` if missing).
* **Output**:
  ```text
  HELLO WORLD! 
   hello world! 
  Python
  Hello World!
  Hello World! 
   Hello World!
  2
  4
  -1
  2
  ```
  * **Why**: `.find()` returns `-1` safely when a substring is absent, whereas `.index()` raises an error.
* 💡 **Remember this**: Use `.find()` instead of `.index()` to prevent program crashes when searching.

---

### **Topic 12: Essential String Methods - Part 2 (Replace, Split, Join, Property Checks)**
* **What it is**: You can replace sub-text, split text into lists, join lists into text, and inspect string properties.

```python
text = "apple,banana,cherry"
print(text.replace(',', ';'))
print("banana".replace('a', '@', 2))

fruits = text.split(',')
print(fruits)
print(' - '.join(fruits))

print("hello".isalpha())
print("hello123".isalnum())
print("123".isdigit())
print(" ".isspace())
print("hello world".startswith("hello"))
print("hello world".endswith("world"))
```
* **Line-by-line explanation**:
  1. `replace(',', ';')`: Replaces commas with semicolons.
  2. `replace('a', '@', 2)`: Replaces only the first 2 occurrences of `'a'`.
  3. `text.split(',')`: Splits text by comma into a list of strings.
  4. `' - '.join(fruits)`: Joins list elements using `' - '` delimiter.
  5. `.isalpha()`, `.isdigit()`: Returns boolean status checks.
* **Output**:
  ```text
  apple;banana;cherry
  b@n@na
  ['apple', 'banana', 'cherry']
  apple - banana - cherry
  True
  True
  True
  True
  True
  True
  ```
  * **Why**: Split breaks strings apart, while join stitches list elements together.
* 💡 **Remember this**: `.split()` and `.join()` are inverse operations.

---

### **Topic 13: String Parsing Techniques**
* **What it is**: Parsing extracts specific pieces of information from structured text strings using positions and delimiters.

```python
# Example 1: Domain from email
email = "john.doe@example.com"
at_pos = email.find('@')
domain = email[at_pos+1:]
print(f"Domain: {domain}")

# Example 2: Filename and extension
filepath = "documents/report.pdf"
slash_pos = filepath.rfind('/')
dot_pos = filepath.rfind('.')
filename = filepath[slash_pos+1:dot_pos]
extension = filepath[dot_pos+1:]
print(f"Filename: {filename}")
print(f"Extension: {extension}")

# Example 3: Parse log data
log = "2025-01-15 14:30:25 INFO User login successful"
date = log[0:10]
time = log[11:19]
level = log[20:24]
print(f"Date: {date}, Time: {time}, Level: {level}")
```
* **Line-by-line explanation**:
  1. `email.find('@')`: Finds `@` symbol position.
  2. `email[at_pos+1:]`: Slices string starting immediately after `@`.
  3. `rfind('/')`: Finds the rightmost slash position.
  4. `log[0:10]`: Uses exact index boundaries to extract log fields.
* **Output**:
  ```text
  Domain: example.com
  Filename: report
  Extension: pdf
  Date: 2025-01-15, Time: 14:30:25, Level: INFO
  ```
  * **Why**: Delimiter indices mark the starting and ending points for slicing.
* 💡 **Remember this**: Use `.rfind()` when you need to search from the right side of a string.

---

### **Topic 14: Formatted String Literals (f-Strings)**
* **What it is**: f-strings (`f"..."`) let you insert variables and expressions cleanly inside strings.

```python
name = "Alice"
age = 25
print(f"{name} is {age} years old")

a, b = 5, 3
print(f"{a} + {b} = {a + b}")
print(f"Square of {a} is {a**2}")

price = 19.9876
print(f"Price: ${price:.2f}")
percentage = 0.756
print(f"Success rate: {percentage:.1%}")

text = "Python"
print(f"|{text:<10}|")
print(f"|{text:>10}|")
print(f"|{text:^10}|")
```
* **Line-by-line explanation**:
  1. `f"{name} is {age}"`: Replaces `{name}` and `{age}` with variable values.
  2. `f"{a + b}"`: Evaluates math expressions inside brackets.
  3. `f"${price:.2f}"`: Formats float number to 2 decimal places.
  4. `f"{percentage:.1%}"`: Formats decimal number as percentage.
  5. `:<10`, `:>10`, `:^10`: Align text left, right, and center across 10 spaces.
* **Output**:
  ```text
  Alice is 25 years old
  5 + 3 = 8
  Square of 5 is 25
  Price: $19.99
  Success rate: 75.6%
  |Python    |
  |    Python|
  |  Python  |
  ```
  * **Why**: f-strings directly evaluate expressions inside `{}` at runtime.
* 💡 **Remember this**: f-strings are faster and cleaner than older string formatting methods.

---

### **Topic 15: Defensive Programming with Strings (Pitfall & Fix)**
* **What it is**: Defensive programming checks string length or validity before indexing to avoid crashes.

```python
line = ""
# Bad code: if line[0] == '#': -> Raises IndexError on an empty string!

# Fix 1: Guardian Pattern (Check length first)
if len(line) > 0 and line[0] == '#':
    print("Comment line")

# Fix 2: Better approach with startswith()
if line.startswith('#'):
    print("Comment line")

user_input = "  Python  ".strip()
if user_input:
    first_char = user_input[0]
    print(f"First character: {first_char}")
else:
    print("Empty input received")
```
* **Line-by-line explanation**:
  1. `len(line) > 0 and ...`: Short-circuits so indexing is skipped if string is empty.
  2. `line.startswith('#')`: Safely returns `False` on empty strings without crashing.
  3. `user_input.strip()`: Cleans outer whitespace before validation.
* **Output**:
  ```text
  First character: P
  ```
  * **Why**: Empty strings have length 0, so accessing index `0` raises `IndexError`.
* 💡 **Remember this**: Use `.startswith()` to safely check first characters without length checks.

---

### **Topic 16: Solved Problem 1 - Character Frequency Counter**
* **What it is**: A function that counts how many times each character appears in text using a dictionary.

```python
def char_frequency(text):
    freq = {}
    for char in text:
        freq[char] = freq.get(char, 0) + 1
    return freq

text = "programming"
print(char_frequency(text))
```
* **Line-by-line explanation**:
  1. `freq = {}`: Creates empty dictionary.
  2. `for char in text:`: Loops over characters.
  3. `freq.get(char, 0) + 1`: Fetches current count (default 0) and adds 1.
  4. `return freq`: Returns final dictionary result.
* **Output**:
  ```text
  {'p': 1, 'r': 2, 'o': 1, 'g': 2, 'a': 1, 'm': 2, 'i': 1, 'n': 1}
  ```
  * **Why**: `freq.get(char, 0)` safely updates counts without missing-key errors.
* 💡 **Remember this**: `.get(key, default)` simplifies counter logic in loops.

---

### **Topic 17: Solved Problem 2 - Email Validator & Parser**
* **What it is**: Validates email format and extracts username and domain.

```python
def validate_email(email):
    if '@' not in email:
        return False, "Missing @ symbol"
    username, domain = email.split('@', 1)
    if not username or not domain:
        return False, "Missing username or domain"
    if '.' not in domain:
        return False, "Domain missing dot"
    return True, {
        'username': username,
        'domain': domain,
        'is_educational': domain.endswith('.edu'),
        'is_commercial': domain.endswith('.com')
    }

emails = ["user@example.com", "student@ewu.edu", "invalid.email"]
for email in emails:
    valid, result = validate_email(email)
    print(f"{email}: {result}")
```
* **Line-by-line explanation**:
  1. `if '@' not in email`: Checks for `@` presence.
  2. `email.split('@', 1)`: Splits email into username and domain.
  3. `domain.endswith(...)`: Checks domain extension type.
* **Output**:
  ```text
  user@example.com: {'username': 'user', 'domain': 'example.com', 'is_educational': False, 'is_commercial': True}
  student@ewu.edu: {'username': 'student', 'domain': 'ewu.edu', 'is_educational': True, 'is_commercial': False}
  invalid.email: Missing @ symbol
  ```
  * **Why**: Combines string membership, splitting, and `endswith()` validation.
* 💡 **Remember this**: Pass maxsplit parameter `1` to `.split()` when separating email headers.

---

### **Topic 18: Solved Problem 3 - Text Analyzer**
* **What it is**: Performs full text analysis calculating counts for characters, words, sentences, types, and word frequencies.

```python
def text_analyzer(text):
    char_count = len(text)
    word_count = len(text.split())
    sentence_count = text.count('.') + text.count('!') + text.count('?')
    alpha_count = sum(1 for char in text if char.isalpha())
    digit_count = sum(1 for char in text if char.isdigit())
    space_count = sum(1 for char in text if char.isspace())
    
    words = text.lower().split()
    word_freq = {}
    for word in words:
        word = word.strip('.,!?')
        if word:
            word_freq[word] = word_freq.get(word, 0) + 1
            
    return {
        'characters': char_count,
        'words': word_count,
        'sentences': sentence_count,
        'alphabetic': alpha_count,
        'digits': digit_count,
        'spaces': space_count,
        'most_common_word': max(word_freq, key=word_freq.get) if word_freq else None
    }

sample_text = "Hello world! This is a test. Hello again."
result = text_analyzer(sample_text)
for key, value in result.items():
    print(f"{key}: {value}")
```
* **Line-by-line explanation**:
  1. Calculates totals using `len()`, `.split()`, and `.count()`.
  2. Uses generator expressions with `.isalpha()`, `.isdigit()`, and `.isspace()` to count character categories.
  3. Cleans punctuation from words using `.strip('.,!?')` before counting frequencies.
* **Output**:
  ```text
  characters: 41
  words: 8
  sentences: 3
  alphabetic: 31
  digits: 0
  spaces: 7
  most_common_word: hello
  ```
  * **Why**: `.strip()` cleans punctuation so `"hello!"` matches `"hello"`.
* 💡 **Remember this**: Always clean punctuation before counting word frequency.

---

### **Topic 19: Solved Problem 4 - String Manipulation Utilities**
* **What it is**: Utility functions to reverse strings, check palindromes, capitalize words, and remove duplicate letters.

```python
def reverse_string(s):
    return s[::-1]

def is_palindrome(s):
    s_clean = ''.join(char.lower() for char in s if char.isalnum())
    return s_clean == s_clean[::-1]

def capitalize_words(s):
    return ' '.join(word.capitalize() for word in s.split())

def remove_duplicates(s):
    seen = set()
    result = []
    for char in s:
        if char not in seen:
            seen.add(char)
            result.append(char)
    return ''.join(result)

test_string = "hello world wow"
print(f"Original: {test_string}")
print(f"Reversed: {reverse_string(test_string)}")
print(f"Palindrome check: {is_palindrome('A man a plan a canal Panama')}")
print(f"Capitalized: {capitalize_words(test_string)}")
print(f"Duplicates removed: {remove_duplicates('programming')}")
```
* **Line-by-line explanation**:
  1. `reverse_string`: Reverses string using step `-1`.
  2. `is_palindrome`: Cleans punctuation/spaces and checks if reversed text matches.
  3. `capitalize_words`: Capitalizes first letter of each word and joins with spaces.
  4. `remove_duplicates`: Uses a `set` to track seen characters while keeping original order.
* **Output**:
  ```text
  Original: hello world wow
  Reversed: wow dlrow olleh
  Palindrome check: True
  Capitalized: Hello World Wow
  Duplicates removed: progamin
  ```
  * **Why**: Filtering with `.isalnum()` cleans non-alphanumeric characters for accurate palindrome checking.
* 💡 **Remember this**: Combine `set()` tracking with a `list` to remove duplicate characters while preserving order.

---

### **Topic 20: Practice Exercises Solutions (Slides Exercises 1–8)**

Here are step-by-step solutions for all 8 practice exercises listed in the slides:

#### **Ex 1: Character Counter**
* **Goal**: Count occurrences of each character.
```python
def char_counter(s):
    return {char: s.count(char) for char in dict.fromkeys(s)}

print(char_counter("hello"))
# Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}
```

#### **Ex 2: Email Extractor**
* **Goal**: Extract email addresses from text.
```python
def extract_emails(text):
    words = text.split()
    return [w.strip('.,') for w in words if '@' in w and '.' in w.split('@')[-1]]

print(extract_emails("Contact user@test.com or admin@site.org for info."))
# Output: ['user@test.com', 'admin@site.org']
```

#### **Ex 3: Password Validator**
* **Goal**: Verify length, uppercase, lowercase, digit, and special character criteria.
```python
def validate_password(p):
    has_upper = any(c.isupper() for c in p)
    has_lower = any(c.islower() for c in p)
    has_digit = any(c.isdigit() for c in p)
    has_spec = any(not c.isalnum() for c in p)
    return len(p) >= 8 and has_upper and has_lower and has_digit and has_spec

print(validate_password("P@ssword1"))
# Output: True
```

#### **Ex 4: CSV Parser**
* **Goal**: Parse CSV text manually without `csv` module.
```python
def parse_csv(csv_text):
    return [line.split(',') for line in csv_text.strip().split('\n')]

print(parse_csv("name,age\nAlice,25\nBob,30"))
# Output: [['name', 'age'], ['Alice', '25'], ['Bob', '30']]
```

#### **Ex 5: Text Statistics**
* **Goal**: Calculate average word length and average sentence length.
```python
def text_stats(text):
    words = text.split()
    sentences = [s for s in text.split('.') if s.strip()]
    avg_word_len = sum(len(w) for w in words) / len(words)
    avg_sent_len = len(words) / len(sentences)
    return f"Avg Word: {avg_word_len:.1f}, Avg Sentence: {avg_sent_len:.1f} words"

print(text_stats("Python is great. It is fun to learn."))
# Output: Avg Word: 3.5, Avg Sentence: 4.0 words
```

#### **Ex 6: String Compression**
* **Goal**: Compress repeated letters (e.g., `"aaabbb"` -> `"a3b3"`).
```python
def compress_string(s):
    if not s: return ""
    result, count = [], 1
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            result.append(f"{s[i-1]}{count}")
            count = 1
    result.append(f"{s[-1]}{count}")
    return "".join(result)

print(compress_string("aaabbc"))
# Output: a3b2c1
```

#### **Ex 7: Anagram Checker**
* **Goal**: Check if two strings are anagrams.
```python
def is_anagram(s1, s2):
    return sorted(s1.lower().replace(" ", "")) == sorted(s2.lower().replace(" ", ""))

print(is_anagram("listen", "silent"))
# Output: True
```

#### **Ex 8: URL Parser**
* **Goal**: Extract protocol, domain, path, and parameters from a URL.
```python
def parse_url(url):
    protocol, rest = url.split("://", 1)
    domain, _, path_and_query = rest.partition("/")
    path, _, params = path_and_query.partition("?")
    return {
        "protocol": protocol,
        "domain": domain,
        "path": path,
        "params": params
    }

print(parse_url("https://example.com/search?q=python"))
# Output: {'protocol': 'https', 'domain': 'example.com', 'path': 'search', 'params': 'q=python'}
```

---

## **Lecture 7 Quick Summary**
1. **Immutable**: Strings cannot be altered after creation.
2. **0-Based Indexing**: Positive index starts at `0`, negative index starts at `-1`.
3. **Slicing**: Use `[start:end:step]` to extract substrings or reverse text.
4. **Rich Methods**: Methods like `.lower()`, `.strip()`, `.split()`, `.join()`, and `.replace()` handle text parsing cleanly.
5. **f-Strings**: Provide the modern standard for fast formatting.

---

## **Comparison Table: `find()` vs `index()`**

| Feature | `find()` | `index()` |
| :--- | :--- | :--- |
| **Returns if found** | First index position | First index position |
| **Behavior if missing** | Returns `-1` | Raises `ValueError` |
| **Safety** | High (safe for conditionals) | Lower (requires try-except) |

---

## **Quick Self-Test Questions for You**
1. What error happens if you execute `"Python"[0] = "J"`?
2. What does `"Python"[::-1]` evaluate to?
3. What value does `"banana".find('z')` return?

---

Say **next** when you are ready to move on to **Lecture 8 (Dictionaries)**!
