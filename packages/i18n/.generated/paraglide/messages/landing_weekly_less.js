/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Weekly_LessInputs */

const en_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show less`)
};

const es_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar menos`)
};

const de_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weniger anzeigen`)
};

const fr_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher moins`)
};

const it_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra meno`)
};

const nl_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minder tonen`)
};

const pl_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż mniej`)
};

const pt_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar menos`)
};

const ru_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать меньше`)
};

const sv_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa färre`)
};

const tr_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha az göster`)
};

const zh_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起`)
};

const ja_landing_weekly_less = /** @type {(inputs: Landing_Weekly_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示を減らす`)
};

/**
* | output |
* | --- |
* | "Show less" |
*
* @param {Landing_Weekly_LessInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_weekly_less = /** @type {((inputs?: Landing_Weekly_LessInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_LessInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_weekly_less(inputs)
	if (locale === "de") return de_landing_weekly_less(inputs)
	if (locale === "fr") return fr_landing_weekly_less(inputs)
	if (locale === "it") return it_landing_weekly_less(inputs)
	if (locale === "nl") return nl_landing_weekly_less(inputs)
	if (locale === "pl") return pl_landing_weekly_less(inputs)
	if (locale === "pt") return pt_landing_weekly_less(inputs)
	if (locale === "ru") return ru_landing_weekly_less(inputs)
	if (locale === "sv") return sv_landing_weekly_less(inputs)
	if (locale === "tr") return tr_landing_weekly_less(inputs)
	if (locale === "zh") return zh_landing_weekly_less(inputs)
	if (locale === "ja") return ja_landing_weekly_less(inputs)
	return en_landing_weekly_less(inputs)
});
