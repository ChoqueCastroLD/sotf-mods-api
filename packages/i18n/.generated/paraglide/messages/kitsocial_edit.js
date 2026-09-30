/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_EditInputs */

const en_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const es_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const de_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearbeiten`)
};

const fr_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

const it_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica`)
};

const nl_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerken`)
};

const pl_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj`)
};

const pt_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ru_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить`)
};

const sv_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera`)
};

const tr_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenle`)
};

const zh_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const ja_kitsocial_edit = /** @type {(inputs: Kitsocial_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Kitsocial_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_edit = /** @type {((inputs?: Kitsocial_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_edit(inputs)
	if (locale === "de") return de_kitsocial_edit(inputs)
	if (locale === "fr") return fr_kitsocial_edit(inputs)
	if (locale === "it") return it_kitsocial_edit(inputs)
	if (locale === "nl") return nl_kitsocial_edit(inputs)
	if (locale === "pl") return pl_kitsocial_edit(inputs)
	if (locale === "pt") return pt_kitsocial_edit(inputs)
	if (locale === "ru") return ru_kitsocial_edit(inputs)
	if (locale === "sv") return sv_kitsocial_edit(inputs)
	if (locale === "tr") return tr_kitsocial_edit(inputs)
	if (locale === "zh") return zh_kitsocial_edit(inputs)
	if (locale === "ja") return ja_kitsocial_edit(inputs)
	return en_kitsocial_edit(inputs)
});
