/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ rating: NonNullable<unknown> }} Profile_Stat_Rating_TitleInputs */

const en_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rating} out of 5 on average`)
};

const es_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rating} de 5 de media`)
};

const de_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Im Schnitt ${i?.rating} von 5`)
};

const fr_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rating} sur 5 en moyenne`)
};

const it_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rating} su 5 in media`)
};

const nl_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemiddeld ${i?.rating} van 5`)
};

const pl_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Średnio ${i?.rating} na 5`)
};

const pt_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rating} de 5 em média`)
};

const ru_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В среднем ${i?.rating} из 5`)
};

const sv_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.rating} av 5 i snitt`)
};

const tr_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ortalama 5 üzerinden ${i?.rating}`)
};

const zh_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`平均 ${i?.rating} 分（满分 5 分）`)
};

const ja_profile_stat_rating_title = /** @type {(inputs: Profile_Stat_Rating_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`平均 ${i?.rating}（5 点満点）`)
};

/**
* | output |
* | --- |
* | "{rating} out of 5 on average" |
*
* @param {Profile_Stat_Rating_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_stat_rating_title = /** @type {((inputs: Profile_Stat_Rating_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Rating_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_stat_rating_title(inputs)
	if (locale === "de") return de_profile_stat_rating_title(inputs)
	if (locale === "fr") return fr_profile_stat_rating_title(inputs)
	if (locale === "it") return it_profile_stat_rating_title(inputs)
	if (locale === "nl") return nl_profile_stat_rating_title(inputs)
	if (locale === "pl") return pl_profile_stat_rating_title(inputs)
	if (locale === "pt") return pt_profile_stat_rating_title(inputs)
	if (locale === "ru") return ru_profile_stat_rating_title(inputs)
	if (locale === "sv") return sv_profile_stat_rating_title(inputs)
	if (locale === "tr") return tr_profile_stat_rating_title(inputs)
	if (locale === "zh") return zh_profile_stat_rating_title(inputs)
	if (locale === "ja") return ja_profile_stat_rating_title(inputs)
	return en_profile_stat_rating_title(inputs)
});
