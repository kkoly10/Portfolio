// Renders a JSON-LD <script> for structured data. Server component — the JSON
// is serialized at build time and embedded in the static HTML.
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Schema content is fully controlled by us (not user input), so this is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
