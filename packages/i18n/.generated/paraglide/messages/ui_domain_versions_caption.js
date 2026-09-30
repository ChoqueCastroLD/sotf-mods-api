/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Versions_CaptionInputs */

const en_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const es_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones`)
};

const de_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versionen`)
};

const fr_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions`)
};

const it_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni`)
};

const nl_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versies`)
};

const pl_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersje`)
};

const pt_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões`)
};

const ru_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версии`)
};

const sv_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner`)
};

const tr_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürümler`)
};

const zh_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_ui_domain_versions_caption = /** @type {(inputs: Ui_Domain_Versions_CaptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Versions" |
*
* @param {Ui_Domain_Versions_CaptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_versions_caption = /** @type {((inputs?: Ui_Domain_Versions_CaptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Versions_CaptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_versions_caption(inputs)
	if (locale === "de") return de_ui_domain_versions_caption(inputs)
	if (locale === "fr") return fr_ui_domain_versions_caption(inputs)
	if (locale === "it") return it_ui_domain_versions_caption(inputs)
	if (locale === "nl") return nl_ui_domain_versions_caption(inputs)
	if (locale === "pl") return pl_ui_domain_versions_caption(inputs)
	if (locale === "pt") return pt_ui_domain_versions_caption(inputs)
	if (locale === "ru") return ru_ui_domain_versions_caption(inputs)
	if (locale === "sv") return sv_ui_domain_versions_caption(inputs)
	if (locale === "tr") return tr_ui_domain_versions_caption(inputs)
	if (locale === "zh") return zh_ui_domain_versions_caption(inputs)
	if (locale === "ja") return ja_ui_domain_versions_caption(inputs)
	return en_ui_domain_versions_caption(inputs)
});
