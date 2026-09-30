/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_EditInputs */

const en_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const es_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const de_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearbeiten`)
};

const fr_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

const it_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica`)
};

const nl_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerken`)
};

const pl_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj`)
};

const pt_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ru_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить`)
};

const sv_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera`)
};

const tr_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenle`)
};

const zh_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const ja_translations_edit = /** @type {(inputs: Translations_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Translations_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_edit = /** @type {((inputs?: Translations_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_edit(inputs)
	if (locale === "de") return de_translations_edit(inputs)
	if (locale === "fr") return fr_translations_edit(inputs)
	if (locale === "it") return it_translations_edit(inputs)
	if (locale === "nl") return nl_translations_edit(inputs)
	if (locale === "pl") return pl_translations_edit(inputs)
	if (locale === "pt") return pt_translations_edit(inputs)
	if (locale === "ru") return ru_translations_edit(inputs)
	if (locale === "sv") return sv_translations_edit(inputs)
	if (locale === "tr") return tr_translations_edit(inputs)
	if (locale === "zh") return zh_translations_edit(inputs)
	if (locale === "ja") return ja_translations_edit(inputs)
	return en_translations_edit(inputs)
});
