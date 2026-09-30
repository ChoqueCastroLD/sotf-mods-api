/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Exclude_BetaInputs */

const en_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip beta events`)
};

const es_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omitir eventos de la beta`)
};

const de_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta-Ereignisse überspringen`)
};

const fr_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ignorer les événements de la bêta`)
};

const it_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salta gli eventi della beta`)
};

const nl_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bèta-gebeurtenissen overslaan`)
};

const pl_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomijaj zdarzenia z bety`)
};

const pt_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ignorar eventos do beta`)
};

const ru_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пропускать события беты`)
};

const sv_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoppa över betahändelser`)
};

const tr_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beta olaylarını atla`)
};

const zh_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跳过测试版事件`)
};

const ja_admin_hooks_exclude_beta = /** @type {(inputs: Admin_Hooks_Exclude_BetaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベータのイベントを除外`)
};

/**
* | output |
* | --- |
* | "Skip beta events" |
*
* @param {Admin_Hooks_Exclude_BetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_exclude_beta = /** @type {((inputs?: Admin_Hooks_Exclude_BetaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Exclude_BetaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_exclude_beta(inputs)
	if (locale === "de") return de_admin_hooks_exclude_beta(inputs)
	if (locale === "fr") return fr_admin_hooks_exclude_beta(inputs)
	if (locale === "it") return it_admin_hooks_exclude_beta(inputs)
	if (locale === "nl") return nl_admin_hooks_exclude_beta(inputs)
	if (locale === "pl") return pl_admin_hooks_exclude_beta(inputs)
	if (locale === "pt") return pt_admin_hooks_exclude_beta(inputs)
	if (locale === "ru") return ru_admin_hooks_exclude_beta(inputs)
	if (locale === "sv") return sv_admin_hooks_exclude_beta(inputs)
	if (locale === "tr") return tr_admin_hooks_exclude_beta(inputs)
	if (locale === "zh") return zh_admin_hooks_exclude_beta(inputs)
	if (locale === "ja") return ja_admin_hooks_exclude_beta(inputs)
	return en_admin_hooks_exclude_beta(inputs)
});
