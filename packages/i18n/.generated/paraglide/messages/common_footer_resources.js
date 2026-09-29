/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Footer_ResourcesInputs */

const en_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resources`)
};

const es_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recursos`)
};

const de_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ressourcen`)
};

const fr_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ressources`)
};

const it_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risorse`)
};

const nl_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bronnen`)
};

const pl_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zasoby`)
};

const pt_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recursos`)
};

const ru_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ресурсы`)
};

const sv_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resurser`)
};

const tr_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaynaklar`)
};

const zh_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`资源`)
};

const ja_common_footer_resources = /** @type {(inputs: Common_Footer_ResourcesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リソース`)
};

/**
* | output |
* | --- |
* | "Resources" |
*
* @param {Common_Footer_ResourcesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_footer_resources = /** @type {((inputs?: Common_Footer_ResourcesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Footer_ResourcesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_footer_resources(inputs)
	if (locale === "de") return de_common_footer_resources(inputs)
	if (locale === "fr") return fr_common_footer_resources(inputs)
	if (locale === "it") return it_common_footer_resources(inputs)
	if (locale === "nl") return nl_common_footer_resources(inputs)
	if (locale === "pl") return pl_common_footer_resources(inputs)
	if (locale === "pt") return pt_common_footer_resources(inputs)
	if (locale === "ru") return ru_common_footer_resources(inputs)
	if (locale === "sv") return sv_common_footer_resources(inputs)
	if (locale === "tr") return tr_common_footer_resources(inputs)
	if (locale === "zh") return zh_common_footer_resources(inputs)
	if (locale === "ja") return ja_common_footer_resources(inputs)
	return en_common_footer_resources(inputs)
});
