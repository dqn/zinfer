---
"zinfer": patch
---

Add caching and reduce redundant AST traversals for improved performance: cache schema detection, module resolution, imported schema types, and schema source lookups; consolidate reference analysis into single pass; inject \_\_Normalize type once per file; skip unnecessary AST walks in GetterResolver and BrandDetector; skip file dependency resolution in ts-morph Project; optimize single-line type post-processing; add early return for simplifyZodFunctionTypes
