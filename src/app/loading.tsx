export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full space-y-6">
        <div className="flex flex-col items-center gap-3">
          <div className="h-12 w-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>

        <div className="space-y-4">
          <div className="h-8 w-2/3 mx-auto bg-muted rounded-lg animate-pulse" />
          <div className="h-4 w-1/2 mx-auto bg-muted rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-40 bg-muted/50 border border-border rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
