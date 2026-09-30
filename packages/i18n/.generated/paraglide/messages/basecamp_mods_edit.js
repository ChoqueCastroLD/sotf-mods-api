/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_EditInputs */

const en_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const es_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const de_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearbeiten`)
};

const fr_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

const it_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica`)
};

const nl_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerken`)
};

const pl_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj`)
};

const pt_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ru_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить`)
};

const sv_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera`)
};

const tr_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenle`)
};

const zh_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const ja_basecamp_mods_edit = /** @type {(inputs: Basecamp_Mods_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Basecamp_Mods_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_edit = /** @type {((inputs?: Basecamp_Mods_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_edit(inputs)
	if (locale === "de") return de_basecamp_mods_edit(inputs)
	if (locale === "fr") return fr_basecamp_mods_edit(inputs)
	if (locale === "it") return it_basecamp_mods_edit(inputs)
	if (locale === "nl") return nl_basecamp_mods_edit(inputs)
	if (locale === "pl") return pl_basecamp_mods_edit(inputs)
	if (locale === "pt") return pt_basecamp_mods_edit(inputs)
	if (locale === "ru") return ru_basecamp_mods_edit(inputs)
	if (locale === "sv") return sv_basecamp_mods_edit(inputs)
	if (locale === "tr") return tr_basecamp_mods_edit(inputs)
	if (locale === "zh") return zh_basecamp_mods_edit(inputs)
	if (locale === "ja") return ja_basecamp_mods_edit(inputs)
	return en_basecamp_mods_edit(inputs)
});
