/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ curator: NonNullable<unknown> }} Kits_Curated_ByInputs */

const en_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Curated by ${i?.curator}`)
};

const es_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Seleccionado por ${i?.curator}`)
};

const de_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zusammengestellt von ${i?.curator}`)
};

const fr_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Composé par ${i?.curator}`)
};

const it_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A cura di ${i?.curator}`)
};

const nl_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Samengesteld door ${i?.curator}`)
};

const pl_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autor zestawu: ${i?.curator}`)
};

const pt_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Montado por ${i?.curator}`)
};

const ru_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Собрал ${i?.curator}`)
};

const sv_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sammanställt av ${i?.curator}`)
};

const tr_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hazırlayan: ${i?.curator}`)
};

const zh_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`由 ${i?.curator} 整理`)
};

const ja_kits_curated_by = /** @type {(inputs: Kits_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.curator} さんのキット`)
};

/**
* | output |
* | --- |
* | "Curated by {curator}" |
*
* @param {Kits_Curated_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_curated_by = /** @type {((inputs: Kits_Curated_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Curated_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_curated_by(inputs)
	if (locale === "de") return de_kits_curated_by(inputs)
	if (locale === "fr") return fr_kits_curated_by(inputs)
	if (locale === "it") return it_kits_curated_by(inputs)
	if (locale === "nl") return nl_kits_curated_by(inputs)
	if (locale === "pl") return pl_kits_curated_by(inputs)
	if (locale === "pt") return pt_kits_curated_by(inputs)
	if (locale === "ru") return ru_kits_curated_by(inputs)
	if (locale === "sv") return sv_kits_curated_by(inputs)
	if (locale === "tr") return tr_kits_curated_by(inputs)
	if (locale === "zh") return zh_kits_curated_by(inputs)
	if (locale === "ja") return ja_kits_curated_by(inputs)
	return en_kits_curated_by(inputs)
});
