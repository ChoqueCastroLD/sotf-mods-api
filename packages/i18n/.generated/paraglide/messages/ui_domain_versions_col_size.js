/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Versions_Col_SizeInputs */

const en_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Size`)
};

const es_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamaño`)
};

const de_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Größe`)
};

const fr_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taille`)
};

const it_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taglia`)
};

const nl_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grootte`)
};

const pl_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozmiar`)
};

const pt_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamanho`)
};

const ru_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Размер`)
};

const sv_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Storlek`)
};

const tr_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boyut`)
};

const zh_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尺寸`)
};

const ja_ui_domain_versions_col_size = /** @type {(inputs: Ui_Domain_Versions_Col_SizeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイズ`)
};

/**
* | output |
* | --- |
* | "Size" |
*
* @param {Ui_Domain_Versions_Col_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_versions_col_size = /** @type {((inputs?: Ui_Domain_Versions_Col_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Versions_Col_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_versions_col_size(inputs)
	if (locale === "de") return de_ui_domain_versions_col_size(inputs)
	if (locale === "fr") return fr_ui_domain_versions_col_size(inputs)
	if (locale === "it") return it_ui_domain_versions_col_size(inputs)
	if (locale === "nl") return nl_ui_domain_versions_col_size(inputs)
	if (locale === "pl") return pl_ui_domain_versions_col_size(inputs)
	if (locale === "pt") return pt_ui_domain_versions_col_size(inputs)
	if (locale === "ru") return ru_ui_domain_versions_col_size(inputs)
	if (locale === "sv") return sv_ui_domain_versions_col_size(inputs)
	if (locale === "tr") return tr_ui_domain_versions_col_size(inputs)
	if (locale === "zh") return zh_ui_domain_versions_col_size(inputs)
	if (locale === "ja") return ja_ui_domain_versions_col_size(inputs)
	return en_ui_domain_versions_col_size(inputs)
});
