# 算法挑战（反转提供的字符串）
* 先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。
* 你的结果必须是一个字符串
```js
  function reverseString(str) {
    // 请把你的代码写在这里
    return str;
  }
  reverseString("hello");
```
## 1.使用内置函数反转字符串
* 对于这个解决方案，我们将使用三种方法： String.prototype.split()方法，Array.prototype.reverse()方法和Array.prototype.join()方法.
* split() 方法通过将字符串分隔成子字符串来将字符串对象分割为一个字符串数组。
* reverse() 方法反转了一个数组。第一个数组原属编程最后一个，最后一个变成第一个。
* join()方法将数组的所有元素连接到一个字符串中。
```js
  function reverseString(str) {
    // 步骤1.使用split()方法返回一个新数组
    var splitString = str.split("");  // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    // 步骤2.使用reverse()方法反转新创建的数组
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["0", "l", "l", "e", "h"]
    // 步骤3.使用join()方法将数组的所有元素连接成一个字符串
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    // 步骤4.返回颠倒的字符串
    return joinArray; // "olleh"
  }
  reverseString("hello");
```
* 将三种方法链接在一起：
```js
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  reverseString("hello");
```
* 上面的代码看起来是不是很简洁。
## 2.使用递减的for循环反转字符串
```js
  function reverseString(str) {
    // 步骤1.创建一个空字符串，它将托管新创建的字符串
    var newString = "";
  
    // 步骤 2. 创建for循环
    /* 循环的起点将是(str.length - 1), 它对应于字符串的最后一个字符"o",只要大于或等于0，循环就会继续  在每次迭代后递减i */
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
      For each iteration:   i = str.length - 1 and newString = newString + str[i]
      First iteration:      i = 5 - 1 = 4,    newString = "" + "o" = "o"
      Second iteration:     i = 4 - 1 = 3,    newString = "o" + "l" = "oll"
      Third iteration:      i = 3 - 1 = 2,    newString = "ol" + "l" = "oll"
      Fourth iteration:     i = 2 - 1 = 1,    newString = "oll" + "e" = "olle"
      Fifth iteration:      i = 1 - 1 = 0,    newString = "olle" + "h" = "olleh"
      End of the FOR Loop */

      // 步骤 3. return 返回反转的字符串
      return newString; // "olleh"
  }

  reverseString('hello");
```
* 去掉注释后：
```js
  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i -- ) {
      newString += str[i];
    }
    return newString;
  }
  reverseString('hello");
```
## 3.递归反转字符串
* 对于这个解决方案，我们将使用两种方法： String.prototype.substr()方法和String.prototype.charAt()方法.
* substr()方法返回从指定位置开始的指定字符数的字符串中的字符。
```js
  "hello".substr(1); // "ello"
```
* charAt()方法从字符中返回指定的字符
```js
  "hello".charAt(0); // "h"
```

```js
  function reverseString(str) {
    if (str === "")  // This is the terminal case that will end the recursion
    return "";
    else 
    return reverseString(str.substr(1)) + str.charAt(0);
    /*
    First Part of the recursion method
    You need to remember that you won't have just one call, you'll have several nested calls 
    

    Each call: str === "?"            reverseString(str.subst(1))    + str.charAt(0)
    1st call - reverseString("Hello")  will return    reverseString("ello")    + "h"
    2nd call - reverseString("ello")   will return reverseString("llo")      + "e"
    3rd call - reverseString("llo")    will return reverseString("lo")       + "l"
    4th call - reverseString("lo")     will return   reverseString("o")        + "l"
    5th call - reverseString("o")      will return   reverseString("")         + "o"

    Second part of the recursion method
    The method hits the if condition and the most highly nested call returns immediately


    5th call will return reverseString("") + "o" = "o"
    4th call will return reverseString("o") + "l" = "o" + "l"
    3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
    2nd call will return reverseString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
    */
  }
  reverseString("hello");
```
* The depth of the recursion is equal to the length of the String. This solution is not the best one and will be really slow if the String is very long and the stack size is of major concern.
###  Without comments:
```js
  function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);  
  }
  reverseString("hello");
```

### Conditional (Ternary) Operator:
```js
  function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");
```