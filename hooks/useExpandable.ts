import { useState, useCallback } from "react";

interface UseExpandableOptions {
  /** จำนวน item ที่แสดงก่อน expand */
  initialCount?: number;
}

/**
 * Hook สำหรับ logic แสดง/ซ่อนรายการ (เช่น tech tags ใน CaseStudyCard)
 * คืนค่า visibleItems, hasMore, hiddenCount, expanded, toggle
 */
export function useExpandable<T>(
  items: T[],
  { initialCount = 5 }: UseExpandableOptions = {}
) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded((prev) => !prev), []);

  const visibleItems = expanded ? items : items.slice(0, initialCount);
  const hasMore = items.length > initialCount;
  const hiddenCount = items.length - initialCount;

  return { visibleItems, hasMore, hiddenCount, expanded, toggle };
}
