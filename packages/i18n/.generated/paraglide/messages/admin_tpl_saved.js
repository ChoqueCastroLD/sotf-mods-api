/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_SavedInputs */

const en_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation templates saved`)
};

const es_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantillas de moderación guardadas`)
};

const de_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderationsvorlagen gespeichert`)
};

const fr_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèles de modération enregistrés`)
};

const it_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelli di moderazione salvati`)
};

const nl_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatiesjablonen opgeslagen`)
};

const pl_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisano szablony moderacji`)
};

const pt_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelos de moderação salvos`)
};

const ru_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаблоны модерации сохранены`)
};

const sv_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modereringsmallar sparade`)
};

const tr_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon şablonları kaydedildi`)
};

const zh_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核模板已保存`)
};

const ja_admin_tpl_saved = /** @type {(inputs: Admin_Tpl_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーションのテンプレートを保存しました`)
};

/**
* | output |
* | --- |
* | "Moderation templates saved" |
*
* @param {Admin_Tpl_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_saved = /** @type {((inputs?: Admin_Tpl_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_saved(inputs)
	if (locale === "de") return de_admin_tpl_saved(inputs)
	if (locale === "fr") return fr_admin_tpl_saved(inputs)
	if (locale === "it") return it_admin_tpl_saved(inputs)
	if (locale === "nl") return nl_admin_tpl_saved(inputs)
	if (locale === "pl") return pl_admin_tpl_saved(inputs)
	if (locale === "pt") return pt_admin_tpl_saved(inputs)
	if (locale === "ru") return ru_admin_tpl_saved(inputs)
	if (locale === "sv") return sv_admin_tpl_saved(inputs)
	if (locale === "tr") return tr_admin_tpl_saved(inputs)
	if (locale === "zh") return zh_admin_tpl_saved(inputs)
	if (locale === "ja") return ja_admin_tpl_saved(inputs)
	return en_admin_tpl_saved(inputs)
});
