/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Invalid_TitleInputs */

const en_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some templates need attention`)
};

const es_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algunas plantillas necesitan atención`)
};

const de_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einige Vorlagen brauchen Aufmerksamkeit`)
};

const fr_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Certains modèles demandent votre attention`)
};

const it_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcuni modelli richiedono attenzione`)
};

const nl_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sommige sjablonen vragen aandacht`)
};

const pl_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niektóre szablony wymagają uwagi`)
};

const pt_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguns modelos precisam de atenção`)
};

const ru_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Некоторые шаблоны требуют внимания`)
};

const sv_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Några mallar behöver åtgärdas`)
};

const tr_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bazı şablonlar ilgi bekliyor`)
};

const zh_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分模板需要处理`)
};

const ja_admin_tpl_invalid_title = /** @type {(inputs: Admin_Tpl_Invalid_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認が必要なテンプレートがあります`)
};

/**
* | output |
* | --- |
* | "Some templates need attention" |
*
* @param {Admin_Tpl_Invalid_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_invalid_title = /** @type {((inputs?: Admin_Tpl_Invalid_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Invalid_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_invalid_title(inputs)
	if (locale === "de") return de_admin_tpl_invalid_title(inputs)
	if (locale === "fr") return fr_admin_tpl_invalid_title(inputs)
	if (locale === "it") return it_admin_tpl_invalid_title(inputs)
	if (locale === "nl") return nl_admin_tpl_invalid_title(inputs)
	if (locale === "pl") return pl_admin_tpl_invalid_title(inputs)
	if (locale === "pt") return pt_admin_tpl_invalid_title(inputs)
	if (locale === "ru") return ru_admin_tpl_invalid_title(inputs)
	if (locale === "sv") return sv_admin_tpl_invalid_title(inputs)
	if (locale === "tr") return tr_admin_tpl_invalid_title(inputs)
	if (locale === "zh") return zh_admin_tpl_invalid_title(inputs)
	if (locale === "ja") return ja_admin_tpl_invalid_title(inputs)
	return en_admin_tpl_invalid_title(inputs)
});
