/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badges_TitleInputs */

const en_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field notebook`)
};

const es_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuaderno de campo`)
};

const de_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldtagebuch`)
};

const fr_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carnet de terrain`)
};

const it_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taccuino da campo`)
};

const nl_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldnotitieboek`)
};

const pl_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dziennik terenowy`)
};

const pt_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caderno de campo`)
};

const ru_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой дневник`)
};

const sv_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältdagbok`)
};

const tr_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha defteri`)
};

const zh_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`野外笔记`)
};

const ja_profile_badges_title = /** @type {(inputs: Profile_Badges_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドノート`)
};

/**
* | output |
* | --- |
* | "Field notebook" |
*
* @param {Profile_Badges_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badges_title = /** @type {((inputs?: Profile_Badges_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badges_title(inputs)
	if (locale === "de") return de_profile_badges_title(inputs)
	if (locale === "fr") return fr_profile_badges_title(inputs)
	if (locale === "it") return it_profile_badges_title(inputs)
	if (locale === "nl") return nl_profile_badges_title(inputs)
	if (locale === "pl") return pl_profile_badges_title(inputs)
	if (locale === "pt") return pt_profile_badges_title(inputs)
	if (locale === "ru") return ru_profile_badges_title(inputs)
	if (locale === "sv") return sv_profile_badges_title(inputs)
	if (locale === "tr") return tr_profile_badges_title(inputs)
	if (locale === "zh") return zh_profile_badges_title(inputs)
	if (locale === "ja") return ja_profile_badges_title(inputs)
	return en_profile_badges_title(inputs)
});
