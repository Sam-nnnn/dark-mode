How we would use Dark mode on other potential routes/components in a bigger application. Would your solution work for this?

A：可以，透過 status lifting 將 status 提升到最高，再透過 props 傳遞下去，讓全局共同監聽狀態的變化。

How we can apply a class to the html DOM element

A：透過functional component的方式改變status，再由status的狀態影響JSX內的變化。


原始：
![圖片](https://user-images.githubusercontent.com/109059570/204273165-b1b13d88-61df-42c0-8b15-512292f0725b.png)

dark mode：
![圖片](https://user-images.githubusercontent.com/109059570/204273184-ef2ea68a-a1af-4a73-9f90-9d70990c28b0.png)

