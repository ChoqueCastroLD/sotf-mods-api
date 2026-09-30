/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_EditInputs */

const en_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit kit`)
};

const es_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar kit`)
};

const de_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit bearbeiten`)
};

const fr_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le kit`)
};

const it_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica kit`)
};

const nl_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit bewerken`)
};

const pl_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj zestaw`)
};

const pt_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar kit`)
};

const ru_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Редактировать набор`)
};

const sv_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera kit`)
};

const tr_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kiti düzenle`)
};

const zh_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑套装`)
};

const ja_kits_edit = /** @type {(inputs: Kits_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを編集`)
};

/**
* | output |
* | --- |
* | "Edit kit" |
*
* @param {Kits_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_edit = /** @type {((inputs?: Kits_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_edit(inputs)
	if (locale === "de") return de_kits_edit(inputs)
	if (locale === "fr") return fr_kits_edit(inputs)
	if (locale === "it") return it_kits_edit(inputs)
	if (locale === "nl") return nl_kits_edit(inputs)
	if (locale === "pl") return pl_kits_edit(inputs)
	if (locale === "pt") return pt_kits_edit(inputs)
	if (locale === "ru") return ru_kits_edit(inputs)
	if (locale === "sv") return sv_kits_edit(inputs)
	if (locale === "tr") return tr_kits_edit(inputs)
	if (locale === "zh") return zh_kits_edit(inputs)
	if (locale === "ja") return ja_kits_edit(inputs)
	return en_kits_edit(inputs)
});
