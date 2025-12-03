const questionBank = [
    {
        question: "What is procrastination?",
        options: [
            "Simply being lazy",
            "The act of unnecessarily delaying actions despite knowing there will be negative consequences",
            "A physical illness",
            "Normal rest behavior"
        ],
        correct: 1,
        explanation: "Procrastination is not just laziness - it's a complex psychological behavior involving voluntary delay despite negative consequences."
    },
    {
        question: "Which of the following is NOT a common cause of procrastination?",
        options: [
            "Task feels too difficult or overwhelming",
            "Fear of failure or not doing well enough",
            "Having plenty of time to prepare",
            "Perfectionism mindset"
        ],
        correct: 2,
        explanation: "Having plenty of time is not a cause of procrastination. In fact, people often procrastinate more when they feel they have limited time."
    },
    {
        question: "What is the 'Two-Minute Rule'?",
        options: [
            "You only need to work for two minutes each day",
            "If a task takes less than 2 minutes to complete, do it immediately",
            "Take a break every two minutes",
            "All tasks must be completed within two minutes"
        ],
        correct: 1,
        explanation: "The Two-Minute Rule helps prevent small tasks from piling up and becoming overwhelming."
    },
    {
        question: "In the Eisenhower Matrix, which type of task should you do FIRST?",
        options: [
            "Important but not urgent",
            "Urgent but not important",
            "Urgent and important",
            "Neither urgent nor important"
        ],
        correct: 2,
        explanation: "Urgent and important tasks (Quadrant 1) should be done first as they are both time-sensitive and critical."
    },
    {
        question: "How long is one Pomodoro in the Pomodoro Technique?",
        options: [
            "15 minutes",
            "20 minutes",
            "25 minutes",
            "30 minutes"
        ],
        correct: 2,
        explanation: "One Pomodoro is traditionally 25 minutes of focused work followed by a 5-minute break."
    },
    {
        question: "In the Pomodoro Technique, how long should you rest after completing one pomodoro?",
        options: [
            "1 minute",
            "5 minutes",
            "10 minutes",
            "15 minutes"
        ],
        correct: 1,
        explanation: "After each 25-minute Pomodoro, take a 5-minute break to rest and recharge."
    },
    {
        question: "Which method helps reduce procrastination?",
        options: [
            "Wait until you feel inspired to start",
            "Try to complete all tasks at once",
            "Break large tasks into smaller steps",
            "Work randomly without a plan"
        ],
        correct: 2,
        explanation: "Breaking large tasks into smaller, manageable steps makes them feel less overwhelming and reduces procrastination."
    },
    {
        question: "What is 'time blocking'?",
        options: [
            "Wasting time on purpose",
            "Dividing your day into blocks of time, each dedicated to specific tasks",
            "Doing all tasks at the same time",
            "Not managing time at all"
        ],
        correct: 1,
        explanation: "Time blocking involves scheduling specific time periods for different tasks or types of work."
    },
    {
        question: "Why is the Pomodoro Technique effective?",
        options: [
            "Because tomatoes taste good",
            "Because 25 minutes feels manageable and includes regular breaks",
            "Because you can work without breaks",
            "Because you can interrupt anytime"
        ],
        correct: 1,
        explanation: "The 25-minute timeframe feels manageable, and regular breaks prevent mental fatigue."
    },
    {
        question: "When should you do your most important tasks to reduce procrastination?",
        options: [
            "Late at night before bed",
            "During lunch break",
            "In the morning when energy is highest",
            "Whenever you feel like it"
        ],
        correct: 2,
        explanation: "Doing important tasks in the morning (the 'Eat the Frog' method) ensures they get done when willpower is highest."
    },
    {
        question: "What is 'implementation intention'?",
        options: [
            "Making vague plans about the future",
            "Creating specific 'if-then' plans like 'If it's 9 AM, then I will work on my project'",
            "Never planning anything",
            "Randomly deciding what to do"
        ],
        correct: 1,
        explanation: "Implementation intentions create automatic triggers for specific behaviors, making them more likely to happen."
    },
    {
        question: "According to the Eisenhower Matrix, what should you do with tasks that are important but not urgent?",
        options: [
            "Do them immediately",
            "Delegate them to others",
            "Schedule them for later",
            "Eliminate them completely"
        ],
        correct: 2,
        explanation: "Important but not urgent tasks (Quadrant 2) should be scheduled for dedicated time slots."
    },
    {
        question: "What is the '5-Minute Start' technique?",
        options: [
            "Only work for 5 minutes total each day",
            "Commit to working on a task for just 5 minutes to overcome the initial resistance",
            "Take a 5-minute break before starting anything",
            "Finish all tasks within 5 minutes"
        ],
        correct: 1,
        explanation: "The 5-Minute Start helps overcome the psychological barrier of starting by making the commitment feel small and manageable."
    },
    {
        question: "After completing 4 pomodoros, how long should your break be?",
        options: [
            "5 minutes",
            "10 minutes",
            "15-30 minutes",
            "1 hour"
        ],
        correct: 2,
        explanation: "After 4 Pomodoros (about 2 hours of work), take a longer 15-30 minute break to fully recharge."
    },
    {
        question: "What does the 'Eat the Frog' method mean?",
        options: [
            "Literally eating a frog each morning",
            "Doing your most challenging task first thing in the morning",
            "Avoiding difficult tasks altogether",
            "Doing easy tasks first"
        ],
        correct: 1,
        explanation: "'Eat the Frog' means tackling your most difficult or important task first, when your energy and willpower are highest."
    },
    {
        question: "Which of these is a sign of procrastination?",
        options: [
            "Completing tasks ahead of schedule",
            "Waiting for the 'right mood' to start important tasks",
            "Working consistently throughout the day",
            "Taking regular breaks as planned"
        ],
        correct: 1,
        explanation: "Waiting for the 'right mood' or 'perfect conditions' is a common procrastination behavior."
    },
    {
        question: "What is task aversion?",
        options: [
            "Loving all your tasks equally",
            "When a task feels boring, difficult, or overwhelming",
            "Completing tasks quickly",
            "Enjoying challenging work"
        ],
        correct: 1,
        explanation: "Task aversion occurs when a task triggers negative emotions, making you want to avoid it."
    },
    {
        question: "How can perfectionism lead to procrastination?",
        options: [
            "It makes you work faster",
            "If you can't do it perfectly, you might not start at all",
            "It helps you prioritize better",
            "It reduces the quality of your work"
        ],
        correct: 1,
        explanation: "Perfectionism can create such high standards that starting feels intimidating, leading to procrastination."
    },
    {
        question: "What is the purpose of breaking tasks into smaller steps?",
        options: [
            "To make the task take longer",
            "To make large tasks feel less overwhelming",
            "To avoid doing the task completely",
            "To make simple tasks more complicated"
        ],
        correct: 1,
        explanation: "Smaller steps reduce the psychological barrier and make progress feel more achievable."
    },
    {
        question: "In the Eisenhower Matrix, what should you do with tasks that are urgent but not important?",
        options: [
            "Do them first",
            "Schedule them for later",
            "Delegate them if possible",
            "Ignore them completely"
        ],
        correct: 2,
        explanation: "Urgent but not important tasks (Quadrant 3) should be delegated to free up time for more important work."
    },
    {
        question: "What is temptation bundling?",
        options: [
            "Pairing tasks you need to do with things you enjoy",
            "Avoiding all temptations completely",
            "Only doing enjoyable tasks",
            "Working without any breaks"
        ],
        correct: 0,
        explanation: "Temptation bundling makes difficult tasks more appealing by pairing them with enjoyable activities."
    },
    {
        question: "Why are regular breaks important in the Pomodoro Technique?",
        options: [
            "They waste time",
            "They prevent mental fatigue and maintain focus",
            "They make the workday longer",
            "They are not actually important"
        ],
        correct: 1,
        explanation: "Regular breaks help maintain consistent focus and prevent burnout throughout the day."
    },
    {
        question: "What should you avoid during Pomodoro breaks?",
        options: [
            "Stretching and moving around",
            "Checking social media or emails",
            "Getting a drink of water",
            "Looking away from screens"
        ],
        correct: 1,
        explanation: "Avoid work-related activities during breaks to truly disengage and recharge."
    },
    {
        question: "What is the main benefit of the 5-Minute Start technique?",
        options: [
            "It reduces the total work time",
            "It helps overcome the psychological barrier to starting",
            "It makes tasks easier to complete",
            "It eliminates the need for planning"
        ],
        correct: 1,
        explanation: "The main benefit is overcoming the initial resistance that often prevents people from starting tasks."
    },
    {
        question: "According to research, what does implementation intention do?",
        options: [
            "Makes work more complicated",
            "Doubles your chances of success by making behavior automatic",
            "Has no effect on productivity",
            "Only works for simple tasks"
        ],
        correct: 1,
        explanation: "Research shows implementation intentions significantly increase the likelihood of following through on plans."
    },
    {
        question: "What is a common characteristic of procrastination?",
        options: [
            "Voluntary delay despite negative consequences",
            "Always being busy with important tasks",
            "Never having enough time",
            "Working efficiently under pressure"
        ],
        correct: 0,
        explanation: "The key characteristic is choosing to delay even when aware of negative consequences."
    },
    {
        question: "How does fear of failure contribute to procrastination?",
        options: [
            "It makes you work harder",
            "You might avoid starting to prevent potential failure",
            "It helps you set realistic goals",
            "It has no effect on procrastination"
        ],
        correct: 1,
        explanation: "Fear of failure can lead to avoidance behaviors, where not trying feels safer than potentially failing."
    },
    {
        question: "What is the 80/20 Rule (Pareto Principle)?",
        options: [
            "80% of results come from 20% of efforts",
            "You should work 80 hours and rest 20 hours",
            "80% of tasks are unimportant",
            "20% of people do 80% of the work"
        ],
        correct: 0,
        explanation: "The Pareto Principle suggests focusing on the 20% of activities that produce 80% of the results."
    },
    {
        question: "What should you do during a weekly review?",
        options: [
            "Only plan for the next day",
            "Review accomplishments, set priorities, and clear your mind",
            "Work on urgent tasks only",
            "Avoid planning altogether"
        ],
        correct: 1,
        explanation: "A weekly review helps reflect on progress, plan ahead, and maintain clarity."
    },
    {
        question: "What is the key insight about successful people and the Eisenhower Matrix?",
        options: [
            "They spend most time on urgent tasks",
            "They focus on important but not urgent tasks to prevent crises",
            "They ignore all non-urgent tasks",
            "They delegate everything"
        ],
        correct: 1,
        explanation: "Successful people prioritize Quadrant 2 activities to prevent problems before they become urgent."
    }
];