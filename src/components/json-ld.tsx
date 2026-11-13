/**
 * يحقن بيانات منظَّمة (schema.org) بصيغة JSON-LD في الصفحة.
 * يُستخدم لتحسين فهم محركات البحث لمحتوى الموقع.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
