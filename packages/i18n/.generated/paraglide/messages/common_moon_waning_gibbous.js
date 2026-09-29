/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Moon_Waning_GibbousInputs */

const en_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waning gibbous`)
};

const es_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gibosa menguante`)
};

const de_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abnehmender Mond`)
};

const fr_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gibbeuse décroissante`)
};

const it_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gibbosa calante`)
};

const nl_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afnemende maan`)
};

const pl_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ubywający garb`)
};

const pt_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minguante gibosa`)
};

const ru_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Убывающая луна`)
};

const sv_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avtagande måne`)
};

const tr_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küçülen şişkin ay`)
};

const zh_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`亏凸月`)
};

const ja_common_moon_waning_gibbous = /** @type {(inputs: Common_Moon_Waning_GibbousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`寝待月`)
};

/**
* | output |
* | --- |
* | "Waning gibbous" |
*
* @param {Common_Moon_Waning_GibbousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_moon_waning_gibbous = /** @type {((inputs?: Common_Moon_Waning_GibbousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Moon_Waning_GibbousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_moon_waning_gibbous(inputs)
	if (locale === "de") return de_common_moon_waning_gibbous(inputs)
	if (locale === "fr") return fr_common_moon_waning_gibbous(inputs)
	if (locale === "it") return it_common_moon_waning_gibbous(inputs)
	if (locale === "nl") return nl_common_moon_waning_gibbous(inputs)
	if (locale === "pl") return pl_common_moon_waning_gibbous(inputs)
	if (locale === "pt") return pt_common_moon_waning_gibbous(inputs)
	if (locale === "ru") return ru_common_moon_waning_gibbous(inputs)
	if (locale === "sv") return sv_common_moon_waning_gibbous(inputs)
	if (locale === "tr") return tr_common_moon_waning_gibbous(inputs)
	if (locale === "zh") return zh_common_moon_waning_gibbous(inputs)
	if (locale === "ja") return ja_common_moon_waning_gibbous(inputs)
	return en_common_moon_waning_gibbous(inputs)
});
