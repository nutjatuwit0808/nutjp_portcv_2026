"use client";

export function TopProgressBar() {
  const progress = 90;

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-slate-900/90 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 px-4 py-2">
        <span className="text-xs text-slate-400">เวอร์ชั่นนี้ยังไม่สมบูรณ์</span>
        <span className="text-xs font-medium text-blue-400">ดำเนินการไปแล้ว {progress}%</span>
      </div>
      <div className="h-1 w-full bg-slate-800">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
