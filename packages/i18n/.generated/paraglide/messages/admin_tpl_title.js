/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_TitleInputs */

const en_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderation templates`)
};

const es_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantillas de moderación`)
};

const de_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderationsvorlagen`)
};

const fr_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèles de modération`)
};

const it_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelli di moderazione`)
};

const nl_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatiesjablonen`)
};

const pl_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szablony moderacji`)
};

const pt_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelos de moderação`)
};

const ru_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаблоны модерации`)
};

const sv_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modereringsmallar`)
};

const tr_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderasyon şablonları`)
};

const zh_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核模板`)
};

const ja_admin_tpl_title = /** @type {(inputs: Admin_Tpl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーションのテンプレート`)
};

/**
* | output |
* | --- |
* | "Moderation templates" |
*
* @param {Admin_Tpl_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_title = /** @type {((inputs?: Admin_Tpl_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_title(inputs)
	if (locale === "de") return de_admin_tpl_title(inputs)
	if (locale === "fr") return fr_admin_tpl_title(inputs)
	if (locale === "it") return it_admin_tpl_title(inputs)
	if (locale === "nl") return nl_admin_tpl_title(inputs)
	if (locale === "pl") return pl_admin_tpl_title(inputs)
	if (locale === "pt") return pt_admin_tpl_title(inputs)
	if (locale === "ru") return ru_admin_tpl_title(inputs)
	if (locale === "sv") return sv_admin_tpl_title(inputs)
	if (locale === "tr") return tr_admin_tpl_title(inputs)
	if (locale === "zh") return zh_admin_tpl_title(inputs)
	if (locale === "ja") return ja_admin_tpl_title(inputs)
	return en_admin_tpl_title(inputs)
});
