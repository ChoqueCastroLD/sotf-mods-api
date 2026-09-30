/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Table_LabelInputs */

const en_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awards, newest first`)
};

const es_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premios, del más reciente al más antiguo`)
};

const de_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auszeichnungen, neueste zuerst`)
};

const fr_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récompenses, de la plus récente à la plus ancienne`)
};

const it_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Premi, dal più recente`)
};

const nl_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prijzen, nieuwste eerst`)
};

const pl_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyróżnienia, od najnowszego`)
};

const pt_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prêmios, do mais recente ao mais antigo`)
};

const ru_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Награды, сначала новые`)
};

const sv_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utmärkelser, nyaste först`)
};

const tr_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödüller, en yeni önce`)
};

const zh_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`奖项，从新到旧`)
};

const ja_admin_awards_table_label = /** @type {(inputs: Admin_Awards_Table_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワード（新しい順）`)
};

/**
* | output |
* | --- |
* | "Awards, newest first" |
*
* @param {Admin_Awards_Table_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_table_label = /** @type {((inputs?: Admin_Awards_Table_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Table_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_table_label(inputs)
	if (locale === "de") return de_admin_awards_table_label(inputs)
	if (locale === "fr") return fr_admin_awards_table_label(inputs)
	if (locale === "it") return it_admin_awards_table_label(inputs)
	if (locale === "nl") return nl_admin_awards_table_label(inputs)
	if (locale === "pl") return pl_admin_awards_table_label(inputs)
	if (locale === "pt") return pt_admin_awards_table_label(inputs)
	if (locale === "ru") return ru_admin_awards_table_label(inputs)
	if (locale === "sv") return sv_admin_awards_table_label(inputs)
	if (locale === "tr") return tr_admin_awards_table_label(inputs)
	if (locale === "zh") return zh_admin_awards_table_label(inputs)
	if (locale === "ja") return ja_admin_awards_table_label(inputs)
	return en_admin_awards_table_label(inputs)
});
