// 直接在代码中定义题目数据
const questionsData = `1. 性格外向，喜欢交际
2. 心肠柔软，有同情心
3. 缺乏条理*
4. 从容，善于处理压力
5. 对艺术没有什么兴趣*
6. 性格坚定自信，敢于表达自己的观点
7. 为人恭谦，尊重他人
8. 比较懒*
9. 经历挫折后仍能保持积极心态
10. 对许多不同的事物都感兴趣
11. 很少觉得兴奋或者特别想要做什么*
12. 常常挑别人的毛病*
13. 可信赖的，可靠的
14. 喜怒无常，情绪起伏较多*
15. 善于创造，能找到聪明的方法来做事
16. 比较安静*
17. 对他人没有什么同情心*
18. 做事有计划有条理
19. 容易紧张*
20. 着迷于艺术、音乐或文学
21. 常常处于主导地位，像个领导一样
22. 常与他人意见不和*
23. 很难开始行动起来去完成一项任务*
24. 觉得有安全感，对自己满意
25. 不喜欢知识性或者哲学性强的讨论*
26. 不如别人有活力*
27. 宽宏大量
28. 有时比较没有责任心*
29. 情绪稳定，不易生气
30. 几乎没有什么创造性*
31. 有时会害羞，比较内向*
32. 乐于助人，待人无私
33. 习惯让事物保持整洁有序
34. 时常忧心忡忡，担心很多事情*
35. 重视艺术与审美
36. 感觉自己很难对他人产生影响*
37. 有时对人比较粗鲁*
38. 有效率，做事有始有终
39. 时常觉得悲伤*
40. 思想深刻
41. 精力充沛
42. 不相信别人，怀疑别人的意图*
43. 可靠的，总是值得他人信赖
44. 能够控制自己的情绪
45. 缺乏想象力*
46. 爱说话，健谈
47. 有时对人冷淡，漠不关心*
48. 乱糟糟的，不爱收拾*
49. 很少觉得焦虑或者害怕
50. 觉得诗歌、戏剧很无聊*
51. 更喜欢让别人来领头负责*
52. 待人谦逊礼让
53. 有恒心，能坚持把事情做完
54. 时常觉得郁郁寡欢*
55. 对抽象的概念和想法没什么兴趣*
56. 充满热情
57. 把人往最好的方面想
58. 有时候会做出一些不负责任的行为*
59. 情绪多变，容易愤怒*
60. 有创意，能想出新点子`;

// 添加群体分布数据
let distributionData = [
    { Domain: "Extraversion", Group: "U.S. internet", n: 1000, Mean: 3.23, SD: 0.80, Alpha: 0.88, "Test-Retest": 0.80 },
    { Domain: "Extraversion", Group: "U.S. college", n: 470, Mean: 3.28, SD: 0.71, Alpha: 0.87, "Test-Retest": 0.80 },
    { Domain: "Extraversion", Group: "CN college", n: 1194, Mean: 3.19, SD: 0.66, Alpha: 0.87, "Test-Retest": 0.80 },
    { Domain: "Extraversion", Group: "CN employee", n: 486, Mean: 3.24, SD: 0.60, Alpha: 0.85, "Test-Retest": 0.80 },
    { Domain: "Extraversion", Group: "CN substance use", n: 765, Mean: 3.34, SD: 0.57, Alpha: 0.72, "Test-Retest": 0.80 },
    { Domain: "Extraversion", Group: "CN adolescent T1", n: 315, Mean: 3.19, SD: 0.70, Alpha: 0.83, "Test-Retest": 0.80 },
    { Domain: "Extraversion", Group: "CN adolescent T2", n: 315, Mean: 3.20, SD: 0.70, Alpha: 0.83, "Test-Retest": 0.80 },
    { Domain: "Sociability", Group: "U.S. internet", n: 1000, Mean: 2.95, SD: 1.05, Alpha: 0.84, "Test-Retest": 0.72 },
    { Domain: "Sociability", Group: "U.S. college", n: 470, Mean: 3.02, SD: 0.96, Alpha: 0.84, "Test-Retest": 0.72 },
    { Domain: "Sociability", Group: "CN college", n: 1194, Mean: 3.14, SD: 0.89, Alpha: 0.85, "Test-Retest": 0.72 },
    { Domain: "Sociability", Group: "CN employee", n: 486, Mean: 3.12, SD: 0.80, Alpha: 0.81, "Test-Retest": 0.72 },
    { Domain: "Sociability", Group: "CN substance use", n: 765, Mean: 3.20, SD: 0.85, Alpha: 0.64, "Test-Retest": 0.72 },
    { Domain: "Sociability", Group: "CN adolescent T1", n: 315, Mean: 3.19, SD: 0.99, Alpha: 0.82, "Test-Retest": 0.72 },
    { Domain: "Sociability", Group: "CN adolescent T2", n: 315, Mean: 3.21, SD: 1.04, Alpha: 0.82, "Test-Retest": 0.72 },
    { Domain: "Assertiveness", Group: "U.S. internet", n: 1000, Mean: 3.28, SD: 0.93, Alpha: 0.77, "Test-Retest": 0.72 },
    { Domain: "Assertiveness", Group: "U.S. college", n: 470, Mean: 3.28, SD: 0.84, Alpha: 0.76, "Test-Retest": 0.72 },
    { Domain: "Assertiveness", Group: "CN college", n: 1194, Mean: 3.05, SD: 0.73, Alpha: 0.70, "Test-Retest": 0.72 },
    { Domain: "Assertiveness", Group: "CN employee", n: 486, Mean: 3.15, SD: 0.66, Alpha: 0.67, "Test-Retest": 0.72 },
    { Domain: "Assertiveness", Group: "CN substance use", n: 765, Mean: 3.29, SD: 0.68, Alpha: 0.44, "Test-Retest": 0.72 },
    { Domain: "Assertiveness", Group: "CN adolescent T1", n: 315, Mean: 2.93, SD: 0.76, Alpha: 0.56, "Test-Retest": 0.72 },
    { Domain: "Assertiveness", Group: "CN adolescent T2", n: 315, Mean: 2.96, SD: 0.75, Alpha: 0.56, "Test-Retest": 0.72 },
    { Domain: "Energy", Group: "U.S. internet", n: 1000, Mean: 3.47, SD: 0.89, Alpha: 0.74, "Test-Retest": 0.65 },
    { Domain: "Energy", Group: "U.S. college", n: 470, Mean: 3.53, SD: 0.75, Alpha: 0.70, "Test-Retest": 0.65 },
    { Domain: "Energy", Group: "CN college", n: 1194, Mean: 3.39, SD: 0.75, Alpha: 0.75, "Test-Retest": 0.65 },
    { Domain: "Energy", Group: "CN employee", n: 486, Mean: 3.44, SD: 0.72, Alpha: 0.73, "Test-Retest": 0.65 },
    { Domain: "Energy", Group: "CN substance use", n: 765, Mean: 3.56, SD: 0.68, Alpha: 0.47, "Test-Retest": 0.65 },
    { Domain: "Energy", Group: "CN adolescent T1", n: 315, Mean: 3.45, SD: 0.79, Alpha: 0.61, "Test-Retest": 0.65 },
    { Domain: "Energy", Group: "CN adolescent T2", n: 315, Mean: 3.44, SD: 0.77, Alpha: 0.61, "Test-Retest": 0.65 },
    { Domain: "Agreeableness", Group: "U.S. internet", n: 1000, Mean: 3.68, SD: 0.64, Alpha: 0.82, "Test-Retest": 0.70 },
    { Domain: "Agreeableness", Group: "U.S. college", n: 470, Mean: 3.72, SD: 0.60, Alpha: 0.83, "Test-Retest": 0.70 },
    { Domain: "Agreeableness", Group: "CN college", n: 1194, Mean: 3.69, SD: 0.47, Alpha: 0.79, "Test-Retest": 0.70 },
    { Domain: "Agreeableness", Group: "CN employee", n: 486, Mean: 3.81, SD: 0.49, Alpha: 0.81, "Test-Retest": 0.70 },
    { Domain: "Agreeableness", Group: "CN substance use", n: 765, Mean: 3.93, SD: 0.53, Alpha: 0.77, "Test-Retest": 0.70 },
    { Domain: "Agreeableness", Group: "CN adolescent T1", n: 315, Mean: 3.56, SD: 0.53, Alpha: 0.75, "Test-Retest": 0.70 },
    { Domain: "Agreeableness", Group: "CN adolescent T2", n: 315, Mean: 3.52, SD: 0.52, Alpha: 0.75, "Test-Retest": 0.70 },
    { Domain: "Compassion", Group: "U.S. internet", n: 1000, Mean: 3.84, SD: 0.78, Alpha: 0.62, "Test-Retest": 0.65 },
    { Domain: "Compassion", Group: "U.S. college", n: 470, Mean: 3.85, SD: 0.75, Alpha: 0.70, "Test-Retest": 0.65 },
    { Domain: "Compassion", Group: "CN college", n: 1194, Mean: 3.75, SD: 0.61, Alpha: 0.66, "Test-Retest": 0.65 },
    { Domain: "Compassion", Group: "CN employee", n: 486, Mean: 3.85, SD: 0.60, Alpha: 0.65, "Test-Retest": 0.65 },
    { Domain: "Compassion", Group: "CN substance use", n: 765, Mean: 4.07, SD: 0.62, Alpha: 0.51, "Test-Retest": 0.65 },
    { Domain: "Compassion", Group: "CN adolescent T1", n: 315, Mean: 3.76, SD: 0.66, Alpha: 0.59, "Test-Retest": 0.65 },
    { Domain: "Compassion", Group: "CN adolescent T2", n: 315, Mean: 3.68, SD: 0.68, Alpha: 0.59, "Test-Retest": 0.65 },
    { Domain: "Respectfulness", Group: "U.S. internet", n: 1000, Mean: 3.98, SD: 0.71, Alpha: 0.67, "Test-Retest": 0.53 },
    { Domain: "Respectfulness", Group: "U.S. college", n: 470, Mean: 3.95, SD: 0.66, Alpha: 0.69, "Test-Retest": 0.53 },
    { Domain: "Respectfulness", Group: "CN college", n: 1194, Mean: 3.80, SD: 0.54, Alpha: 0.60, "Test-Retest": 0.53 },
    { Domain: "Respectfulness", Group: "CN employee", n: 486, Mean: 3.94, SD: 0.55, Alpha: 0.62, "Test-Retest": 0.53 },
    { Domain: "Respectfulness", Group: "CN substance use", n: 765, Mean: 3.86, SD: 0.67, Alpha: 0.55, "Test-Retest": 0.53 },
    { Domain: "Respectfulness", Group: "CN adolescent T1", n: 315, Mean: 3.49, SD: 0.61, Alpha: 0.47, "Test-Retest": 0.53 },
    { Domain: "Respectfulness", Group: "CN adolescent T2", n: 315, Mean: 3.45, SD: 0.55, Alpha: 0.47, "Test-Retest": 0.53 },
    { Domain: "Trust", Group: "U.S. internet", n: 1000, Mean: 3.23, SD: 0.82, Alpha: 0.67, "Test-Retest": 0.63 },
    { Domain: "Trust", Group: "U.S. college", n: 470, Mean: 3.34, SD: 0.78, Alpha: 0.71, "Test-Retest": 0.63 },
    { Domain: "Trust", Group: "CN college", n: 1194, Mean: 3.51, SD: 0.62, Alpha: 0.59, "Test-Retest": 0.63 },
    { Domain: "Trust", Group: "CN employee", n: 486, Mean: 3.65, SD: 0.65, Alpha: 0.63, "Test-Retest": 0.63 },
    { Domain: "Trust", Group: "CN substance use", n: 765, Mean: 3.85, SD: 0.65, Alpha: 0.49, "Test-Retest": 0.63 },
    { Domain: "Trust", Group: "CN adolescent T1", n: 315, Mean: 3.42, SD: 0.71, Alpha: 0.52, "Test-Retest": 0.63 },
    { Domain: "Trust", Group: "CN adolescent T2", n: 315, Mean: 3.42, SD: 0.71, Alpha: 0.52, "Test-Retest": 0.63 },
    { Domain: "Conscientiousness", Group: "U.S. internet", n: 1000, Mean: 3.43, SD: 0.77, Alpha: 0.88, "Test-Retest": 0.73 },
    { Domain: "Conscientiousness", Group: "U.S. college", n: 470, Mean: 3.47, SD: 0.65, Alpha: 0.85, "Test-Retest": 0.73 },
    { Domain: "Conscientiousness", Group: "CN college", n: 1194, Mean: 3.29, SD: 0.59, Alpha: 0.85, "Test-Retest": 0.73 },
    { Domain: "Conscientiousness", Group: "CN employee", n: 486, Mean: 3.68, SD: 0.57, Alpha: 0.86, "Test-Retest": 0.73 },
    { Domain: "Conscientiousness", Group: "CN substance use", n: 765, Mean: 3.73, SD: 0.61, Alpha: 0.80, "Test-Retest": 0.73 },
    { Domain: "Conscientiousness", Group: "CN adolescent T1", n: 315, Mean: 3.17, SD: 0.63, Alpha: 0.81, "Test-Retest": 0.73 },
    { Domain: "Conscientiousness", Group: "CN adolescent T2", n: 315, Mean: 3.17, SD: 0.58, Alpha: 0.81, "Test-Retest": 0.73 },
    { Domain: "Organization", Group: "U.S. internet", n: 1000, Mean: 3.42, SD: 1.01, Alpha: 0.84, "Test-Retest": 0.68 },
    { Domain: "Organization", Group: "U.S. college", n: 470, Mean: 3.60, SD: 0.88, Alpha: 0.82, "Test-Retest": 0.68 },
    { Domain: "Organization", Group: "CN college", n: 1194, Mean: 3.26, SD: 0.77, Alpha: 0.76, "Test-Retest": 0.68 },
    { Domain: "Organization", Group: "CN employee", n: 486, Mean: 3.65, SD: 0.73, Alpha: 0.77, "Test-Retest": 0.68 },
    { Domain: "Organization", Group: "CN substance use", n: 765, Mean: 3.79, SD: 0.72, Alpha: 0.60, "Test-Retest": 0.68 },
    { Domain: "Organization", Group: "CN adolescent T1", n: 315, Mean: 3.27, SD: 0.85, Alpha: 0.73, "Test-Retest": 0.68 },
    { Domain: "Organization", Group: "CN adolescent T2", n: 315, Mean: 3.29, SD: 0.80, Alpha: 0.73, "Test-Retest": 0.68 },
    { Domain: "Productiveness", Group: "U.S. internet", n: 1000, Mean: 3.37, SD: 0.90, Alpha: 0.77, "Test-Retest": 0.58 },
    { Domain: "Productiveness", Group: "U.S. college", n: 470, Mean: 3.34, SD: 0.78, Alpha: 0.70, "Test-Retest": 0.58 },
    { Domain: "Productiveness", Group: "CN college", n: 1194, Mean: 3.02, SD: 0.73, Alpha: 0.75, "Test-Retest": 0.58 },
    { Domain: "Productiveness", Group: "CN employee", n: 486, Mean: 3.55, SD: 0.70, Alpha: 0.73, "Test-Retest": 0.58 },
    { Domain: "Productiveness", Group: "CN substance use", n: 765, Mean: 3.72, SD: 0.75, Alpha: 0.61, "Test-Retest": 0.58 },
    { Domain: "Productiveness", Group: "CN adolescent T1", n: 315, Mean: 2.83, SD: 0.73, Alpha: 0.60, "Test-Retest": 0.58 },
    { Domain: "Productiveness", Group: "CN adolescent T2", n: 315, Mean: 2.87, SD: 0.70, Alpha: 0.60, "Test-Retest": 0.58 },
    { Domain: "Responsibility", Group: "U.S. internet", n: 1000, Mean: 3.48, SD: 0.81, Alpha: 0.70, "Test-Retest": 0.66 },
    { Domain: "Responsibility", Group: "U.S. college", n: 470, Mean: 3.48, SD: 0.68, Alpha: 0.63, "Test-Retest": 0.66 },
    { Domain: "Responsibility", Group: "CN college", n: 1194, Mean: 3.59, SD: 0.66, Alpha: 0.74, "Test-Retest": 0.66 },
    { Domain: "Responsibility", Group: "CN employee", n: 486, Mean: 3.85, SD: 0.60, Alpha: 0.70, "Test-Retest": 0.66 },
    { Domain: "Responsibility", Group: "CN substance use", n: 765, Mean: 3.62, SD: 0.74, Alpha: 0.58, "Test-Retest": 0.66 },
    { Domain: "Responsibility", Group: "CN adolescent T1", n: 315, Mean: 3.41, SD: 0.74, Alpha: 0.65, "Test-Retest": 0.66 },
    { Domain: "Responsibility", Group: "CN adolescent T2", n: 315, Mean: 3.35, SD: 0.69, Alpha: 0.65, "Test-Retest": 0.66 },
    { Domain: "Neuroticism", Group: "U.S. internet", n: 1000, Mean: 3.07, SD: 0.87, Alpha: 0.90, "Test-Retest": 0.76 },
    { Domain: "Neuroticism", Group: "U.S. college", n: 470, Mean: 2.91, SD: 0.77, Alpha: 0.89, "Test-Retest": 0.76 },
    { Domain: "Neuroticism", Group: "CN college", n: 1194, Mean: 2.96, SD: 0.67, Alpha: 0.87, "Test-Retest": 0.76 },
    { Domain: "Neuroticism", Group: "CN employee", n: 486, Mean: 2.72, SD: 0.61, Alpha: 0.86, "Test-Retest": 0.76 },
    { Domain: "Neuroticism", Group: "CN substance use", n: 765, Mean: 2.54, SD: 0.64, Alpha: 0.80, "Test-Retest": 0.76 },
    { Domain: "Neuroticism", Group: "CN adolescent T1", n: 315, Mean: 3.15, SD: 0.72, Alpha: 0.82, "Test-Retest": 0.76 },
    { Domain: "Neuroticism", Group: "CN adolescent T2", n: 315, Mean: 3.10, SD: 0.67, Alpha: 0.82, "Test-Retest": 0.76 },
    { Domain: "Anxiety", Group: "U.S. internet", n: 1000, Mean: 3.43, SD: 0.93, Alpha: 0.76, "Test-Retest": 0.64 },
    { Domain: "Anxiety", Group: "U.S. college", n: 470, Mean: 3.43, SD: 0.84, Alpha: 0.77, "Test-Retest": 0.64 },
    { Domain: "Anxiety", Group: "CN college", n: 1194, Mean: 3.31, SD: 0.75, Alpha: 0.73, "Test-Retest": 0.64 },
    { Domain: "Anxiety", Group: "CN employee", n: 486, Mean: 3.01, SD: 0.70, Alpha: 0.68, "Test-Retest": 0.64 },
    { Domain: "Anxiety", Group: "CN substance use", n: 765, Mean: 2.88, SD: 0.75, Alpha: 0.51, "Test-Retest": 0.64 },
    { Domain: "Anxiety", Group: "CN adolescent T1", n: 315, Mean: 3.42, SD: 0.79, Alpha: 0.59, "Test-Retest": 0.64 },
    { Domain: "Anxiety", Group: "CN adolescent T2", n: 315, Mean: 3.29, SD: 0.71, Alpha: 0.59, "Test-Retest": 0.64 },
    { Domain: "Depression", Group: "U.S. internet", n: 1000, Mean: 2.85, SD: 1.02, Alpha: 0.82, "Test-Retest": 0.64 },
    { Domain: "Depression", Group: "U.S. college", n: 470, Mean: 2.57, SD: 0.92, Alpha: 0.81, "Test-Retest": 0.64 },
    { Domain: "Depression", Group: "CN college", n: 1194, Mean: 2.86, SD: 0.77, Alpha: 0.74, "Test-Retest": 0.64 },
    { Domain: "Depression", Group: "CN employee", n: 486, Mean: 2.63, SD: 0.66, Alpha: 0.67, "Test-Retest": 0.64 },
    { Domain: "Depression", Group: "CN substance use", n: 765, Mean: 2.40, SD: 0.75, Alpha: 0.59, "Test-Retest": 0.64 },
    { Domain: "Depression", Group: "CN adolescent T1", n: 315, Mean: 3.03, SD: 0.85, Alpha: 0.63, "Test-Retest": 0.64 },
    { Domain: "Depression", Group: "CN adolescent T2", n: 315, Mean: 2.98, SD: 0.76, Alpha: 0.63, "Test-Retest": 0.64 },
    { Domain: "Emotional volatility", Group: "U.S. internet", n: 1000, Mean: 2.93, SD: 1.05, Alpha: 0.83, "Test-Retest": 0.73 },
    { Domain: "Emotional volatility", Group: "U.S. college", n: 470, Mean: 2.74, SD: 0.95, Alpha: 0.83, "Test-Retest": 0.73 },
    { Domain: "Emotional volatility", Group: "CN college", n: 1194, Mean: 2.70, SD: 0.87, Alpha: 0.85, "Test-Retest": 0.73 },
    { Domain: "Emotional volatility", Group: "CN employee", n: 486, Mean: 2.52, SD: 0.81, Alpha: 0.83, "Test-Retest": 0.73 },
    { Domain: "Emotional volatility", Group: "CN substance use", n: 765, Mean: 2.35, SD: 0.82, Alpha: 0.80, "Test-Retest": 0.73 },
    { Domain: "Emotional volatility", Group: "CN adolescent T1", n: 315, Mean: 3.01, SD: 1.02, Alpha: 0.80, "Test-Retest": 0.73 },
    { Domain: "Emotional volatility", Group: "CN adolescent T2", n: 315, Mean: 3.04, SD: 0.98, Alpha: 0.80, "Test-Retest": 0.73 },
    { Domain: "Openness", Group: "U.S. internet", n: 1000, Mean: 3.92, SD: 0.65, Alpha: 0.83, "Test-Retest": 0.74 },
    { Domain: "Openness", Group: "U.S. college", n: 470, Mean: 3.64, SD: 0.64, Alpha: 0.85, "Test-Retest": 0.74 },
    { Domain: "Openness", Group: "CN college", n: 1194, Mean: 3.57, SD: 0.59, Alpha: 0.84, "Test-Retest": 0.74 },
    { Domain: "Openness", Group: "CN employee", n: 486, Mean: 3.52, SD: 0.57, Alpha: 0.83, "Test-Retest": 0.74 },
    { Domain: "Openness", Group: "CN substance use", n: 765, Mean: 3.31, SD: 0.59, Alpha: 0.75, "Test-Retest": 0.74 },
    { Domain: "Openness", Group: "CN adolescent T1", n: 315, Mean: 3.28, SD: 0.62, Alpha: 0.75, "Test-Retest": 0.74 },
    { Domain: "Openness", Group: "CN adolescent T2", n: 315, Mean: 3.30, SD: 0.65, Alpha: 0.75, "Test-Retest": 0.74 },
    { Domain: "Intellectual curiosity", Group: "U.S. internet", n: 1000, Mean: 4.10, SD: 0.70, Alpha: 0.66, "Test-Retest": 0.51 },
    { Domain: "Intellectual curiosity", Group: "U.S. college", n: 470, Mean: 3.82, SD: 0.72, Alpha: 0.72, "Test-Retest": 0.51 },
    { Domain: "Intellectual curiosity", Group: "CN college", n: 1194, Mean: 3.53, SD: 0.68, Alpha: 0.65, "Test-Retest": 0.51 },
    { Domain: "Intellectual curiosity", Group: "CN employee", n: 486, Mean: 3.51, SD: 0.64, Alpha: 0.60, "Test-Retest": 0.51 },
    { Domain: "Intellectual curiosity", Group: "CN substance use", n: 765, Mean: 3.27, SD: 0.63, Alpha: 0.28, "Test-Retest": 0.51 },
    { Domain: "Intellectual curiosity", Group: "CN adolescent T1", n: 315, Mean: 3.37, SD: 0.71, Alpha: 0.39, "Test-Retest": 0.51 },
    { Domain: "Intellectual curiosity", Group: "CN adolescent T2", n: 315, Mean: 3.35, SD: 0.65, Alpha: 0.39, "Test-Retest": 0.51 },
    { Domain: "Aesthetic sensitivity", Group: "U.S. internet", n: 1000, Mean: 3.80, SD: 0.92, Alpha: 0.75, "Test-Retest": 0.72 },
    { Domain: "Aesthetic sensitivity", Group: "U.S. college", n: 470, Mean: 3.57, SD: 0.90, Alpha: 0.82, "Test-Retest": 0.72 },
    { Domain: "Aesthetic sensitivity", Group: "CN college", n: 1194, Mean: 3.67, SD: 0.85, Alpha: 0.82, "Test-Retest": 0.72 },
    { Domain: "Aesthetic sensitivity", Group: "CN employee", n: 486, Mean: 3.42, SD: 0.86, Alpha: 0.80, "Test-Retest": 0.72 },
    { Domain: "Aesthetic sensitivity", Group: "CN substance use", n: 765, Mean: 3.13, SD: 0.84, Alpha: 0.63, "Test-Retest": 0.72 },
    { Domain: "Aesthetic sensitivity", Group: "CN adolescent T1", n: 315, Mean: 3.13, SD: 1.00, Alpha: 0.73, "Test-Retest": 0.72 },
    { Domain: "Aesthetic sensitivity", Group: "CN adolescent T2", n: 315, Mean: 3.15, SD: 1.03, Alpha: 0.73, "Test-Retest": 0.72 },
    { Domain: "Creative imagination", Group: "U.S. internet", n: 1000, Mean: 3.85, SD: 0.81, Alpha: 0.74, "Test-Retest": 0.67 },
    { Domain: "Creative imagination", Group: "U.S. college", n: 470, Mean: 3.52, SD: 0.77, Alpha: 0.76, "Test-Retest": 0.67 },
    { Domain: "Creative imagination", Group: "CN college", n: 1194, Mean: 3.50, SD: 0.73, Alpha: 0.82, "Test-Retest": 0.67 },
    { Domain: "Creative imagination", Group: "CN employee", n: 486, Mean: 3.62, SD: 0.68, Alpha: 0.80, "Test-Retest": 0.67 },
    { Domain: "Creative imagination", Group: "CN substance use", n: 765, Mean: 3.53, SD: 0.75, Alpha: 0.69, "Test-Retest": 0.67 },
    { Domain: "Creative imagination", Group: "CN adolescent T1", n: 315, Mean: 3.34, SD: 0.80, Alpha: 0.73, "Test-Retest": 0.67 },
    { Domain: "Creative imagination", Group: "CN adolescent T2", n: 315, Mean: 3.41, SD: 0.78, Alpha: 0.73, "Test-Retest": 0.67 }
];

let questions = [];
let currentQuestion = 0;
let answers = {};
let lastResults = null;
let selectedGroup = "";

// 修改加载题目的函数
function loadQuestions() {
    // 解析题目数据
    const lines = questionsData.split('\n');
    questions = lines
        .filter(line => line.match(/^\d+\./)) // 只获取题目行
        .map(line => {
            const [num, content] = line.split('. ');
            return {
                id: parseInt(num),
                content: content.trim(),
                reversed: content.includes('*'), // 带星号的题目是反向计分
                displayOrder: 0 // 添加显示顺序属性
            };
        });
    
    // 生成随机显示顺序
    const totalQuestions = questions.length;
    const displayOrder = Array.from({length: totalQuestions}, (_, i) => i);
    
    // 使用Fisher-Yates算法随机打乱显示顺序
    for (let i = displayOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [displayOrder[i], displayOrder[j]] = [displayOrder[j], displayOrder[i]];
    }
    
    // 为每个题目分配显示顺序
    questions.forEach((q, index) => {
        q.displayOrder = displayOrder[index];
    });
    
    // 根据显示顺序排序题目
    questions.sort((a, b) => a.displayOrder - b.displayOrder);
    
    displayQuestion();
}

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <div class="question">
            <h3>第 ${currentQuestion + 1} 题，共 ${questions.length} 题</h3>
            <p>${question.content.replace('*', '')}</p>
            <div class="options">
                ${generateOptions(question.id)}
            </div>
        </div>
    `;
    
    updateProgress();
    updateNavigationButtons();
}

function generateOptions(questionId) {
    const options = [
        {value: 1, label: "完全不同意"},
        {value: 2, label: "比较不同意"},
        {value: 3, label: "不确定"},
        {value: 4, label: "比较同意"},
        {value: 5, label: "完全同意"}
    ];
    
    return options.map(option => `
        <div class="option">
            <input type="radio" name="q${questionId}" value="${option.value}" 
                ${answers[questionId] === option.value ? 'checked' : ''}>
            <div class="option-label">${option.label}</div>
        </div>
    `).join('');
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function updateNavigationButtons() {
    document.getElementById('prev-btn').style.display = currentQuestion > 0 ? 'block' : 'none';
    document.getElementById('next-btn').textContent = 
        currentQuestion === questions.length - 1 ? '完成测试' : '下一题';
}

// 计算正态分布的百分位数
function calculatePercentile(score, mean, sd) {
    // 计算z分数
    const z = (score - mean) / sd;
    
    // 使用正态分布累积分布函数计算百分位数
    // 这里使用近似计算方法
    const p = normalCDF(z);
    
    // 将概率转为百分比
    return Math.round(p * 100);
}

// 正态分布累积分布函数的近似计算
function normalCDF(z) {
    // 使用误差函数的近似计算
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp(-z * z / 2);
    let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    
    if (z > 0) {
        p = 1 - p;
    }
    
    return p;
}

// 获取指定域和组的分布数据
function getDistributionData(domain, group) {
    return distributionData.find(item => 
        item.Domain.toLowerCase() === domain.toLowerCase() && 
        item.Group === group
    );
}

// 存储测试结果
function saveTestResults(results, group, percentiles) {
    // 创建结果对象
    const savedResult = {
        timestamp: new Date().toISOString(),
        group: group,
        dimensions: results.dimensions,
        facets: results.facets,
        percentiles: percentiles
    };
    
    // 从localStorage获取现有结果
    let savedResults = JSON.parse(localStorage.getItem('testResults')) || [];
    
    // 添加新结果
    savedResults.push(savedResult);
    
    // 保存到localStorage
    localStorage.setItem('testResults', JSON.stringify(savedResults));
    
    return savedResults;
}

// 加载历史测试结果
function loadTestResults() {
    return JSON.parse(localStorage.getItem('testResults')) || [];
}

// 修改计算结果函数, 添加字段映射
function calculateResults() {
    // 大五人格维度的题目映射
    const dimensions = {
        extraversion: [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56], // 外向性
        agreeableness: [2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57], // 宜人性
        conscientiousness: [3, 8, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58], // 尽责性
        neuroticism: [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59], // 神经质
        openness: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60] // 开放性
    };

    // 修改人格侧面定义，根据text.md
    const facets = {
        // 外向性的侧面
        sociability: [1, 16, 31, 46],      // 社交
        assertiveness: [6, 21, 36, 51],    // 果断
        energy: [11, 26, 41, 56],          // 活力

        // 宜人性的侧面
        compassion: [2, 17, 32, 47],       // 同情
        respectfulness: [7, 22, 37, 52],   // 谦恭
        trust: [12, 27, 42, 57],           // 信任

        // 尽责性的侧面
        organization: [3, 18, 33, 48],     // 条理
        productiveness: [8, 23, 38, 53],   // 效率
        responsibility: [13, 28, 43, 58],  // 负责

        // 神经质的侧面
        anxiety: [4, 19, 34, 49],          // 焦虑
        depression: [9, 24, 39, 54],       // 抑郁
        emotional_volatility: [14, 29, 44, 59], // 易变

        // 开放性的侧面
        intellectual_curiosity: [10, 25, 40, 55],    // 好奇
        aesthetic_sensitivity: [5, 20, 35, 50],      // 审美
        creative_imagination: [15, 30, 45, 60]       // 想象
    };

    const results = {
        dimensions: {},
        facets: {},
        rawScores: {}
    };

    // 计算每个维度的得分
    for (const [dimension, questionIds] of Object.entries(dimensions)) {
        let sum = 0;
        questionIds.forEach(id => {
            const question = questions.find(q => q.id === id);
            let score = answers[id] || 3;
            let finalScore = score;
            
            // 反向计分处理
            if (question.reversed) {
                finalScore = 6 - score;
            }
            
            // 存储原始答案和计分后的分数
            results.rawScores[id] = {
                questionContent: question.content,
                originalAnswer: score,
                finalScore: finalScore,
                isReversed: question.reversed
            };
            
            sum += finalScore;
        });
        results.dimensions[dimension] = sum / questionIds.length; // 计算平均分
    }

    // 修改侧面得分计算，考虑特定的反向计分题目
    const reversedQuestions = {
        sociability: [16, 31],        // 社交的反向题
        assertiveness: [36, 51],      // 果断的反向题
        energy: [11, 26],             // 活力的反向题
        compassion: [17, 47],         // 同情的反向题
        respectfulness: [22, 37],     // 谦恭的反向题
        trust: [12, 42],              // 信任的反向题
        organization: [3, 48],        // 条理的反向题
        productiveness: [8, 23],      // 效率的反向题
        responsibility: [28, 58],     // 负责的反向题
        anxiety: [4, 49],             // 焦虑的反向题
        depression: [9, 24],          // 抑郁的反向题
        emotional_volatility: [29, 44], // 易变的反向题
        intellectual_curiosity: [25, 55], // 好奇的反向题
        aesthetic_sensitivity: [5, 50],   // 审美的反向题
        creative_imagination: [30, 45]    // 想象的反向题
    };

    // 计算侧面得分
    for (const [facet, questionIds] of Object.entries(facets)) {
        let sum = 0;
        questionIds.forEach(id => {
            let score = answers[id] || 3;
            // 检查是否是反向计分题目
            if (reversedQuestions[facet].includes(id)) {
                score = 6 - score;
            }
            sum += score;
        });
        results.facets[facet] = sum / questionIds.length;
    }

    // 添加中英文名称映射
    results.dimensionNames = {
        extraversion: '外向性',
        agreeableness: '宜人性',
        conscientiousness: '尽责性',
        neuroticism: '神经质',
        openness: '开放性'
    };

    results.facetNames = {
        sociability: '社交',
        assertiveness: '果断',
        energy: '活力',
        compassion: '同情',
        respectfulness: '谦恭',
        trust: '信任',
        organization: '条理',
        productiveness: '效率',
        responsibility: '负责',
        anxiety: '焦虑',
        depression: '抑郁',
        emotional_volatility: '易变',
        intellectual_curiosity: '好奇',
        aesthetic_sensitivity: '审美',
        creative_imagination: '想象'
    };

    // 添加维度与侧面关系映射
    results.dimensionFacets = {
        extraversion: ['sociability', 'assertiveness', 'energy'],
        agreeableness: ['compassion', 'respectfulness', 'trust'],
        conscientiousness: ['organization', 'productiveness', 'responsibility'],
        neuroticism: ['anxiety', 'depression', 'emotional_volatility'],
        openness: ['intellectual_curiosity', 'aesthetic_sensitivity', 'creative_imagination']
    };

    return results;
}

// 计算结果的百分位
function calculatePercentiles(results, group) {
    if (!group) return null;
    
    const percentiles = {
        dimensions: {},
        facets: {}
    };
    
    // 计算维度百分位
    for (const dimension in results.dimensions) {
        const score = results.dimensions[dimension];
        const data = getDistributionData(dimension, group);
        
        if (data) {
            percentiles.dimensions[dimension] = calculatePercentile(score, data.Mean, data.SD);
        }
    }
    
    // 计算侧面百分位
    for (const facet in results.facets) {
        const score = results.facets[facet];
        const data = getDistributionData(facet, group);
        
        if (data) {
            percentiles.facets[facet] = calculatePercentile(score, data.Mean, data.SD);
        }
    }
    
    return percentiles;
}

function displayResults(results) {
    lastResults = results;
    
    // 1. 显示雷达图
    const ctx = document.getElementById('radar-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['外向性', '宜人性', '尽责性', '神经质', '开放性'],
            datasets: [{
                label: '人格特征得分',
                data: [
                    results.dimensions.extraversion,
                    results.dimensions.agreeableness,
                    results.dimensions.conscientiousness,
                    results.dimensions.neuroticism,
                    results.dimensions.openness
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        },
        options: {
            scales: {
                r: {
                    min: 1,
                    max: 5
                }
            }
        }
    });

    // 2. 显示维度得分详情
    const scoresContainer = document.getElementById('scores-container');
    scoresContainer.innerHTML = `
        <h3>人格维度得分</h3>
        <ul>
            <li>外向性: ${results.dimensions.extraversion.toFixed(2)}
                <ul>
                    <li>社交: ${results.facets.sociability.toFixed(2)}</li>
                    <li>果断: ${results.facets.assertiveness.toFixed(2)}</li>
                    <li>活力: ${results.facets.energy.toFixed(2)}</li>
                </ul>
            </li>
            <li>宜人性: ${results.dimensions.agreeableness.toFixed(2)}
                <ul>
                    <li>同情: ${results.facets.compassion.toFixed(2)}</li>
                    <li>谦恭: ${results.facets.respectfulness.toFixed(2)}</li>
                    <li>信任: ${results.facets.trust.toFixed(2)}</li>
                </ul>
            </li>
            <li>尽责性: ${results.dimensions.conscientiousness.toFixed(2)}
                <ul>
                    <li>条理: ${results.facets.organization.toFixed(2)}</li>
                    <li>效率: ${results.facets.productiveness.toFixed(2)}</li>
                    <li>负责: ${results.facets.responsibility.toFixed(2)}</li>
                </ul>
            </li>
            <li>神经质: ${results.dimensions.neuroticism.toFixed(2)}
                <ul>
                    <li>焦虑: ${results.facets.anxiety.toFixed(2)}</li>
                    <li>抑郁: ${results.facets.depression.toFixed(2)}</li>
                    <li>易变: ${results.facets.emotional_volatility.toFixed(2)}</li>
                </ul>
            </li>
            <li>开放性: ${results.dimensions.openness.toFixed(2)}
                <ul>
                    <li>好奇: ${results.facets.intellectual_curiosity.toFixed(2)}</li>
                    <li>审美: ${results.facets.aesthetic_sensitivity.toFixed(2)}</li>
                    <li>想象: ${results.facets.creative_imagination.toFixed(2)}</li>
                </ul>
            </li>
        </ul>
    `;
}

// 显示百分位结果
function displayPercentiles(percentiles, results) {
    if (!percentiles) return;
    
    const container = document.getElementById('percentile-container');
    container.innerHTML = '';
    
    // 添加维度百分位
    const dimensionsSection = document.createElement('div');
    dimensionsSection.innerHTML = '<h4>人格维度百分位</h4>';
    
    for (const dimension in percentiles.dimensions) {
        const percentile = percentiles.dimensions[dimension];
        const dimensionName = results.dimensionNames[dimension];
        const score = results.dimensions[dimension].toFixed(2);
        
        const item = document.createElement('div');
        item.className = 'percentile-item';
        item.innerHTML = `
            <span class="percentile-label">${dimensionName}:</span>
            <span>得分 ${score}，位于第 ${percentile} 百分位</span>
        `;
        dimensionsSection.appendChild(item);
    }
    container.appendChild(dimensionsSection);
    
    // 添加侧面百分位
    const facetsSection = document.createElement('div');
    facetsSection.innerHTML = '<h4>人格侧面百分位</h4>';
    
    // 按维度分组显示侧面
    for (const dimension in results.dimensionFacets) {
        const dimensionName = results.dimensionNames[dimension];
        const facetGroup = document.createElement('div');
        facetGroup.className = 'facet-group';
        facetGroup.innerHTML = `<h5>${dimensionName}:</h5>`;
        
        results.dimensionFacets[dimension].forEach(facet => {
            if (percentiles.facets[facet]) {
                const percentile = percentiles.facets[facet];
                const facetName = results.facetNames[facet];
                const score = results.facets[facet].toFixed(2);
                
                const item = document.createElement('div');
                item.className = 'percentile-item';
                item.innerHTML = `
                    <span class="percentile-label">${facetName}:</span>
                    <span>得分 ${score}，位于第 ${percentile} 百分位</span>
                `;
                facetGroup.appendChild(item);
            }
        });
        
        facetsSection.appendChild(facetGroup);
    }
    container.appendChild(facetsSection);
    
    // 显示百分位结果区域
    document.getElementById('percentile-results').style.display = 'block';
}

// 显示历史记录
function displayHistory(savedResults) {
    const container = document.getElementById('history-container');
    container.innerHTML = '';
    
    if (savedResults.length === 0) {
        container.innerHTML = '<p>暂无历史测试记录</p>';
        return;
    }
    
    // 按时间逆序排列
    savedResults.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    savedResults.forEach((result, index) => {
        const date = new Date(result.timestamp);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.dataset.index = index;
        
        // 简要信息
        historyItem.innerHTML = `
            <div class="history-header">
                <span class="history-date">${formattedDate}</span>
                <span class="history-group">群体: ${getGroupDisplayName(result.group)}</span>
            </div>
            <div class="history-summary">
                <span>外向性: ${result.dimensions.extraversion.toFixed(2)}</span>
                <span>宜人性: ${result.dimensions.agreeableness.toFixed(2)}</span>
                <span>尽责性: ${result.dimensions.conscientiousness.toFixed(2)}</span>
                <span>神经质: ${result.dimensions.neuroticism.toFixed(2)}</span>
                <span>开放性: ${result.dimensions.openness.toFixed(2)}</span>
            </div>
        `;
        
        // 点击查看详情
        historyItem.addEventListener('click', () => {
            loadHistoryResult(savedResults[index]);
        });
        
        container.appendChild(historyItem);
    });
}

// 获取群体的显示名称
function getGroupDisplayName(group) {
    const groupDisplayNames = {
        "U.S. internet": "美国互联网用户",
        "U.S. college": "美国大学生",
        "CN college": "中国大学生",
        "CN employee": "中国职场人士",
        "CN substance use": "中国物质使用群体",
        "CN adolescent T1": "中国青少年T1",
        "CN adolescent T2": "中国青少年T2"
    };
    
    return groupDisplayNames[group] || group;
}

// 加载历史结果
function loadHistoryResult(result) {
    // 关闭历史记录对话框
    document.getElementById('history-modal').style.display = 'none';
    
    // 设置选中的群体
    document.getElementById('sample-group-select').value = result.group;
    selectedGroup = result.group;
    
    // 显示结果
    lastResults = {
        dimensions: result.dimensions,
        facets: result.facets,
        dimensionNames: {
            extraversion: '外向性',
            agreeableness: '宜人性',
            conscientiousness: '尽责性',
            neuroticism: '神经质',
            openness: '开放性'
        },
        facetNames: {
            sociability: '社交',
            assertiveness: '果断',
            energy: '活力',
            compassion: '同情',
            respectfulness: '谦恭',
            trust: '信任',
            organization: '条理',
            productiveness: '效率',
            responsibility: '负责',
            anxiety: '焦虑',
            depression: '抑郁',
            emotional_volatility: '易变',
            intellectual_curiosity: '好奇',
            aesthetic_sensitivity: '审美',
            creative_imagination: '想象'
        },
        dimensionFacets: {
            extraversion: ['sociability', 'assertiveness', 'energy'],
            agreeableness: ['compassion', 'respectfulness', 'trust'],
            conscientiousness: ['organization', 'productiveness', 'responsibility'],
            neuroticism: ['anxiety', 'depression', 'emotional_volatility'],
            openness: ['intellectual_curiosity', 'aesthetic_sensitivity', 'creative_imagination']
        }
    };
    
    displayResults(lastResults);
    
    // 显示百分位
    if (result.percentiles) {
        displayPercentiles(result.percentiles, lastResults);
    }
}

function exportResults(results) {
    let csv = '问题编号,问题内容,原始答案,计分后得分,是否反向计分\n';
    
    // 添加每个问题的详细信息
    Object.entries(results.rawScores).forEach(([id, data]) => {
        csv += `${id},${data.questionContent.replace('*', '')},${data.originalAnswer},${data.finalScore},${data.isReversed ? '是' : '否'}\n`;
    });
    
    // 添加维度得分
    csv += '\n维度,得分\n';
    Object.entries(results.dimensions).forEach(([dimension, score]) => {
        const dimensionNames = {
            extraversion: '外向性',
            agreeableness: '宜人性',
            conscientiousness: '尽责性',
            neuroticism: '神经质',
            openness: '开放性'
        };
        csv += `${dimensionNames[dimension]},${score.toFixed(2)}\n`;
    });

    // 更新侧面名称映射
    const facetNames = {
        sociability: '社交',
        assertiveness: '果断',
        energy: '活力',
        compassion: '同情',
        respectfulness: '谦恭',
        trust: '信任',
        organization: '条理',
        productiveness: '效率',
        responsibility: '负责',
        anxiety: '焦虑',
        depression: '抑郁',
        emotional_volatility: '易变',
        intellectual_curiosity: '好奇',
        aesthetic_sensitivity: '审美',
        creative_imagination: '想象'
    };

    // 添加侧面得分
    csv += '\n人格侧面,得分\n';
    Object.entries(results.facets).forEach(([facet, score]) => {
        csv += `${facetNames[facet]},${score.toFixed(2)}\n`;
    });
    
    // 如果有百分位数据，添加百分位信息
    if (selectedGroup) {
        const percentiles = calculatePercentiles(results, selectedGroup);
        if (percentiles) {
            csv += '\n百分位分析 (基于群体: ' + getGroupDisplayName(selectedGroup) + ')\n';
            csv += '\n维度,得分,百分位\n';
            Object.entries(percentiles.dimensions).forEach(([dimension, percentile]) => {
                csv += `${results.dimensionNames[dimension]},${results.dimensions[dimension].toFixed(2)},${percentile}\n`;
            });
            
            csv += '\n人格侧面,得分,百分位\n';
            Object.entries(percentiles.facets).forEach(([facet, percentile]) => {
                csv += `${results.facetNames[facet]},${results.facets[facet].toFixed(2)},${percentile}\n`;
            });
        }
    }
    
    // 创建并下载CSV文件
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = '人格测试结果.csv';
    link.click();
}

// 事件监听器
document.getElementById('next-btn').addEventListener('click', () => {
    const currentQuestionId = questions[currentQuestion].id;
    const selectedOption = document.querySelector(`input[name="q${currentQuestionId}"]:checked`);
    
    if (!selectedOption && currentQuestion < questions.length - 1) {
        alert('请选择一个选项');
        return;
    }
    
    if (selectedOption) {
        answers[currentQuestionId] = parseInt(selectedOption.value);
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        const results = calculateResults();
        lastResults = results;
        document.getElementById('test-container').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        displayResults(results);
        
        // 添加事件监听
        setupEventListeners();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
});

function setupEventListeners() {
    // 导出结果按钮
    document.getElementById('export-btn').addEventListener('click', () => {
        exportResults(lastResults);
    });
    
    // 计算百分位按钮
    document.getElementById('calculate-percentile-btn').addEventListener('click', () => {
        const groupSelect = document.getElementById('sample-group-select');
        selectedGroup = groupSelect.value;
        
        if (!selectedGroup) {
            alert('请选择一个样本群体');
            return;
        }
        
        const percentiles = calculatePercentiles(lastResults, selectedGroup);
        displayPercentiles(percentiles, lastResults);
    });
    
    // 保存结果按钮
    document.getElementById('save-btn').addEventListener('click', () => {
        const groupSelect = document.getElementById('sample-group-select');
        selectedGroup = groupSelect.value;
        
        if (!selectedGroup) {
            alert('请选择一个样本群体再保存结果');
            return;
        }
        
        // 计算百分位
        const percentiles = calculatePercentiles(lastResults, selectedGroup);
        
        // 保存结果
        saveTestResults(lastResults, selectedGroup, percentiles);
        
        alert('测试结果已保存');
    });
    
    // 查看历史按钮
    document.getElementById('view-history-btn').addEventListener('click', () => {
        const savedResults = loadTestResults();
        displayHistory(savedResults);
        document.getElementById('history-modal').style.display = 'block';
    });
    
    // 关闭弹窗按钮
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('history-modal').style.display = 'none';
    });
    
    // 点击弹窗外部时关闭
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('history-modal')) {
            document.getElementById('history-modal').style.display = 'none';
        }
    });
}

// 修改初始化调用
window.onload = function() {
    loadQuestions();
}; 