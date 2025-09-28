export const LEXORANK_CONTENT = {
  intro: {
    title: "Why Use LexoRank?",
    problemTitle: "Problems with Traditional Order Management",
    description: "Imagine building a todo list app where users can reorder items using drag and drop.",
    initialStateTitle: "Initial State (Index-based)",
    problemVisualizationTitle: "All Indexes Need Recalculation",
    problemDescription: "As data grows, all indexes within the movement range must be updated",
    solutionTitle: "LexoRank Solution",
    solutionDescription: "Instead of numbers, represent order using strings:",
    solutionVisualizationTitle: "Only 1 Item Changes",
    solutionBenefit: "Only 1 item needs database update"
  },

  structure: {
    title: "LexoRank Structure and Principles",
    bucketLabel: "Bucket(0-2) + Order Value(Base36) + Delimiter",
    example: "Example: \"0|100000:\", \"1|abc123:\", \"2|zzzzzz:\"",
    middleValueTitle: "Middle Value Generation Principle",
    middleValueDescription: "A middle value can be generated between any two strings"
  },

  operations: {
    title: "Core Operations",
    description: "LexoRank provides three core operations using lexicographical string sorting. These operations are designed to require updating only a single item in the database.",
    genPrev: {
      title: "1. genPrev() - Generate Previous Position",
      description: "Generates a rank that comes before an existing item. Used when adding a new item at the beginning.",
      explanation: "\"100000\" is generated, which comes lexicographically before \"200000\"."
    },
    genNext: {
      title: "2. genNext() - Generate Next Position",
      description: "Generates a rank that comes after an existing item. Used when adding a new item at the end.",
      explanation: "\"300000\" is generated, which comes lexicographically after \"200000\"."
    },
    between: {
      title: "3. between() - Generate Middle Position",
      description: "Generates a rank between two existing items.",
      explanation: "Perfect middle value is calculated: (100000 + 300000) ÷ 2 = 200000"
    }
  },

  buckets: {
    title: "Understanding the Bucket System",
    description: "For performance optimization, LexoRank uses the concept of \"buckets\". Each bucket provides a separate space to prevent excessive string length growth.",
    independentSpacesTitle: "3 Independent Bucket Spaces",
    independentSpacesDescription: "Each bucket has an independent ordering space, and the bucket order is 0 → 1 → 2.",
    whyNeededTitle: "Why Are Buckets Needed?",
    continuousInsertionTitle: "Continuous Middle Insertions in One Bucket",
    continuousInsertionSteps: [
      "Initial: \"0|100000:\", \"0|300000:\"",
      "Insert1: \"0|200000:\" (middle value)",
      "Insert2: \"0|150000:\" (finer middle value)",
      "Insert3: \"0|125000:\" (even finer middle value)",
      "Insert4: \"0|112500:\" (continued subdivision...)"
    ],
    precisionLimit: "Eventually strings become longer and reach Base36 precision limits",
    bucketRotationTitle: "Bucket Rotation Usage",
    bucketRotationDescription: "During rebalancing, items are cyclically distributed across 3 buckets to secure space in each bucket.",
    bucketRotationSteps: [
      "Item 1 → \"0|100000:\" (Bucket 0)",
      "Item 2 → \"1|100000:\" (Bucket 1)",
      "Item 3 → \"2|100000:\" (Bucket 2)",
      "Item 4 → \"0|200000:\" (Cycle back to Bucket 0)"
    ],
    optimization: "Optimized by providing sufficient space in each bucket.",
    sortOrderTitle: "Bucket Sort Order",
    sortOrderDescription: "When comparing strings, bucket numbers are compared first, so they are sorted in this order:",
    sortOrderExample: "\"0|zzzzzz:\" < \"1|000000:\" < \"2|000000:\"",
    sortOrderExplanation: "All values in bucket 0 come before bucket 1, and all values in bucket 1 come before bucket 2."
  },

  rebalancing: {
    title: "Rebalancing: Performance Optimization",
    description: "Continuously inserting items at the same position gradually increases string length. Rebalancing redistributes the intervals.",
    excessiveGrowthTitle: "When String Length Increases Excessively",
    steps: [
      {
        title: "Step 1: Initial State (Spacious Intervals)",
        items: ["\"0|100000:\"", "\"0|900000:\""]
      },
      {
        title: "Step 2: Middle Values Added",
        items: ["\"0|100000:\"", "\"0|500000:\"", "\"0|300000:\"", "\"0|700000:\"", "\"0|900000:\""]
      },
      {
        title: "Step 3: String Length Explosion (Performance Degradation)",
        items: ["\"0|100000:\"", "\"0|100001:\"", "\"0|100002:\"", "\"0|100003:\""],
        note: "Long strings are expensive for sorting and comparison operations"
      }
    ],
    solutionTitle: "Solution - Rebalancing",
    solutionDescription: "Redistribute all items to clean ranks while maintaining order. Simultaneously distribute evenly across 3 buckets to secure space for future insertions.",
    beforeTitle: "Before Rebalancing",
    beforeNote: "Strings are long and all items are in the same bucket.",
    afterTitle: "After Rebalancing",
    afterNote: "Average length gains space and is evenly distributed across 3 buckets",
    whenToUseTitle: "When Should Rebalancing and Buckets Be Used?",
    guidelines: [
      "For non-extreme data volumes, Base32's range is so wide that extensive bucket usage isn't necessary.",
      "For extreme data volumes or when continuously inserting at the same position causes string length growth, trigger rebalancing based on string length."
    ]
  },

  todoExample: [
    { name: 'Cleaning', index: 0 },
    { name: 'Grocery Shopping', index: 1 },
    { name: 'Exercise', index: 2 },
    { name: 'Reading', index: 3 },
    { name: 'Cooking', index: 4 },
  ],

  lexorankExample: [
    { name: 'Cleaning', rank: 'a' },
    { name: 'Grocery Shopping', rank: 'c' },
    { name: 'Exercise', rank: 'e' },
    { name: 'Reading', rank: 'g' },
    { name: 'Cooking', rank: 'i' },
  ]
} as const;