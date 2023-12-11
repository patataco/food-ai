import { type PreferencesType } from '~/models';

export type IngredientItem = {
  label: string;
  image: string;
};

export const INGREDIENTS: IngredientItem[] = [
  { label: '쌀', image: '🍚' },
  { label: '대파', image: '🌿' },
  { label: '무', image: '🍚' },
  { label: '당근', image: '🥕' },
  { label: '양파', image: '🧅' },
  { label: '오이', image: '🥒' },
  { label: '호박', image: '🎃' },
  { label: '파프리카', image: '🌶️' },
  { label: '감자', image: '🥔' },
  { label: '고구마', image: '🍠' },
  { label: '콩나물', image: '🌱' },
  { label: '두부', image: '🧀' },
  { label: '계란', image: '🥚' },
  { label: '돼지고기', image: '🐖' },
  { label: '소고기', image: '🐄' },
  { label: '닭고기', image: '🐓' },
  { label: '멸치', image: '🐟' },
  { label: '새우', image: '🦐' },
  { label: '김치', image: '🥬' },
  { label: '미역', image: '🌿' },
  { label: '다시마', image: '🌿' },
  { label: '고사리', image: '🌿' },
];

export const SEASONINGS: IngredientItem[] = [
  { label: '고추장', image: '🌶️' },
  { label: '간장', image: '🍶' },
  { label: '마늘', image: '🧄' },
  { label: '참기름', image: '🛢️' }, // 참기름을 직접 나타내는 이모지가 없어서 기름통 이모지를 대체 사용했습니다.
  { label: '고춧가루', image: '🌶️' },
  { label: '된장', image: '🥣' }, // 된장을 직접 나타내는 이모지가 없어서 그릇 이모지를 대체 사용했습니다.
  { label: '식초', image: '🍾' }, // 식초를 직접 나타내는 이모지가 없어서 병 이모지를 대체 사용했습니다.
  { label: '설탕', image: '🍚' }, // 설탕을 직접 나타내는 이모지가 없어서 밥 이모지를 대체 사용했습니다.
  { label: '통깨', image: '🌾' }, // 통깨를 직접 나타내는 이모지가 없어서 곡물 이모지를 대체 사용했습니다.
  { label: '소금', image: '🧂' },
  { label: '후추', image: '🧂' }, // 후추를 직접 나타내는 이모지가 없어서 소금 이모지를 대체 사용했습니다.
];

export const PREFERENCES: PreferencesType = ['Vegan', 'Gluten Free'];
