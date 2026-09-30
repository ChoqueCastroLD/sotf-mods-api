/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Picker_Placeholder_BuildInputs */

const en_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search builds by name`)
};

const es_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca builds por nombre`)
};

const de_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds nach Name suchen`)
};

const fr_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des builds par nom`)
};

const it_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca build per nome`)
};

const nl_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek builds op naam`)
};

const pl_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj buildów po nazwie`)
};

const pt_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busque builds por nome`)
};

const ru_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищите билды по названию`)
};

const sv_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök byggen på namn`)
};

const tr_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapıları ada göre ara`)
};

const zh_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按名称搜索建筑`)
};

const ja_admin_picker_placeholder_build = /** @type {(inputs: Admin_Picker_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前で建築データを検索`)
};

/**
* | output |
* | --- |
* | "Search builds by name" |
*
* @param {Admin_Picker_Placeholder_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_picker_placeholder_build = /** @type {((inputs?: Admin_Picker_Placeholder_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Picker_Placeholder_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_picker_placeholder_build(inputs)
	if (locale === "de") return de_admin_picker_placeholder_build(inputs)
	if (locale === "fr") return fr_admin_picker_placeholder_build(inputs)
	if (locale === "it") return it_admin_picker_placeholder_build(inputs)
	if (locale === "nl") return nl_admin_picker_placeholder_build(inputs)
	if (locale === "pl") return pl_admin_picker_placeholder_build(inputs)
	if (locale === "pt") return pt_admin_picker_placeholder_build(inputs)
	if (locale === "ru") return ru_admin_picker_placeholder_build(inputs)
	if (locale === "sv") return sv_admin_picker_placeholder_build(inputs)
	if (locale === "tr") return tr_admin_picker_placeholder_build(inputs)
	if (locale === "zh") return zh_admin_picker_placeholder_build(inputs)
	if (locale === "ja") return ja_admin_picker_placeholder_build(inputs)
	return en_admin_picker_placeholder_build(inputs)
});
