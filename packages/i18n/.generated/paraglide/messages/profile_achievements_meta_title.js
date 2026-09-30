/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Meta_TitleInputs */

const en_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges, ranks and creator tiers`)
};

const es_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias, rangos y niveles de creador`)
};

const de_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abzeichen, Ränge und Ersteller-Stufen`)
};

const fr_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges, rangs et paliers de créateur`)
};

const it_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Distintivi, gradi e livelli da creatore`)
};

const nl_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges, rangen en makersniveaus`)
};

const pl_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki, rangi i poziomy twórców`)
};

const pt_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insígnias, patentes e níveis de criador`)
};

const ru_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки, ранги и уровни авторов`)
};

const sv_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken, ranger och skaparnivåer`)
};

const tr_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozetler, rütbeler ve üretici seviyeleri`)
};

const zh_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`徽章、等级与创作者段位`)
};

const ja_profile_achievements_meta_title = /** @type {(inputs: Profile_Achievements_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バッジ、ランク、クリエイターティア`)
};

/**
* | output |
* | --- |
* | "Badges, ranks and creator tiers" |
*
* @param {Profile_Achievements_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_meta_title = /** @type {((inputs?: Profile_Achievements_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_meta_title(inputs)
	if (locale === "de") return de_profile_achievements_meta_title(inputs)
	if (locale === "fr") return fr_profile_achievements_meta_title(inputs)
	if (locale === "it") return it_profile_achievements_meta_title(inputs)
	if (locale === "nl") return nl_profile_achievements_meta_title(inputs)
	if (locale === "pl") return pl_profile_achievements_meta_title(inputs)
	if (locale === "pt") return pt_profile_achievements_meta_title(inputs)
	if (locale === "ru") return ru_profile_achievements_meta_title(inputs)
	if (locale === "sv") return sv_profile_achievements_meta_title(inputs)
	if (locale === "tr") return tr_profile_achievements_meta_title(inputs)
	if (locale === "zh") return zh_profile_achievements_meta_title(inputs)
	if (locale === "ja") return ja_profile_achievements_meta_title(inputs)
	return en_profile_achievements_meta_title(inputs)
});
