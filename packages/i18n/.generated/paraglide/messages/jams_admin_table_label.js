/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Table_LabelInputs */

const en_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams list`)
};

const es_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista de Mod Jams`)
};

const de_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste der Mod-Jams`)
};

const fr_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste des Mod Jams`)
};

const it_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elenco dei Mod Jam`)
};

const nl_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lijst van Mod Jams`)
};

const pl_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista Mod Jamów`)
};

const pt_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista de Mod Jams`)
};

const ru_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список мод-джемов`)
};

const sv_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista över Mod Jams`)
};

const tr_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam listesi`)
};

const zh_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam 列表`)
};

const ja_jams_admin_table_label = /** @type {(inputs: Jams_Admin_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ジャム一覧`)
};

/**
* | output |
* | --- |
* | "Mod Jams list" |
*
* @param {Jams_Admin_Table_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_table_label = /** @type {((inputs?: Jams_Admin_Table_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Table_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_table_label(inputs)
	if (locale === "de") return de_jams_admin_table_label(inputs)
	if (locale === "fr") return fr_jams_admin_table_label(inputs)
	if (locale === "it") return it_jams_admin_table_label(inputs)
	if (locale === "nl") return nl_jams_admin_table_label(inputs)
	if (locale === "pl") return pl_jams_admin_table_label(inputs)
	if (locale === "pt") return pt_jams_admin_table_label(inputs)
	if (locale === "ru") return ru_jams_admin_table_label(inputs)
	if (locale === "sv") return sv_jams_admin_table_label(inputs)
	if (locale === "tr") return tr_jams_admin_table_label(inputs)
	if (locale === "zh") return zh_jams_admin_table_label(inputs)
	if (locale === "ja") return ja_jams_admin_table_label(inputs)
	return en_jams_admin_table_label(inputs)
});
