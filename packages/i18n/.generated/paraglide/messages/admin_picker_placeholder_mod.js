/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Picker_Placeholder_ModInputs */

const en_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods by name or manifest ID`)
};

const es_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca mods por nombre o ID de manifest`)
};

const de_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods nach Name oder Manifest-ID suchen`)
};

const fr_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods par nom ou ID de manifest`)
};

const it_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod per nome o ID del manifest`)
};

const nl_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek mods op naam of manifest-ID`)
};

const pl_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów po nazwie lub ID manifestu`)
};

const pt_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busque mods por nome ou ID do manifest`)
};

const ru_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищите моды по названию или ID манифеста`)
};

const sv_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar på namn eller manifest-ID`)
};

const tr_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları ada veya manifest kimliğine göre ara`)
};

const zh_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按名称或 manifest ID 搜索模组`)
};

const ja_admin_picker_placeholder_mod = /** @type {(inputs: Admin_Picker_Placeholder_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前またはマニフェスト ID で MOD を検索`)
};

/**
* | output |
* | --- |
* | "Search mods by name or manifest ID" |
*
* @param {Admin_Picker_Placeholder_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_picker_placeholder_mod = /** @type {((inputs?: Admin_Picker_Placeholder_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Picker_Placeholder_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_picker_placeholder_mod(inputs)
	if (locale === "de") return de_admin_picker_placeholder_mod(inputs)
	if (locale === "fr") return fr_admin_picker_placeholder_mod(inputs)
	if (locale === "it") return it_admin_picker_placeholder_mod(inputs)
	if (locale === "nl") return nl_admin_picker_placeholder_mod(inputs)
	if (locale === "pl") return pl_admin_picker_placeholder_mod(inputs)
	if (locale === "pt") return pt_admin_picker_placeholder_mod(inputs)
	if (locale === "ru") return ru_admin_picker_placeholder_mod(inputs)
	if (locale === "sv") return sv_admin_picker_placeholder_mod(inputs)
	if (locale === "tr") return tr_admin_picker_placeholder_mod(inputs)
	if (locale === "zh") return zh_admin_picker_placeholder_mod(inputs)
	if (locale === "ja") return ja_admin_picker_placeholder_mod(inputs)
	return en_admin_picker_placeholder_mod(inputs)
});
