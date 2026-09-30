/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Badges_IntroInputs */

const en_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your Creator tier, the next milestones and the badges you are closest to.`)
};

const es_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu rango de creador, los próximos hitos y las insignias que tienes más cerca.`)
};

const de_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Creator-Stufe, die nächsten Meilensteine und die Abzeichen, denen du am nächsten bist.`)
};

const fr_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ton rang de créateur, les prochains paliers et les badges dont tu es le plus proche.`)
};

const it_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo livello da creatore, i prossimi traguardi e i distintivi più vicini.`)
};

const nl_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je makersniveau, de volgende mijlpalen en de badges die het dichtstbij zijn.`)
};

const pl_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój poziom twórcy, następne kamienie milowe i odznaki, do których masz najbliżej.`)
};

const pt_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu nível de criador, os próximos marcos e as insígnias mais próximas.`)
};

const ru_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш ранг создателя, ближайшие вехи и значки, до которых рукой подать.`)
};

const sv_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din skaparnivå, nästa milstolpar och märkena du är närmast.`)
};

const tr_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı seviyen, sıradaki dönüm noktaları ve en yakın olduğun rozetler.`)
};

const zh_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的创作者等级、下一个里程碑，以及最接近解锁的徽章。`)
};

const ja_basecamp_badges_intro = /** @type {(inputs: Basecamp_Badges_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターティア、次のマイルストーン、もう少しで手に入るバッジ。`)
};

/**
* | output |
* | --- |
* | "Your Creator tier, the next milestones and the badges you are closest to." |
*
* @param {Basecamp_Badges_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_intro = /** @type {((inputs?: Basecamp_Badges_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_intro(inputs)
	if (locale === "de") return de_basecamp_badges_intro(inputs)
	if (locale === "fr") return fr_basecamp_badges_intro(inputs)
	if (locale === "it") return it_basecamp_badges_intro(inputs)
	if (locale === "nl") return nl_basecamp_badges_intro(inputs)
	if (locale === "pl") return pl_basecamp_badges_intro(inputs)
	if (locale === "pt") return pt_basecamp_badges_intro(inputs)
	if (locale === "ru") return ru_basecamp_badges_intro(inputs)
	if (locale === "sv") return sv_basecamp_badges_intro(inputs)
	if (locale === "tr") return tr_basecamp_badges_intro(inputs)
	if (locale === "zh") return zh_basecamp_badges_intro(inputs)
	if (locale === "ja") return ja_basecamp_badges_intro(inputs)
	return en_basecamp_badges_intro(inputs)
});
