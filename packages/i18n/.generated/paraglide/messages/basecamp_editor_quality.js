/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_QualityInputs */

const en_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listing quality`)
};

const es_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Calidad de la ficha`)
};

const de_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualität der Seite`)
};

const fr_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualité de la fiche`)
};

const it_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualità della scheda`)
};

const nl_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kwaliteit van de pagina`)
};

const pl_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jakość strony`)
};

const pt_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualidade da página`)
};

const ru_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Качество страницы`)
};

const sv_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidans kvalitet`)
};

const tr_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa kalitesi`)
};

const zh_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面质量`)
};

const ja_basecamp_editor_quality = /** @type {(inputs: Basecamp_Editor_QualityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページの品質`)
};

/**
* | output |
* | --- |
* | "Listing quality" |
*
* @param {Basecamp_Editor_QualityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_quality = /** @type {((inputs?: Basecamp_Editor_QualityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_QualityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_quality(inputs)
	if (locale === "de") return de_basecamp_editor_quality(inputs)
	if (locale === "fr") return fr_basecamp_editor_quality(inputs)
	if (locale === "it") return it_basecamp_editor_quality(inputs)
	if (locale === "nl") return nl_basecamp_editor_quality(inputs)
	if (locale === "pl") return pl_basecamp_editor_quality(inputs)
	if (locale === "pt") return pt_basecamp_editor_quality(inputs)
	if (locale === "ru") return ru_basecamp_editor_quality(inputs)
	if (locale === "sv") return sv_basecamp_editor_quality(inputs)
	if (locale === "tr") return tr_basecamp_editor_quality(inputs)
	if (locale === "zh") return zh_basecamp_editor_quality(inputs)
	if (locale === "ja") return ja_basecamp_editor_quality(inputs)
	return en_basecamp_editor_quality(inputs)
});
