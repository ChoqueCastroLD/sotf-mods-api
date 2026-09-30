/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Prizes_TitleInputs */

const en_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prizes`)
};

const es_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premios`)
};

const de_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preise`)
};

const fr_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récompenses`)
};

const it_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi`)
};

const nl_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prijzen`)
};

const pl_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nagrody`)
};

const pt_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêmios`)
};

const ru_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Призы`)
};

const sv_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Priser`)
};

const tr_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödüller`)
};

const zh_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖励`)
};

const ja_jams_prizes_title = /** @type {(inputs: Jams_Prizes_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`賞品`)
};

/**
* | output |
* | --- |
* | "Prizes" |
*
* @param {Jams_Prizes_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_prizes_title = /** @type {((inputs?: Jams_Prizes_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Prizes_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_prizes_title(inputs)
	if (locale === "de") return de_jams_prizes_title(inputs)
	if (locale === "fr") return fr_jams_prizes_title(inputs)
	if (locale === "it") return it_jams_prizes_title(inputs)
	if (locale === "nl") return nl_jams_prizes_title(inputs)
	if (locale === "pl") return pl_jams_prizes_title(inputs)
	if (locale === "pt") return pt_jams_prizes_title(inputs)
	if (locale === "ru") return ru_jams_prizes_title(inputs)
	if (locale === "sv") return sv_jams_prizes_title(inputs)
	if (locale === "tr") return tr_jams_prizes_title(inputs)
	if (locale === "zh") return zh_jams_prizes_title(inputs)
	if (locale === "ja") return ja_jams_prizes_title(inputs)
	return en_jams_prizes_title(inputs)
});
