/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_HideInputs */

const en_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide mods`)
};

const es_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar mods`)
};

const de_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods ausblenden`)
};

const fr_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer les mods`)
};

const it_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi mod`)
};

const nl_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods verbergen`)
};

const pl_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj mody`)
};

const pt_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar mods`)
};

const ru_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть моды`)
};

const sv_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj moddar`)
};

const tr_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları gizle`)
};

const zh_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏模组`)
};

const ja_modpacks_review_hide = /** @type {(inputs: Modpacks_Review_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod を隠す`)
};

/**
* | output |
* | --- |
* | "Hide mods" |
*
* @param {Modpacks_Review_HideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_hide = /** @type {((inputs?: Modpacks_Review_HideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_HideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_hide(inputs)
	if (locale === "de") return de_modpacks_review_hide(inputs)
	if (locale === "fr") return fr_modpacks_review_hide(inputs)
	if (locale === "it") return it_modpacks_review_hide(inputs)
	if (locale === "nl") return nl_modpacks_review_hide(inputs)
	if (locale === "pl") return pl_modpacks_review_hide(inputs)
	if (locale === "pt") return pt_modpacks_review_hide(inputs)
	if (locale === "ru") return ru_modpacks_review_hide(inputs)
	if (locale === "sv") return sv_modpacks_review_hide(inputs)
	if (locale === "tr") return tr_modpacks_review_hide(inputs)
	if (locale === "zh") return zh_modpacks_review_hide(inputs)
	if (locale === "ja") return ja_modpacks_review_hide(inputs)
	return en_modpacks_review_hide(inputs)
});
