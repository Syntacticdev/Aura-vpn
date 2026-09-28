

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Shield, LucideIcon } from 'lucide-react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
} from 'react-native-reanimated';

// ---- Config ----------------------------------------------------------

const RING_SIZE = 220; // diameter of the dashed orbit ring
const CENTER_SIZE = 96; // diameter of the white center circle
const ICON_BADGE_SIZE = 56; // diameter of the dark icon circle inside

// Each dot: angle (deg) is its starting position on the ring,
// radius lets a dot sit inside/outside the ring line, size/color for variety.
const DOTS = [
    { angle: -100, radius: RING_SIZE / 2, size: 6, color: '#111827' }, // small black dot, top
    { angle: 40, radius: RING_SIZE / 2 + 14, size: 10, color: '#3B82F6' }, // blue dot, outer right
    { angle: 150, radius: RING_SIZE / 2 - 10, size: 8, color: '#60A5FA' }, // lighter blue, lower left
];

export default function OnboardingSpinner({
    statusText = '4.2 ms  CH-ZUR',
    Icon = Shield,
    iconColor = '#fff',
    iconSize = 26,
}: {
    statusText?: string;
    /** Any icon component from lucide-react-native, e.g. Shield, Lock, Wifi */
    Icon?: LucideIcon;
    iconColor?: string;
    iconSize?: number;
}) {
    const rotation = useSharedValue(0);

    React.useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, { duration: 6000, easing: Easing.linear }),
            -1, // infinite
            false
        );
    }, []);

    const rotatingStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotation.value}deg` }],
    }));

    return (
        <View style={styles.wrapper}>
            <View style={[styles.ringBox, { width: RING_SIZE, height: RING_SIZE }]}>
                {/* Dashed static ring */}
                <Svg
                    width={RING_SIZE}
                    height={RING_SIZE}
                    style={StyleSheet.absoluteFill}
                >
                    <Circle
                        cx={RING_SIZE / 2}
                        cy={RING_SIZE / 2}
                        r={RING_SIZE / 2 - 1}
                        stroke="#D6DAE3"
                        strokeWidth={1.5}
                        strokeDasharray="4 6"
                        fill="none"
                    />
                </Svg>

                {/* Rotating layer holding all orbiting dots */}
                <Animated.View
                    style={[StyleSheet.absoluteFill, styles.center, rotatingStyle]}
                >
                    {DOTS.map((dot, i) => {
                        const rad = (dot.angle * Math.PI) / 180;
                        const x = dot.radius * Math.cos(rad);
                        const y = dot.radius * Math.sin(rad);
                        return (
                            <View
                                key={i}
                                style={[
                                    styles.dot,
                                    {
                                        width: dot.size,
                                        height: dot.size,
                                        borderRadius: dot.size / 2,
                                        backgroundColor: dot.color,
                                        transform: [{ translateX: x }, { translateY: y }],
                                    },
                                ]}
                            />
                        );
                    })}
                </Animated.View>

                {/* Static center circle (does NOT rotate) */}
                <View
                    style={[
                        styles.centerCircle,
                        { width: CENTER_SIZE, height: CENTER_SIZE, borderRadius: CENTER_SIZE / 2 },
                    ]}
                >
                    <View
                        style={[
                            styles.iconBadge,
                            {
                                width: ICON_BADGE_SIZE,
                                height: ICON_BADGE_SIZE,
                                borderRadius: ICON_BADGE_SIZE / 2,
                            },
                        ]}
                    >
                        <Icon size={iconSize} color={iconColor} />
                    </View>
                </View>
            </View>

            {/* Status badge below */}
            <View style={styles.badge}>
                <View style={styles.badgeDot} />
                <Text style={styles.badgeText}>{statusText}</Text>
            </View>
        </View>
    );
}

// ---- Styles ------------------------------------------------------------

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    ringBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        position: 'absolute',
    },
    centerCircle: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        // soft shadow, matches the "floating disc" look
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 6,
    },
    iconBadge: {
        backgroundColor: '#111827',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badge: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111827',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
    },
    badgeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#22C55E',
        marginRight: 8,
    },
    badgeText: {
        color: '#F9FAFB',
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});