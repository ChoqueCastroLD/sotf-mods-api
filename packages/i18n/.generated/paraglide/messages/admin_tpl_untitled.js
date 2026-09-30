/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_UntitledInputs */

const en_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New template`)
};

const es_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantilla nueva`)
};

const de_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Vorlage`)
};

const fr_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau modèle`)
};

const it_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo modello`)
};

const nl_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw sjabloon`)
};

const pl_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy szablon`)
};

const pt_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo modelo`)
};

const ru_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый шаблон`)
};

const sv_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny mall`)
};

const tr_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni şablon`)
};

const zh_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新模板`)
};

const ja_admin_tpl_untitled = /** @type {(inputs: Admin_Tpl_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいテンプレート`)
};

/**
* | output |
* | --- |
* | "New template" |
*
* @param {Admin_Tpl_UntitledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_untitled = /** @type {((inputs?: Admin_Tpl_UntitledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_UntitledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_untitled(inputs)
	if (locale === "de") return de_admin_tpl_untitled(inputs)
	if (locale === "fr") return fr_admin_tpl_untitled(inputs)
	if (locale === "it") return it_admin_tpl_untitled(inputs)
	if (locale === "nl") return nl_admin_tpl_untitled(inputs)
	if (locale === "pl") return pl_admin_tpl_untitled(inputs)
	if (locale === "pt") return pt_admin_tpl_untitled(inputs)
	if (locale === "ru") return ru_admin_tpl_untitled(inputs)
	if (locale === "sv") return sv_admin_tpl_untitled(inputs)
	if (locale === "tr") return tr_admin_tpl_untitled(inputs)
	if (locale === "zh") return zh_admin_tpl_untitled(inputs)
	if (locale === "ja") return ja_admin_tpl_untitled(inputs)
	return en_admin_tpl_untitled(inputs)
});
