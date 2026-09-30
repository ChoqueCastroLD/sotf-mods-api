/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Creators_TopInputs */

const en_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top mod`)
};

const es_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod estrella`)
};

const de_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top-Mod`)
};

const fr_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod phare`)
};

const it_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod di punta`)
};

const nl_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Topmod`)
};

const pl_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepszy mod`)
};

const pt_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod principal`)
};

const ru_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучший мод`)
};

const sv_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toppmod`)
};

const tr_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En iyi mod`)
};

const zh_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最佳模组`)
};

const ja_landing_creators_top = /** @type {(inputs: Landing_Creators_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代表Mod`)
};

/**
* | output |
* | --- |
* | "Top mod" |
*
* @param {Landing_Creators_TopInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_top = /** @type {((inputs?: Landing_Creators_TopInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_TopInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_top(inputs)
	if (locale === "de") return de_landing_creators_top(inputs)
	if (locale === "fr") return fr_landing_creators_top(inputs)
	if (locale === "it") return it_landing_creators_top(inputs)
	if (locale === "nl") return nl_landing_creators_top(inputs)
	if (locale === "pl") return pl_landing_creators_top(inputs)
	if (locale === "pt") return pt_landing_creators_top(inputs)
	if (locale === "ru") return ru_landing_creators_top(inputs)
	if (locale === "sv") return sv_landing_creators_top(inputs)
	if (locale === "tr") return tr_landing_creators_top(inputs)
	if (locale === "zh") return zh_landing_creators_top(inputs)
	if (locale === "ja") return ja_landing_creators_top(inputs)
	return en_landing_creators_top(inputs)
});
