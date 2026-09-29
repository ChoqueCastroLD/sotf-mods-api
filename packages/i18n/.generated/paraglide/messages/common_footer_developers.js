/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_DevelopersInputs */

const en_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Developers`)
};

const es_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desarrolladores`)
};

const de_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwickler`)
};

const fr_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Développeurs`)
};

const it_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sviluppatori`)
};

const nl_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontwikkelaars`)
};

const pl_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deweloperzy`)
};

const pt_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desenvolvedores`)
};

const ru_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Разработчикам`)
};

const sv_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utvecklare`)
};

const tr_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geliştiriciler`)
};

const zh_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开发者`)
};

const ja_common_footer_developers = /** @type {(inputs: Common_Footer_DevelopersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開発者向け`)
};

/**
* | output |
* | --- |
* | "Developers" |
*
* @param {Common_Footer_DevelopersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_developers = /** @type {((inputs?: Common_Footer_DevelopersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_DevelopersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_developers(inputs)
	if (locale === "de") return de_common_footer_developers(inputs)
	if (locale === "fr") return fr_common_footer_developers(inputs)
	if (locale === "it") return it_common_footer_developers(inputs)
	if (locale === "nl") return nl_common_footer_developers(inputs)
	if (locale === "pl") return pl_common_footer_developers(inputs)
	if (locale === "pt") return pt_common_footer_developers(inputs)
	if (locale === "ru") return ru_common_footer_developers(inputs)
	if (locale === "sv") return sv_common_footer_developers(inputs)
	if (locale === "tr") return tr_common_footer_developers(inputs)
	if (locale === "zh") return zh_common_footer_developers(inputs)
	if (locale === "ja") return ja_common_footer_developers(inputs)
	return en_common_footer_developers(inputs)
});
