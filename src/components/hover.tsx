import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Hover({ text }: { text: string }, { hoverText }: { hoverText: string }) {

  return (
    <HoverCard>
      <HoverCardTrigger>{text}</HoverCardTrigger>
      <HoverCardContent>{hoverText}</HoverCardContent>
    </HoverCard>
  );
}
