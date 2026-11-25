---
hide:
  - toc
---

<div class="study-deck" data-study-deck="cs295-lecture-07">
<div class="study-dashboard">
<span class="p-eyebrow">CS295 / Final / Lecture 07</span>
<h1>Strings in Python</h1>
<p>Work through 20 short lessons, try the examples, and mark each one done. Your progress is saved in this browser.</p>
<div class="study-progress-label"><strong id="study-progress-count">0 of 20 complete</strong><span id="study-progress-percent">0%</span></div>
<div class="study-meter" role="progressbar" aria-label="Lecture 7 progress" aria-valuemin="0" aria-valuemax="20" aria-valuenow="0"><div class="study-meter-fill"></div></div>
<p class="study-complete-message" hidden>All 20 lessons done. Nice work! ★</p>
</div>
<nav class="study-jumps" aria-label="Jump to a lesson">
<a href="#lesson-01" class="study-jump">01 <span>What are Strings &amp; String Creation</span></a>
<a href="#lesson-02" class="study-jump">02 <span>String Indexing and Access</span></a>
<a href="#lesson-03" class="study-jump">03 <span>String Traversal Methods</span></a>
<a href="#lesson-04" class="study-jump">04 <span>String Slicing (Basic &amp; Negative)</span></a>
<a href="#lesson-05" class="study-jump">05 <span>Advanced Slicing with Step</span></a>
<a href="#lesson-06" class="study-jump">06 <span>Concatenation and Repetition</span></a>
<a href="#lesson-07" class="study-jump">07 <span>String Immutability &amp; Workaround (Pitfall)</span></a>
<a href="#lesson-08" class="study-jump">08 <span>Counting Characters</span></a>
<a href="#lesson-09" class="study-jump">09 <span>Membership Testing (<code>in</code> Operator)</span></a>
<a href="#lesson-10" class="study-jump">10 <span>String Comparison Methods</span></a>
<a href="#lesson-11" class="study-jump">11 <span>Essential String Methods - Part 1 (Case, Strip, Search)</span></a>
<a href="#lesson-12" class="study-jump">12 <span>Essential String Methods - Part 2 (Replace, Split, Join, Property Checks)</span></a>
<a href="#lesson-13" class="study-jump">13 <span>String Parsing Techniques</span></a>
<a href="#lesson-14" class="study-jump">14 <span>Formatted String Literals (f-Strings)</span></a>
<a href="#lesson-15" class="study-jump">15 <span>Defensive Programming with Strings (Pitfall &amp; Fix)</span></a>
<a href="#lesson-16" class="study-jump">16 <span>Solved Problem 1 - Character Frequency Counter</span></a>
<a href="#lesson-17" class="study-jump">17 <span>Solved Problem 2 - Email Validator &amp; Parser</span></a>
<a href="#lesson-18" class="study-jump">18 <span>Solved Problem 3 - Text Analyzer</span></a>
<a href="#lesson-19" class="study-jump">19 <span>Solved Problem 4 - String Manipulation Utilities</span></a>
<a href="#lesson-20" class="study-jump">20 <span>Practice Exercises Solutions (Slides Exercises 1–8)</span></a>
</nav>
<div class="study-lessons">
<details class="study-lesson" id="lesson-01" data-lesson-id="lecture7-topic-01" open>
<summary><span class="lesson-index">01</span><span class="lesson-title">What are Strings &amp; String Creation</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: A string is an ordered sequence of characters used to store text. Strings are created using single (<code>&#39;</code>), double (<code>&quot;</code>), or triple (<code>&#39;&#39;&#39;</code>) quotes.</p>
<pre><code class="language-python">s1 = &quot;Hello&quot;&#10;s2 = &#39;World&#39;&#10;s3 = &quot;&quot;&quot;Multi-line&#10;string example&quot;&quot;&quot;&#10;print(s1)&#10;print(len(s1))&#10;print(type(s1))</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>s1 = &quot;Hello&quot;</code>: Creates a string <code>s1</code> with double quotes.</p>
<p class="lesson-step">2. <code>s2 = &#39;World&#39;</code>: Creates a string <code>s2</code> with single quotes.</p>
<p class="lesson-step">3. <code>s3 = &quot;&quot;&quot;...&quot;&quot;&quot;</code>: Creates a multi-line string <code>s3</code>.</p>
<p class="lesson-step">4. <code>print(s1)</code>: Prints the text <code>&quot;Hello&quot;</code>.</p>
<p class="lesson-step">5. <code>print(len(s1))</code>: Calculates and prints the number of characters in <code>s1</code>.</p>
<p class="lesson-step">6. <code>print(type(s1))</code>: Prints the data type of <code>s1</code>.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Hello&#10;  5&#10;  &lt;class &#39;str&#39;&gt;</code></pre>
<p class="lesson-point"><strong>Why</strong>: <code>s1</code> contains 5 letters. Python categorises text inside quotes under the <code>&lt;class &#39;str&#39;&gt;</code> type.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Use <code>len()</code> to get the total character count of any string.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 01 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-02" data-lesson-id="lecture7-topic-02">
<summary><span class="lesson-index">02</span><span class="lesson-title">String Indexing and Access</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Indexing lets you access a single character by its position. Positive indices start at <code>0</code> from the left, while negative indices count backwards from <code>-1</code> on the right.</p>
<pre><code class="language-python">word = &quot;Python&quot;&#10;print(word[0])&#10;print(word[1])&#10;print(word[2])&#10;print(word[5])&#10;print(word[-1])&#10;print(word[-2])&#10;print(word[-6])</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>word = &quot;Python&quot;</code>: Stores <code>&quot;Python&quot;</code> in <code>word</code>.</p>
<p class="lesson-step">2. <code>print(word[0])</code>: Prints the first character at index 0.</p>
<p class="lesson-step">3. <code>print(word[1])</code>: Prints the second character at index 1.</p>
<p class="lesson-step">4. <code>print(word[2])</code>: Prints the third character at index 2.</p>
<p class="lesson-step">5. <code>print(word[5])</code>: Prints the 6th character at index 5.</p>
<p class="lesson-step">6. <code>print(word[-1])</code>: Prints the last character using negative indexing.</p>
<p class="lesson-step">7. <code>print(word[-2])</code>: Prints the second to last character.</p>
<p class="lesson-step">8. <code>print(word[-6])</code>: Prints the first character from the right.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  P&#10;  y&#10;  t&#10;  n&#10;  n&#10;  o&#10;  P</code></pre>
<p class="lesson-point"><strong>Why</strong>: Position <code>0</code> is <code>&#39;P&#39;</code> and position <code>-1</code> is <code>&#39;n&#39;</code>.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Indexing always starts at <code>0</code>, so accessing <code>word[len(word)]</code> causes an <code>IndexError</code>.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 02 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-03" data-lesson-id="lecture7-topic-03">
<summary><span class="lesson-index">03</span><span class="lesson-title">String Traversal Methods</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Traversal means reading a string character by character from start to end. You can loop using a <code>while</code> loop or a <code>for</code> loop.</p>
<pre><code class="language-python"># Method 1: Using while loop with index&#10;text = &quot;hello&quot;&#10;i = 0&#10;while i &lt; len(text):&#10;    print(f&quot;Character at {i}: {text[i]}&quot;)&#10;    i += 1&#10;&#10;# Method 2: Using for loop (Recommended)&#10;text = &quot;hello&quot;&#10;for char in text:&#10;    print(char)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>i = 0</code>: Starts counter at index 0.</p>
<p class="lesson-step">2. <code>while i &lt; len(text):</code>: Runs as long as <code>i</code> is less than string length 5.</p>
<p class="lesson-step">3. <code>print(f&quot;Character at {i}: {text[i]}&quot;)</code>: Prints current index and character.</p>
<p class="lesson-step">4. <code>i += 1</code>: Moves index to the next character.</p>
<p class="lesson-step">5. <code>for char in text:</code>: Directly loops through each character in <code>text</code> one by one.</p>
<p class="lesson-step">6. <code>print(char)</code>: Prints each character.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Character at 0: h&#10;  Character at 1: e&#10;  Character at 2: l&#10;  Character at 3: l&#10;  Character at 4: o&#10;  h&#10;  e&#10;  l&#10;  l&#10;  o</code></pre>
<p class="lesson-point"><strong>Why</strong>: Both loops iterate through the 5 characters of <code>&quot;hello&quot;</code>.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Using a <code>for</code> loop is cleaner and recommended for strings.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 03 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-04" data-lesson-id="lecture7-topic-04">
<summary><span class="lesson-index">04</span><span class="lesson-title">String Slicing (Basic &amp; Negative)</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Slicing extracts a part of a string using <code>[start:end]</code>. The <code>start</code> position is included, but the <code>end</code> position is excluded.</p>
<pre><code class="language-python">s = &quot;Monty Python&quot;&#10;print(s[0:5])&#10;print(s[6:12])&#10;print(s[:5])&#10;print(s[6:])&#10;print(s[:])&#10;print(s[-6:])&#10;print(s[:-7])</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>s[0:5]</code>: Cuts characters from index 0 up to 4.</p>
<p class="lesson-step">2. <code>s[6:12]</code>: Cuts characters from index 6 up to 11.</p>
<p class="lesson-step">3. <code>s[:5]</code>: Omits start, defaults to index 0 up to 4.</p>
<p class="lesson-step">4. <code>s[6:]</code>: Omits end, cuts from index 6 to the end.</p>
<p class="lesson-step">5. <code>s[:]</code>: Copies the entire string.</p>
<p class="lesson-step">6. <code>s[-6:]</code>: Takes the last 6 characters.</p>
<p class="lesson-step">7. <code>s[:-7]</code>: Takes everything except the last 7 characters.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Monty&#10;  Python&#10;  Monty&#10;  Python&#10;  Monty Python&#10;  Python&#10;  Monty</code></pre>
<p class="lesson-point"><strong>Why</strong>: Python stops cutting right before the <code>end</code> index.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Omitting <code>start</code> defaults to <code>0</code>, and omitting <code>end</code> defaults to the string length.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 04 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-05" data-lesson-id="lecture7-topic-05">
<summary><span class="lesson-index">05</span><span class="lesson-title">Advanced Slicing with Step</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Slicing with <code>[start:end:step]</code> allows you to skip characters or step backwards to reverse text.</p>
<pre><code class="language-python">text = &quot;ABCDEFGHIJ&quot;&#10;print(text[0:10:2])&#10;print(text[::2])&#10;print(text[1::2])&#10;print(text[::-1])&#10;print(text[5:1:-1])</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>text[0:10:2]</code>: Reads index 0 to 9, taking every 2nd character.</p>
<p class="lesson-step">2. <code>text[::2]</code>: Reads the full string, taking every 2nd character.</p>
<p class="lesson-step">3. <code>text[1::2]</code>: Starts at index 1, taking every 2nd character.</p>
<p class="lesson-step">4. <code>text[::-1]</code>: Step <code>-1</code> reads the string backwards to reverse it.</p>
<p class="lesson-step">5. <code>text[5:1:-1]</code>: Steps backwards from index 5 down to 2.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  ACEGI&#10;  ACEGI&#10;  BDFHJ&#10;  JIHGFEDCBA&#10;  FEDC</code></pre>
<p class="lesson-point"><strong>Why</strong>: Positive step moves left-to-right, while negative step moves right-to-left.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Use <code>[::-1]</code> to quickly reverse any string in Python.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 05 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-06" data-lesson-id="lecture7-topic-06">
<summary><span class="lesson-index">06</span><span class="lesson-title">Concatenation and Repetition</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: The <code>+</code> operator joins strings together, and the <code>*</code> operator repeats a string multiple times.</p>
<pre><code class="language-python">first = &quot;Hello&quot;&#10;second = &quot;World&quot;&#10;result = first + &quot; &quot; + second&#10;print(result)&#10;&#10;line = &quot;-&quot; * 25&#10;print(line)&#10;print(&quot;Ha&quot; * 3)&#10;&#10;header = &quot;=&quot; * 40&#10;title = &quot;PYTHON PROGRAMMING&quot;&#10;full_header = header + &quot;\n&quot; + title + &quot;\n&quot; + header&#10;print(full_header)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>result = first + &quot; &quot; + second</code>: Combines <code>first</code>, a space, and <code>second</code>.</p>
<p class="lesson-step">2. <code>line = &quot;-&quot; * 25</code>: Repeats <code>&quot;-&quot;</code> 25 times.</p>
<p class="lesson-step">3. <code>print(&quot;Ha&quot; * 3)</code>: Repeats <code>&quot;Ha&quot;</code> 3 times.</p>
<p class="lesson-step">4. <code>full_header = ...</code>: Combines lines and title text using <code>\n</code> (newline).</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Hello World&#10;  -------------------------&#10;  HaHaHa&#10;  ========================================&#10;  PYTHON PROGRAMMING&#10;  ========================================</code></pre>
<p class="lesson-point"><strong>Why</strong>: Operator overloading allows <code>+</code> to join text and <code>*</code> to repeat text.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Both <code>+</code> and <code>*</code> generate brand new string objects.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 06 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-07" data-lesson-id="lecture7-topic-07">
<summary><span class="lesson-index">07</span><span class="lesson-title">String Immutability &amp; Workaround (Pitfall)</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Strings are immutable (cannot be changed after creation). Trying to change a letter in-place causes a <code>TypeError</code>.</p>
<pre><code class="language-python">name = &quot;Python&quot;&#10;# Bad code: name[0] = &quot;J&quot; -&gt; Raises TypeError!&#10;&#10;# Fix: Create a new string using slicing&#10;new_name = &quot;J&quot; + name[1:]&#10;print(new_name)&#10;&#10;text = &quot;hello&quot;&#10;# Fix: Reassign variable to a new string&#10;text = &quot;H&quot; + text[1:]&#10;print(text)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>new_name = &quot;J&quot; + name[1:]</code>: Takes <code>&#39;J&#39;</code> and attaches everything from index 1 onward (<code>&quot;ython&quot;</code>).</p>
<p class="lesson-step">2. <code>text = &quot;H&quot; + text[1:]</code>: Creates a new string starting with <code>&#39;H&#39;</code> and reassigns <code>text</code>.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Jython&#10;  Hello</code></pre>
<p class="lesson-point"><strong>Why</strong>: Python strings do not allow item assignment, so you must construct a new string.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Never assign to <code>str[i]</code>; always create a new string with slicing.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 07 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-08" data-lesson-id="lecture7-topic-08">
<summary><span class="lesson-index">08</span><span class="lesson-title">Counting Characters</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: You can count how many times a character appears in a string using a loop, <code>.count()</code>, or a list comprehension.</p>
<pre><code class="language-python">word = &quot;banana&quot;&#10;count = 0&#10;&#10;# Method 1: Loop&#10;for letter in word:&#10;    if letter == &#39;a&#39;:&#10;        count += 1&#10;print(f&quot;Method 1: &#39;a&#39; appears {count} times&quot;)&#10;&#10;# Method 2: count() method&#10;count = word.count(&#39;a&#39;)&#10;print(f&quot;Method 2: &#39;a&#39; appears {count} times&quot;)&#10;&#10;# Method 3: List comprehension&#10;count = len([char for char in word if char == &#39;a&#39;])&#10;print(f&quot;Method 3: &#39;a&#39; appears {count} times&quot;)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>Method 1</code>: Loops over each letter and adds <code>1</code> to <code>count</code> when <code>letter == &#39;a&#39;</code>.</p>
<p class="lesson-step">2. <code>Method 2</code>: Calls built-in <code>.count(&#39;a&#39;)</code> directly.</p>
<p class="lesson-step">3. <code>Method 3</code>: Filters matching characters into a list and measures its length.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Method 1: &#39;a&#39; appears 3 times&#10;  Method 2: &#39;a&#39; appears 3 times&#10;  Method 3: &#39;a&#39; appears 3 times</code></pre>
<p class="lesson-point"><strong>Why</strong>: All three methods find the 3 <code>&#39;a&#39;</code> characters inside <code>&quot;banana&quot;</code>.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Built-in <code>.count()</code> is a concise way to count substrings.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 08 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-09" data-lesson-id="lecture7-topic-09">
<summary><span class="lesson-index">09</span><span class="lesson-title">Membership Testing (<code>in</code> Operator)</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: The <code>in</code> operator checks if a substring exists inside a string and returns <code>True</code> or <code>False</code>.</p>
<pre><code class="language-python">text = &quot;banana&quot;&#10;print(&#39;a&#39; in text)&#10;print(&#39;ana&#39; in text)&#10;print(&#39;seed&#39; in text)&#10;print(&#39;&#39; in text)&#10;print(&#39;B&#39; in text)&#10;print(&#39;B&#39;.lower() in text)&#10;&#10;filename = &quot;data_report_2025.pdf&quot;&#10;if &quot;report&quot; in filename:&#10;    print(&quot;This is a report file&quot;)&#10;if filename.endswith(&quot;.pdf&quot;):&#10;    print(&quot;PDF document&quot;)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>&#39;a&#39; in text</code>: Checks if <code>&#39;a&#39;</code> exists in <code>&quot;banana&quot;</code>.</p>
<p class="lesson-step">2. <code>&#39;seed&#39; in text</code>: Checks if <code>&#39;seed&#39;</code> exists.</p>
<p class="lesson-step">3. <code>&#39;&#39; in text</code>: Empty string is always present in any string.</p>
<p class="lesson-step">4. <code>&#39;B&#39; in text</code>: Checks uppercase <code>&#39;B&#39;</code>, which fails due to case sensitivity.</p>
<p class="lesson-step">5. <code>filename.endswith(&quot;.pdf&quot;)</code>: Checks if string ends with <code>&quot;.pdf&quot;</code>.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  True&#10;  True&#10;  False&#10;  True&#10;  False&#10;  True&#10;  This is a report file&#10;  PDF document</code></pre>
<p class="lesson-point"><strong>Why</strong>: Membership checks are case-sensitive.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Convert text to <code>.lower()</code> before checking if you want case-insensitive matching.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 09 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-10" data-lesson-id="lecture7-topic-10">
<summary><span class="lesson-index">10</span><span class="lesson-title">String Comparison Methods</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Strings are compared character-by-character using Unicode code point order.</p>
<pre><code class="language-python">print(&quot;apple&quot; &lt; &quot;banana&quot;)&#10;print(&quot;Apple&quot; &lt; &quot;apple&quot;)&#10;print(&quot;abc&quot; == &quot;abc&quot;)&#10;print(&quot;abc&quot; == &quot;ABC&quot;)&#10;&#10;word1 = &quot;Python&quot;&#10;word2 = &quot;python&quot;&#10;print(word1.lower() == word2.lower())&#10;&#10;print(&quot;5&quot; == str(5))&#10;&#10;words = [&quot;banana&quot;, &quot;apple&quot;, &quot;cherry&quot;]&#10;sorted_words = sorted(words)&#10;print(sorted_words)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>&quot;apple&quot; &lt; &quot;banana&quot;</code>: <code>&#39;a&#39;</code> comes before <code>&#39;b&#39;</code> alphabetically.</p>
<p class="lesson-step">2. <code>&quot;Apple&quot; &lt; &quot;apple&quot;</code>: Uppercase <code>&#39;A&#39;</code> (ASCII 65) is smaller than lowercase <code>&#39;a&#39;</code> (ASCII 97).</p>
<p class="lesson-step">3. <code>word1.lower() == word2.lower()</code>: Compares lowercase versions for equality.</p>
<p class="lesson-step">4. <code>sorted(words)</code>: Sorts string list alphabetically.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  True&#10;  True&#10;  True&#10;  False&#10;  True&#10;  True&#10;  [&#39;apple&#39;, &#39;banana&#39;, &#39;cherry&#39;]</code></pre>
<p class="lesson-point"><strong>Why</strong>: Uppercase letters have smaller ASCII numerical values than lowercase letters.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Numbers and strings are never equal (<code>&quot;5&quot; != 5</code>).</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 10 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-11" data-lesson-id="lecture7-topic-11">
<summary><span class="lesson-index">11</span><span class="lesson-title">Essential String Methods - Part 1 (Case, Strip, Search)</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Methods like <code>.upper()</code>, <code>.strip()</code>, <code>.find()</code>, and <code>.index()</code> help modify case, remove spaces, and locate text.</p>
<pre><code class="language-python">text = &quot; Hello World! &quot;&#10;&#10;print(text.upper())&#10;print(text.lower())&#10;print(&quot;python&quot;.capitalize())&#10;&#10;print(text.strip())&#10;print(text.lstrip())&#10;print(text.rstrip())&#10;&#10;print(&quot;banana&quot;.find(&#39;na&#39;))&#10;print(&quot;banana&quot;.find(&#39;na&#39;, 3))&#10;print(&quot;banana&quot;.find(&#39;x&#39;))&#10;print(&quot;banana&quot;.index(&#39;na&#39;))</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>text.upper()</code> / <code>lower()</code>: Converts text to all upper/lower case.</p>
<p class="lesson-step">2. <code>text.strip()</code>: Removes outer spaces.</p>
<p class="lesson-step">3. <code>find(&#39;na&#39;)</code>: Returns index of first match (or <code>-1</code> if missing).</p>
<p class="lesson-step">4. <code>index(&#39;na&#39;)</code>: Returns index of first match (raises <code>ValueError</code> if missing).</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  HELLO WORLD! &#10;   hello world! &#10;  Python&#10;  Hello World!&#10;  Hello World! &#10;   Hello World!&#10;  2&#10;  4&#10;  -1&#10;  2</code></pre>
<p class="lesson-point"><strong>Why</strong>: <code>.find()</code> returns <code>-1</code> safely when a substring is absent, whereas <code>.index()</code> raises an error.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Use <code>.find()</code> instead of <code>.index()</code> to prevent program crashes when searching.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 11 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-12" data-lesson-id="lecture7-topic-12">
<summary><span class="lesson-index">12</span><span class="lesson-title">Essential String Methods - Part 2 (Replace, Split, Join, Property Checks)</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: You can replace sub-text, split text into lists, join lists into text, and inspect string properties.</p>
<pre><code class="language-python">text = &quot;apple,banana,cherry&quot;&#10;print(text.replace(&#39;,&#39;, &#39;;&#39;))&#10;print(&quot;banana&quot;.replace(&#39;a&#39;, &#39;@&#39;, 2))&#10;&#10;fruits = text.split(&#39;,&#39;)&#10;print(fruits)&#10;print(&#39; - &#39;.join(fruits))&#10;&#10;print(&quot;hello&quot;.isalpha())&#10;print(&quot;hello123&quot;.isalnum())&#10;print(&quot;123&quot;.isdigit())&#10;print(&quot; &quot;.isspace())&#10;print(&quot;hello world&quot;.startswith(&quot;hello&quot;))&#10;print(&quot;hello world&quot;.endswith(&quot;world&quot;))</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>replace(&#39;,&#39;, &#39;;&#39;)</code>: Replaces commas with semicolons.</p>
<p class="lesson-step">2. <code>replace(&#39;a&#39;, &#39;@&#39;, 2)</code>: Replaces only the first 2 occurrences of <code>&#39;a&#39;</code>.</p>
<p class="lesson-step">3. <code>text.split(&#39;,&#39;)</code>: Splits text by comma into a list of strings.</p>
<p class="lesson-step">4. <code>&#39; - &#39;.join(fruits)</code>: Joins list elements using <code>&#39; - &#39;</code> delimiter.</p>
<p class="lesson-step">5. <code>.isalpha()</code>, <code>.isdigit()</code>: Returns boolean status checks.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  apple;banana;cherry&#10;  b@n@na&#10;  [&#39;apple&#39;, &#39;banana&#39;, &#39;cherry&#39;]&#10;  apple - banana - cherry&#10;  True&#10;  True&#10;  True&#10;  True&#10;  True&#10;  True</code></pre>
<p class="lesson-point"><strong>Why</strong>: Split breaks strings apart, while join stitches list elements together.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: <code>.split()</code> and <code>.join()</code> are inverse operations.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 12 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-13" data-lesson-id="lecture7-topic-13">
<summary><span class="lesson-index">13</span><span class="lesson-title">String Parsing Techniques</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Parsing extracts specific pieces of information from structured text strings using positions and delimiters.</p>
<pre><code class="language-python"># Example 1: Domain from email&#10;email = &quot;john.doe@example.com&quot;&#10;at_pos = email.find(&#39;@&#39;)&#10;domain = email[at_pos+1:]&#10;print(f&quot;Domain: {domain}&quot;)&#10;&#10;# Example 2: Filename and extension&#10;filepath = &quot;documents/report.pdf&quot;&#10;slash_pos = filepath.rfind(&#39;/&#39;)&#10;dot_pos = filepath.rfind(&#39;.&#39;)&#10;filename = filepath[slash_pos+1:dot_pos]&#10;extension = filepath[dot_pos+1:]&#10;print(f&quot;Filename: {filename}&quot;)&#10;print(f&quot;Extension: {extension}&quot;)&#10;&#10;# Example 3: Parse log data&#10;log = &quot;2025-01-15 14:30:25 INFO User login successful&quot;&#10;date = log[0:10]&#10;time = log[11:19]&#10;level = log[20:24]&#10;print(f&quot;Date: {date}, Time: {time}, Level: {level}&quot;)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>email.find(&#39;@&#39;)</code>: Finds <code>@</code> symbol position.</p>
<p class="lesson-step">2. <code>email[at_pos+1:]</code>: Slices string starting immediately after <code>@</code>.</p>
<p class="lesson-step">3. <code>rfind(&#39;/&#39;)</code>: Finds the rightmost slash position.</p>
<p class="lesson-step">4. <code>log[0:10]</code>: Uses exact index boundaries to extract log fields.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Domain: example.com&#10;  Filename: report&#10;  Extension: pdf&#10;  Date: 2025-01-15, Time: 14:30:25, Level: INFO</code></pre>
<p class="lesson-point"><strong>Why</strong>: Delimiter indices mark the starting and ending points for slicing.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Use <code>.rfind()</code> when you need to search from the right side of a string.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 13 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-14" data-lesson-id="lecture7-topic-14">
<summary><span class="lesson-index">14</span><span class="lesson-title">Formatted String Literals (f-Strings)</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: f-strings (<code>f&quot;...&quot;</code>) let you insert variables and expressions cleanly inside strings.</p>
<pre><code class="language-python">name = &quot;Alice&quot;&#10;age = 25&#10;print(f&quot;{name} is {age} years old&quot;)&#10;&#10;a, b = 5, 3&#10;print(f&quot;{a} + {b} = {a + b}&quot;)&#10;print(f&quot;Square of {a} is {a**2}&quot;)&#10;&#10;price = 19.9876&#10;print(f&quot;Price: ${price:.2f}&quot;)&#10;percentage = 0.756&#10;print(f&quot;Success rate: {percentage:.1%}&quot;)&#10;&#10;text = &quot;Python&quot;&#10;print(f&quot;|{text:&lt;10}|&quot;)&#10;print(f&quot;|{text:&gt;10}|&quot;)&#10;print(f&quot;|{text:^10}|&quot;)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>f&quot;{name} is {age}&quot;</code>: Replaces <code>{name}</code> and <code>{age}</code> with variable values.</p>
<p class="lesson-step">2. <code>f&quot;{a + b}&quot;</code>: Evaluates math expressions inside brackets.</p>
<p class="lesson-step">3. <code>f&quot;${price:.2f}&quot;</code>: Formats float number to 2 decimal places.</p>
<p class="lesson-step">4. <code>f&quot;{percentage:.1%}&quot;</code>: Formats decimal number as percentage.</p>
<p class="lesson-step">5. <code>:&lt;10</code>, <code>:&gt;10</code>, <code>:^10</code>: Align text left, right, and center across 10 spaces.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Alice is 25 years old&#10;  5 + 3 = 8&#10;  Square of 5 is 25&#10;  Price: $19.99&#10;  Success rate: 75.6%&#10;  |Python    |&#10;  |    Python|&#10;  |  Python  |</code></pre>
<p class="lesson-point"><strong>Why</strong>: f-strings directly evaluate expressions inside <code>{}</code> at runtime.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: f-strings are faster and cleaner than older string formatting methods.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 14 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-15" data-lesson-id="lecture7-topic-15">
<summary><span class="lesson-index">15</span><span class="lesson-title">Defensive Programming with Strings (Pitfall &amp; Fix)</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Defensive programming checks string length or validity before indexing to avoid crashes.</p>
<pre><code class="language-python">line = &quot;&quot;&#10;# Bad code: if line[0] == &#39;#&#39;: -&gt; Raises IndexError on an empty string!&#10;&#10;# Fix 1: Guardian Pattern (Check length first)&#10;if len(line) &gt; 0 and line[0] == &#39;#&#39;:&#10;    print(&quot;Comment line&quot;)&#10;&#10;# Fix 2: Better approach with startswith()&#10;if line.startswith(&#39;#&#39;):&#10;    print(&quot;Comment line&quot;)&#10;&#10;user_input = &quot;  Python  &quot;.strip()&#10;if user_input:&#10;    first_char = user_input[0]&#10;    print(f&quot;First character: {first_char}&quot;)&#10;else:&#10;    print(&quot;Empty input received&quot;)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>len(line) &gt; 0 and ...</code>: Short-circuits so indexing is skipped if string is empty.</p>
<p class="lesson-step">2. <code>line.startswith(&#39;#&#39;)</code>: Safely returns <code>False</code> on empty strings without crashing.</p>
<p class="lesson-step">3. <code>user_input.strip()</code>: Cleans outer whitespace before validation.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  First character: P</code></pre>
<p class="lesson-point"><strong>Why</strong>: Empty strings have length 0, so accessing index <code>0</code> raises <code>IndexError</code>.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Use <code>.startswith()</code> to safely check first characters without length checks.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 15 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-16" data-lesson-id="lecture7-topic-16">
<summary><span class="lesson-index">16</span><span class="lesson-title">Solved Problem 1 - Character Frequency Counter</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: A function that counts how many times each character appears in text using a dictionary.</p>
<pre><code class="language-python">def char_frequency(text):&#10;    freq = {}&#10;    for char in text:&#10;        freq[char] = freq.get(char, 0) + 1&#10;    return freq&#10;&#10;text = &quot;programming&quot;&#10;print(char_frequency(text))</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>freq = {}</code>: Creates empty dictionary.</p>
<p class="lesson-step">2. <code>for char in text:</code>: Loops over characters.</p>
<p class="lesson-step">3. <code>freq.get(char, 0) + 1</code>: Fetches current count (default 0) and adds 1.</p>
<p class="lesson-step">4. <code>return freq</code>: Returns final dictionary result.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  {&#39;p&#39;: 1, &#39;r&#39;: 2, &#39;o&#39;: 1, &#39;g&#39;: 2, &#39;a&#39;: 1, &#39;m&#39;: 2, &#39;i&#39;: 1, &#39;n&#39;: 1}</code></pre>
<p class="lesson-point"><strong>Why</strong>: <code>freq.get(char, 0)</code> safely updates counts without missing-key errors.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: <code>.get(key, default)</code> simplifies counter logic in loops.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 16 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-17" data-lesson-id="lecture7-topic-17">
<summary><span class="lesson-index">17</span><span class="lesson-title">Solved Problem 2 - Email Validator &amp; Parser</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Validates email format and extracts username and domain.</p>
<pre><code class="language-python">def validate_email(email):&#10;    if &#39;@&#39; not in email:&#10;        return False, &quot;Missing @ symbol&quot;&#10;    username, domain = email.split(&#39;@&#39;, 1)&#10;    if not username or not domain:&#10;        return False, &quot;Missing username or domain&quot;&#10;    if &#39;.&#39; not in domain:&#10;        return False, &quot;Domain missing dot&quot;&#10;    return True, {&#10;        &#39;username&#39;: username,&#10;        &#39;domain&#39;: domain,&#10;        &#39;is_educational&#39;: domain.endswith(&#39;.edu&#39;),&#10;        &#39;is_commercial&#39;: domain.endswith(&#39;.com&#39;)&#10;    }&#10;&#10;emails = [&quot;user@example.com&quot;, &quot;student@ewu.edu&quot;, &quot;invalid.email&quot;]&#10;for email in emails:&#10;    valid, result = validate_email(email)&#10;    print(f&quot;{email}: {result}&quot;)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>if &#39;@&#39; not in email</code>: Checks for <code>@</code> presence.</p>
<p class="lesson-step">2. <code>email.split(&#39;@&#39;, 1)</code>: Splits email into username and domain.</p>
<p class="lesson-step">3. <code>domain.endswith(...)</code>: Checks domain extension type.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  user@example.com: {&#39;username&#39;: &#39;user&#39;, &#39;domain&#39;: &#39;example.com&#39;, &#39;is_educational&#39;: False, &#39;is_commercial&#39;: True}&#10;  student@ewu.edu: {&#39;username&#39;: &#39;student&#39;, &#39;domain&#39;: &#39;ewu.edu&#39;, &#39;is_educational&#39;: True, &#39;is_commercial&#39;: False}&#10;  invalid.email: Missing @ symbol</code></pre>
<p class="lesson-point"><strong>Why</strong>: Combines string membership, splitting, and <code>endswith()</code> validation.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Pass maxsplit parameter <code>1</code> to <code>.split()</code> when separating email headers.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 17 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-18" data-lesson-id="lecture7-topic-18">
<summary><span class="lesson-index">18</span><span class="lesson-title">Solved Problem 3 - Text Analyzer</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Performs full text analysis calculating counts for characters, words, sentences, types, and word frequencies.</p>
<pre><code class="language-python">def text_analyzer(text):&#10;    char_count = len(text)&#10;    word_count = len(text.split())&#10;    sentence_count = text.count(&#39;.&#39;) + text.count(&#39;!&#39;) + text.count(&#39;?&#39;)&#10;    alpha_count = sum(1 for char in text if char.isalpha())&#10;    digit_count = sum(1 for char in text if char.isdigit())&#10;    space_count = sum(1 for char in text if char.isspace())&#10;    &#10;    words = text.lower().split()&#10;    word_freq = {}&#10;    for word in words:&#10;        word = word.strip(&#39;.,!?&#39;)&#10;        if word:&#10;            word_freq[word] = word_freq.get(word, 0) + 1&#10;            &#10;    return {&#10;        &#39;characters&#39;: char_count,&#10;        &#39;words&#39;: word_count,&#10;        &#39;sentences&#39;: sentence_count,&#10;        &#39;alphabetic&#39;: alpha_count,&#10;        &#39;digits&#39;: digit_count,&#10;        &#39;spaces&#39;: space_count,&#10;        &#39;most_common_word&#39;: max(word_freq, key=word_freq.get) if word_freq else None&#10;    }&#10;&#10;sample_text = &quot;Hello world! This is a test. Hello again.&quot;&#10;result = text_analyzer(sample_text)&#10;for key, value in result.items():&#10;    print(f&quot;{key}: {value}&quot;)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. Calculates totals using <code>len()</code>, <code>.split()</code>, and <code>.count()</code>.</p>
<p class="lesson-step">2. Uses generator expressions with <code>.isalpha()</code>, <code>.isdigit()</code>, and <code>.isspace()</code> to count character categories.</p>
<p class="lesson-step">3. Cleans punctuation from words using <code>.strip(&#39;.,!?&#39;)</code> before counting frequencies.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  characters: 41&#10;  words: 8&#10;  sentences: 3&#10;  alphabetic: 31&#10;  digits: 0&#10;  spaces: 7&#10;  most_common_word: hello</code></pre>
<p class="lesson-point"><strong>Why</strong>: <code>.strip()</code> cleans punctuation so <code>&quot;hello!&quot;</code> matches <code>&quot;hello&quot;</code>.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Always clean punctuation before counting word frequency.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 18 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-19" data-lesson-id="lecture7-topic-19">
<summary><span class="lesson-index">19</span><span class="lesson-title">Solved Problem 4 - String Manipulation Utilities</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p class="lesson-point"><strong>What it is</strong>: Utility functions to reverse strings, check palindromes, capitalize words, and remove duplicate letters.</p>
<pre><code class="language-python">def reverse_string(s):&#10;    return s[::-1]&#10;&#10;def is_palindrome(s):&#10;    s_clean = &#39;&#39;.join(char.lower() for char in s if char.isalnum())&#10;    return s_clean == s_clean[::-1]&#10;&#10;def capitalize_words(s):&#10;    return &#39; &#39;.join(word.capitalize() for word in s.split())&#10;&#10;def remove_duplicates(s):&#10;    seen = set()&#10;    result = []&#10;    for char in s:&#10;        if char not in seen:&#10;            seen.add(char)&#10;            result.append(char)&#10;    return &#39;&#39;.join(result)&#10;&#10;test_string = &quot;hello world wow&quot;&#10;print(f&quot;Original: {test_string}&quot;)&#10;print(f&quot;Reversed: {reverse_string(test_string)}&quot;)&#10;print(f&quot;Palindrome check: {is_palindrome(&#39;A man a plan a canal Panama&#39;)}&quot;)&#10;print(f&quot;Capitalized: {capitalize_words(test_string)}&quot;)&#10;print(f&quot;Duplicates removed: {remove_duplicates(&#39;programming&#39;)}&quot;)</code></pre>
<p class="lesson-point"><strong>Line-by-line explanation</strong>:</p>
<p class="lesson-step">1. <code>reverse_string</code>: Reverses string using step <code>-1</code>.</p>
<p class="lesson-step">2. <code>is_palindrome</code>: Cleans punctuation/spaces and checks if reversed text matches.</p>
<p class="lesson-step">3. <code>capitalize_words</code>: Capitalizes first letter of each word and joins with spaces.</p>
<p class="lesson-step">4. <code>remove_duplicates</code>: Uses a <code>set</code> to track seen characters while keeping original order.</p>
<p class="lesson-point"><strong>Output</strong>:</p>
<pre><code class="language-text">  Original: hello world wow&#10;  Reversed: wow dlrow olleh&#10;  Palindrome check: True&#10;  Capitalized: Hello World Wow&#10;  Duplicates removed: progamin</code></pre>
<p class="lesson-point"><strong>Why</strong>: Filtering with <code>.isalnum()</code> cleans non-alphanumeric characters for accurate palindrome checking.</p>
<p class="lesson-remember">💡 <strong>Remember this</strong>: Combine <code>set()</code> tracking with a <code>list</code> to remove duplicate characters while preserving order.</p>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 19 of 20</span></div>
</div>
</details>

<details class="study-lesson" id="lesson-20" data-lesson-id="lecture7-topic-20">
<summary><span class="lesson-index">20</span><span class="lesson-title">Practice Exercises Solutions (Slides Exercises 1–8)</span><span class="lesson-state">TO DO</span></summary>
<div class="lesson-body">
<p>Here are step-by-step solutions for all 8 practice exercises listed in the slides:</p>
<h4><strong>Ex 1: Character Counter</strong></h4>
<p class="lesson-point"><strong>Goal</strong>: Count occurrences of each character.</p>
<pre><code class="language-python">def char_counter(s):&#10;    return {char: s.count(char) for char in dict.fromkeys(s)}&#10;&#10;print(char_counter(&quot;hello&quot;))&#10;# Output: {&#39;h&#39;: 1, &#39;e&#39;: 1, &#39;l&#39;: 2, &#39;o&#39;: 1}</code></pre>
<h4><strong>Ex 2: Email Extractor</strong></h4>
<p class="lesson-point"><strong>Goal</strong>: Extract email addresses from text.</p>
<pre><code class="language-python">def extract_emails(text):&#10;    words = text.split()&#10;    return [w.strip(&#39;.,&#39;) for w in words if &#39;@&#39; in w and &#39;.&#39; in w.split(&#39;@&#39;)[-1]]&#10;&#10;print(extract_emails(&quot;Contact user@test.com or admin@site.org for info.&quot;))&#10;# Output: [&#39;user@test.com&#39;, &#39;admin@site.org&#39;]</code></pre>
<h4><strong>Ex 3: Password Validator</strong></h4>
<p class="lesson-point"><strong>Goal</strong>: Verify length, uppercase, lowercase, digit, and special character criteria.</p>
<pre><code class="language-python">def validate_password(p):&#10;    has_upper = any(c.isupper() for c in p)&#10;    has_lower = any(c.islower() for c in p)&#10;    has_digit = any(c.isdigit() for c in p)&#10;    has_spec = any(not c.isalnum() for c in p)&#10;    return len(p) &gt;= 8 and has_upper and has_lower and has_digit and has_spec&#10;&#10;print(validate_password(&quot;P@ssword1&quot;))&#10;# Output: True</code></pre>
<h4><strong>Ex 4: CSV Parser</strong></h4>
<p class="lesson-point"><strong>Goal</strong>: Parse CSV text manually without <code>csv</code> module.</p>
<pre><code class="language-python">def parse_csv(csv_text):&#10;    return [line.split(&#39;,&#39;) for line in csv_text.strip().split(&#39;\n&#39;)]&#10;&#10;print(parse_csv(&quot;name,age\nAlice,25\nBob,30&quot;))&#10;# Output: [[&#39;name&#39;, &#39;age&#39;], [&#39;Alice&#39;, &#39;25&#39;], [&#39;Bob&#39;, &#39;30&#39;]]</code></pre>
<h4><strong>Ex 5: Text Statistics</strong></h4>
<p class="lesson-point"><strong>Goal</strong>: Calculate average word length and average sentence length.</p>
<pre><code class="language-python">def text_stats(text):&#10;    words = text.split()&#10;    sentences = [s for s in text.split(&#39;.&#39;) if s.strip()]&#10;    avg_word_len = sum(len(w) for w in words) / len(words)&#10;    avg_sent_len = len(words) / len(sentences)&#10;    return f&quot;Avg Word: {avg_word_len:.1f}, Avg Sentence: {avg_sent_len:.1f} words&quot;&#10;&#10;print(text_stats(&quot;Python is great. It is fun to learn.&quot;))&#10;# Output: Avg Word: 3.5, Avg Sentence: 4.0 words</code></pre>
<h4><strong>Ex 6: String Compression</strong></h4>
<p class="lesson-point"><strong>Goal</strong>: Compress repeated letters (e.g., <code>&quot;aaabbb&quot;</code> -&gt; <code>&quot;a3b3&quot;</code>).</p>
<pre><code class="language-python">def compress_string(s):&#10;    if not s: return &quot;&quot;&#10;    result, count = [], 1&#10;    for i in range(1, len(s)):&#10;        if s[i] == s[i-1]:&#10;            count += 1&#10;        else:&#10;            result.append(f&quot;{s[i-1]}{count}&quot;)&#10;            count = 1&#10;    result.append(f&quot;{s[-1]}{count}&quot;)&#10;    return &quot;&quot;.join(result)&#10;&#10;print(compress_string(&quot;aaabbc&quot;))&#10;# Output: a3b2c1</code></pre>
<h4><strong>Ex 7: Anagram Checker</strong></h4>
<p class="lesson-point"><strong>Goal</strong>: Check if two strings are anagrams.</p>
<pre><code class="language-python">def is_anagram(s1, s2):&#10;    return sorted(s1.lower().replace(&quot; &quot;, &quot;&quot;)) == sorted(s2.lower().replace(&quot; &quot;, &quot;&quot;))&#10;&#10;print(is_anagram(&quot;listen&quot;, &quot;silent&quot;))&#10;# Output: True</code></pre>
<h4><strong>Ex 8: URL Parser</strong></h4>
<p class="lesson-point"><strong>Goal</strong>: Extract protocol, domain, path, and parameters from a URL.</p>
<pre><code class="language-python">def parse_url(url):&#10;    protocol, rest = url.split(&quot;://&quot;, 1)&#10;    domain, _, path_and_query = rest.partition(&quot;/&quot;)&#10;    path, _, params = path_and_query.partition(&quot;?&quot;)&#10;    return {&#10;        &quot;protocol&quot;: protocol,&#10;        &quot;domain&quot;: domain,&#10;        &quot;path&quot;: path,&#10;        &quot;params&quot;: params&#10;    }&#10;&#10;print(parse_url(&quot;https://example.com/search?q=python&quot;))&#10;# Output: {&#39;protocol&#39;: &#39;https&#39;, &#39;domain&#39;: &#39;example.com&#39;, &#39;path&#39;: &#39;search&#39;, &#39;params&#39;: &#39;q=python&#39;}</code></pre>
<div class="lesson-actions"><button type="button" class="lesson-done" aria-pressed="false">Mark lesson done ✓</button><span>Lesson 20 of 20</span></div>
</div>
</details>
</div>
<section class="study-recap">
<span class="p-eyebrow">Quick recap</span>
<h2>Keep these five ideas</h2>
<ol>
<li>Strings are immutable: create a new string when you need a change.</li>
<li>Indexing starts at 0; negative indices count from the right.</li>
<li>Slices use <code>[start:end:step]</code>, with the end excluded.</li>
<li>Methods such as <code>.strip()</code>, <code>.split()</code>, <code>.join()</code>, and <code>.replace()</code> help parse text.</li>
<li>f-strings insert values and format their display.</li>
</ol>
<h3>Find vs index</h3>
<div class="study-table-wrap"><table><thead><tr><th>Method</th><th>Found</th><th>Missing</th></tr></thead><tbody><tr><td><code>.find()</code></td><td>First position</td><td><code>-1</code></td></tr><tr><td><code>.index()</code></td><td>First position</td><td>Raises <code>ValueError</code></td></tr></tbody></table></div>
<h3>Quick self-test</h3>
<ol>
<li>What happens when you run <code>"Python"[0] = "J"</code>?</li>
<li>What does <code>"Python"[::-1]</code> return?</li>
<li>What does <code>"banana".find("z")</code> return?</li>
</ol>
<a class="p-button p-button--secondary" href="../">← Back to CS295</a>
</section>
</div>
