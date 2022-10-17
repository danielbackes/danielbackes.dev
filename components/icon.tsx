import React, { useMemo } from 'react';
import Image from 'next/image'
import styles from './icon.module.sass';

export type IconProps = {
    title: string;
    folder: string;
    file: string;
    width?: number;
    height?: number;
}

export default function Icon({
    title,
    folder,
    file,
    width = 60,
    height = 40,
}: IconProps) {
    const src = useMemo(
        () => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${folder}/${file}.svg`,
        [
            folder,
            file,
        ]
    );
        
    return (
        <div className={styles.container}>
            <Image
                src={src}
                width={width}
                height={height}
                layout='intrinsic'
                title={title}
                alt={title}
            />
        </div>
    );
}