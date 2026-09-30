/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Exclude_Beta_HintInputs */

const en_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Don’t post what happens on beta.sotf-mods.com.`)
};

const es_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No publicar lo que pasa en beta.sotf-mods.com.`)
};

const de_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts posten, was auf beta.sotf-mods.com passiert.`)
};

const fr_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne pas publier ce qui se passe sur beta.sotf-mods.com.`)
};

const it_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non pubblicare ciò che succede su beta.sotf-mods.com.`)
};

const nl_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets posten van wat er op beta.sotf-mods.com gebeurt.`)
};

const pl_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie publikuj tego, co dzieje się na beta.sotf-mods.com.`)
};

const pt_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não postar o que acontece em beta.sotf-mods.com.`)
};

const ru_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не публиковать то, что происходит на beta.sotf-mods.com.`)
};

const sv_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posta inte det som händer på beta.sotf-mods.com.`)
};

const tr_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`beta.sotf-mods.com’da olanları paylaşma.`)
};

const zh_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不发布 beta.sotf-mods.com 上发生的事。`)
};

const ja_admin_hooks_exclude_beta_hint = /** @type {(inputs: Admin_Hooks_Exclude_Beta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`beta.sotf-mods.com での出来事は投稿しません。`)
};

/**
* | output |
* | --- |
* | "Don’t post what happens on beta.sotf-mods.com." |
*
* @param {Admin_Hooks_Exclude_Beta_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_exclude_beta_hint = /** @type {((inputs?: Admin_Hooks_Exclude_Beta_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Exclude_Beta_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "de") return de_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "fr") return fr_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "it") return it_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "nl") return nl_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "pl") return pl_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "pt") return pt_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "ru") return ru_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "sv") return sv_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "tr") return tr_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "zh") return zh_admin_hooks_exclude_beta_hint(inputs)
	if (locale === "ja") return ja_admin_hooks_exclude_beta_hint(inputs)
	return en_admin_hooks_exclude_beta_hint(inputs)
});
