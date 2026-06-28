interface BadgeProps {
  path: string;
  alt: string;
}

const BADGE_BASE = 'https://img.shields.io';
const BADGE_STYLE = '?color=3b82f6&labelColor=eff6ff';

export const Badge = ({ path, alt }: BadgeProps) => (
  <img src={`${BADGE_BASE}/${path}${BADGE_STYLE}`} alt={alt} />
);
