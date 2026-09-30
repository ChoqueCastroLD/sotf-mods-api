/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Whats_New_BadgeInputs */

const en_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New for you`)
};

const es_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo para ti`)
};

const de_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu für dich`)
};

const fr_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau pour vous`)
};

const it_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novità per te`)
};

const nl_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw voor jou`)
};

const pl_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe dla ciebie`)
};

const pt_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo para você`)
};

const ru_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новое для вас`)
};

const sv_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt för dig`)
};

const tr_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senin için yeni`)
};

const zh_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对你是新的`)
};

const ja_mod_whats_new_badge = /** @type {(inputs: Mod_Whats_New_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたにとって新着`)
};

/**
* | output |
* | --- |
* | "New for you" |
*
* @param {Mod_Whats_New_BadgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_whats_new_badge = /** @type {((inputs?: Mod_Whats_New_BadgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Whats_New_BadgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_whats_new_badge(inputs)
	if (locale === "de") return de_mod_whats_new_badge(inputs)
	if (locale === "fr") return fr_mod_whats_new_badge(inputs)
	if (locale === "it") return it_mod_whats_new_badge(inputs)
	if (locale === "nl") return nl_mod_whats_new_badge(inputs)
	if (locale === "pl") return pl_mod_whats_new_badge(inputs)
	if (locale === "pt") return pt_mod_whats_new_badge(inputs)
	if (locale === "ru") return ru_mod_whats_new_badge(inputs)
	if (locale === "sv") return sv_mod_whats_new_badge(inputs)
	if (locale === "tr") return tr_mod_whats_new_badge(inputs)
	if (locale === "zh") return zh_mod_whats_new_badge(inputs)
	if (locale === "ja") return ja_mod_whats_new_badge(inputs)
	return en_mod_whats_new_badge(inputs)
});
