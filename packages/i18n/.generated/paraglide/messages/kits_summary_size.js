/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Summary_SizeInputs */

const en_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contents`)
};

const es_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido`)
};

const de_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalt`)
};

const fr_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu`)
};

const it_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuto`)
};

const nl_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud`)
};

const pl_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawartość`)
};

const pt_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo`)
};

const ru_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Состав`)
};

const sv_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innehåll`)
};

const tr_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik`)
};

const zh_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

const ja_kits_summary_size = /** @type {(inputs: Kits_Summary_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容`)
};

/**
* | output |
* | --- |
* | "Contents" |
*
* @param {Kits_Summary_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_summary_size = /** @type {((inputs?: Kits_Summary_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Summary_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_summary_size(inputs)
	if (locale === "de") return de_kits_summary_size(inputs)
	if (locale === "fr") return fr_kits_summary_size(inputs)
	if (locale === "it") return it_kits_summary_size(inputs)
	if (locale === "nl") return nl_kits_summary_size(inputs)
	if (locale === "pl") return pl_kits_summary_size(inputs)
	if (locale === "pt") return pt_kits_summary_size(inputs)
	if (locale === "ru") return ru_kits_summary_size(inputs)
	if (locale === "sv") return sv_kits_summary_size(inputs)
	if (locale === "tr") return tr_kits_summary_size(inputs)
	if (locale === "zh") return zh_kits_summary_size(inputs)
	if (locale === "ja") return ja_kits_summary_size(inputs)
	return en_kits_summary_size(inputs)
});
