/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Key_HintInputs */

const en_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–60 lowercase letters, digits or underscores.`)
};

const es_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De 2 a 60 minúsculas, dígitos o guiones bajos.`)
};

const de_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–60 Kleinbuchstaben, Ziffern oder Unterstriche.`)
};

const fr_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2 à 60 minuscules, chiffres ou tirets bas.`)
};

const it_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da 2 a 60 minuscole, cifre o trattini bassi.`)
};

const nl_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–60 kleine letters, cijfers of underscores.`)
};

const pl_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Od 2 do 60 małych liter, cyfr lub podkreśleń.`)
};

const pt_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De 2 a 60 minúsculas, dígitos ou sublinhados.`)
};

const ru_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`От 2 до 60 строчных латинских букв, цифр или подчёркиваний.`)
};

const sv_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–60 gemener, siffror eller understreck.`)
};

const tr_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–60 küçük harf, rakam veya alt çizgi.`)
};

const zh_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2–60 个小写字母、数字或下划线。`)
};

const ja_admin_tpl_key_hint = /** @type {(inputs: Admin_Tpl_Key_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2〜60 文字の小文字英字、数字、アンダースコア。`)
};

/**
* | output |
* | --- |
* | "2–60 lowercase letters, digits or underscores." |
*
* @param {Admin_Tpl_Key_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_key_hint = /** @type {((inputs?: Admin_Tpl_Key_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Key_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_key_hint(inputs)
	if (locale === "de") return de_admin_tpl_key_hint(inputs)
	if (locale === "fr") return fr_admin_tpl_key_hint(inputs)
	if (locale === "it") return it_admin_tpl_key_hint(inputs)
	if (locale === "nl") return nl_admin_tpl_key_hint(inputs)
	if (locale === "pl") return pl_admin_tpl_key_hint(inputs)
	if (locale === "pt") return pt_admin_tpl_key_hint(inputs)
	if (locale === "ru") return ru_admin_tpl_key_hint(inputs)
	if (locale === "sv") return sv_admin_tpl_key_hint(inputs)
	if (locale === "tr") return tr_admin_tpl_key_hint(inputs)
	if (locale === "zh") return zh_admin_tpl_key_hint(inputs)
	if (locale === "ja") return ja_admin_tpl_key_hint(inputs)
	return en_admin_tpl_key_hint(inputs)
});
