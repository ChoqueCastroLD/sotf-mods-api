/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_AboutInputs */

const en_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About`)
};

const es_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acerca de`)
};

const de_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über uns`)
};

const fr_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos`)
};

const it_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chi siamo`)
};

const nl_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over ons`)
};

const pl_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O nas`)
};

const pt_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre`)
};

const ru_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`О проекте`)
};

const sv_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om oss`)
};

const tr_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hakkında`)
};

const zh_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于`)
};

const ja_common_footer_about = /** @type {(inputs: Common_Footer_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このサイトについて`)
};

/**
* | output |
* | --- |
* | "About" |
*
* @param {Common_Footer_AboutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_about = /** @type {((inputs?: Common_Footer_AboutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_AboutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_about(inputs)
	if (locale === "de") return de_common_footer_about(inputs)
	if (locale === "fr") return fr_common_footer_about(inputs)
	if (locale === "it") return it_common_footer_about(inputs)
	if (locale === "nl") return nl_common_footer_about(inputs)
	if (locale === "pl") return pl_common_footer_about(inputs)
	if (locale === "pt") return pt_common_footer_about(inputs)
	if (locale === "ru") return ru_common_footer_about(inputs)
	if (locale === "sv") return sv_common_footer_about(inputs)
	if (locale === "tr") return tr_common_footer_about(inputs)
	if (locale === "zh") return zh_common_footer_about(inputs)
	if (locale === "ja") return ja_common_footer_about(inputs)
	return en_common_footer_about(inputs)
});
