/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Snow_ToggleInputs */

const en_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snow`)
};

const es_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieve`)
};

const de_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schnee`)
};

const fr_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neige`)
};

const it_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neve`)
};

const nl_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sneeuw`)
};

const pl_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Śnieg`)
};

const pt_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neve`)
};

const ru_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снег`)
};

const sv_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snö`)
};

const tr_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kar`)
};

const zh_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`雪景`)
};

const ja_common_snow_toggle = /** @type {(inputs: Common_Snow_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`雪`)
};

/**
* | output |
* | --- |
* | "Snow" |
*
* @param {Common_Snow_ToggleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_snow_toggle = /** @type {((inputs?: Common_Snow_ToggleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Snow_ToggleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_snow_toggle(inputs)
	if (locale === "de") return de_common_snow_toggle(inputs)
	if (locale === "fr") return fr_common_snow_toggle(inputs)
	if (locale === "it") return it_common_snow_toggle(inputs)
	if (locale === "nl") return nl_common_snow_toggle(inputs)
	if (locale === "pl") return pl_common_snow_toggle(inputs)
	if (locale === "pt") return pt_common_snow_toggle(inputs)
	if (locale === "ru") return ru_common_snow_toggle(inputs)
	if (locale === "sv") return sv_common_snow_toggle(inputs)
	if (locale === "tr") return tr_common_snow_toggle(inputs)
	if (locale === "zh") return zh_common_snow_toggle(inputs)
	if (locale === "ja") return ja_common_snow_toggle(inputs)
	return en_common_snow_toggle(inputs)
});
