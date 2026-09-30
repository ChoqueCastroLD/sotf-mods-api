/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Support_TitleInputs */

const en_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Support the creator`)
};

const es_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apoya al creador`)
};

const de_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unterstütze den Ersteller`)
};

const fr_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soutenir le créateur`)
};

const it_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sostieni il creatore`)
};

const nl_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steun de maker`)
};

const pl_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wesprzyj twórcę`)
};

const pt_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apoie o criador`)
};

const ru_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поддержать автора`)
};

const sv_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stöd skaparen`)
};

const tr_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcıyı destekle`)
};

const zh_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持作者`)
};

const ja_mod_support_title = /** @type {(inputs: Mod_Support_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者を支援する`)
};

/**
* | output |
* | --- |
* | "Support the creator" |
*
* @param {Mod_Support_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_support_title = /** @type {((inputs?: Mod_Support_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Support_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_support_title(inputs)
	if (locale === "de") return de_mod_support_title(inputs)
	if (locale === "fr") return fr_mod_support_title(inputs)
	if (locale === "it") return it_mod_support_title(inputs)
	if (locale === "nl") return nl_mod_support_title(inputs)
	if (locale === "pl") return pl_mod_support_title(inputs)
	if (locale === "pt") return pt_mod_support_title(inputs)
	if (locale === "ru") return ru_mod_support_title(inputs)
	if (locale === "sv") return sv_mod_support_title(inputs)
	if (locale === "tr") return tr_mod_support_title(inputs)
	if (locale === "zh") return zh_mod_support_title(inputs)
	if (locale === "ja") return ja_mod_support_title(inputs)
	return en_mod_support_title(inputs)
});
