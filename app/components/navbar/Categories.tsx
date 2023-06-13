'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { FaSkiing, FaSnowboarding } from 'react-icons/fa';
import { TbShip } from "react-icons/tb"
import { GiWaterGun, GiFalling, GiCurlingStone, GiMountainClimbing, GiSurfBoard } from "react-icons/gi"
import { MdKitesurfing, MdScubaDiving, MdSurfing } from "react-icons/md"

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
    {
        label: "Лыжи",
        icon: FaSkiing,
        description: "This club has ski activity"
    },
    {
        label: "SUP-сёрфинг",
        icon: GiSurfBoard,
        description: "This club has sup surfing activity"
    },
    {
        label: "Яхтинг",
        icon: TbShip,
        description: "This club has yachting activity"
    },
    {
        label: "Пейнтбол",
        icon: GiWaterGun,
        description: "This club has paintball activity"
    },
    {
        label: "Аэротруба",
        icon: GiFalling,
        description: "This club has airtube activity"
    },
    {
        label: "Сноубординг",
        icon: FaSnowboarding,
        description: "This club has snowboarding activity"
    },
    {
        label: "Кайтсёрфинг",
        icon: MdKitesurfing,
        description: "This club has kitesurfing activity"
    },
    {
        label: "Сёрфинг",
        icon: MdSurfing,
        description: "This club has surfing activity"
    },
    {
        label: "Кёрлинг",
        icon: GiCurlingStone,
        description: "This club has curling activity"
    },
    {
        label: "Скалолазание",
        icon: GiMountainClimbing,
        description: "This club has climbing activity"
    },
    {
        label: "Дайвинг",
        icon: MdScubaDiving,
        description: "This club has diving activity"
    },

]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
                className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;