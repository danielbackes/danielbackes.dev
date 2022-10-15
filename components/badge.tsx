import React, { useMemo } from 'react';
import Image from 'next/image'

export type BadgeProps = {
    style?: "plastic" | "flat" | "flat-square" | "for-the-badge" | "social";
    leftLabel?: string;
    leftColor?: string;
    rightLabel: string;
    rightColor: string;
    logo: string;
    logoColor?: string;
    width?: number;
    height?: number;
    title: string;
}

export default function Badge({
  style = 'flat-square',
  leftLabel,
  leftColor,
  rightLabel,
  rightColor,
  logo,
  logoColor = 'white',
  width = 55,
  height = 15,
  title,
}: BadgeProps) {
    const src = useMemo(
        () => {
            let url = `https://img.shields.io/badge/${rightLabel}-${rightColor}?style=${style}&logo=${logo}&logoColor=${logoColor}`;
            url += (leftLabel ? `&label=${leftLabel}` : '');
            url += (leftColor ? `&labelColor=${leftColor}` : '');
            return url;
        },
        [
            style,
            leftLabel,
            leftColor,
            rightLabel,
            rightColor,
            logo,
            logoColor,            
        ]
    );

    return (
        <Image
            src={src}
            width={width}
            height={height}
            title={title}
            alt={title}
        />
    );
}