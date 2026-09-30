/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ author: NonNullable<unknown> }} Ui_Domain_Curated_ByInputs */

const en_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`curated by ${i?.author}`)
};

const es_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`seleccionado por ${i?.author}`)
};

const de_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`zusammengestellt von ${i?.author}`)
};

const fr_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`composé par ${i?.author}`)
};

const it_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`a cura di ${i?.author}`)
};

const nl_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`samengesteld door ${i?.author}`)
};

const pl_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`zestawienie: ${i?.author}`)
};

const pt_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`montado por ${i?.author}`)
};

const ru_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`собрал(а) ${i?.author}`)
};

const sv_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`sammanställt av ${i?.author}`)
};

const tr_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`derleyen: ${i?.author}`)
};

const zh_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`整理者：${i?.author}`)
};

const ja_ui_domain_curated_by = /** @type {(inputs: Ui_Domain_Curated_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`キュレーター：${i?.author}`)
};

/**
* | output |
* | --- |
* | "curated by {author}" |
*
* @param {Ui_Domain_Curated_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_curated_by = /** @type {((inputs: Ui_Domain_Curated_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Curated_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_curated_by(inputs)
	if (locale === "de") return de_ui_domain_curated_by(inputs)
	if (locale === "fr") return fr_ui_domain_curated_by(inputs)
	if (locale === "it") return it_ui_domain_curated_by(inputs)
	if (locale === "nl") return nl_ui_domain_curated_by(inputs)
	if (locale === "pl") return pl_ui_domain_curated_by(inputs)
	if (locale === "pt") return pt_ui_domain_curated_by(inputs)
	if (locale === "ru") return ru_ui_domain_curated_by(inputs)
	if (locale === "sv") return sv_ui_domain_curated_by(inputs)
	if (locale === "tr") return tr_ui_domain_curated_by(inputs)
	if (locale === "zh") return zh_ui_domain_curated_by(inputs)
	if (locale === "ja") return ja_ui_domain_curated_by(inputs)
	return en_ui_domain_curated_by(inputs)
});
