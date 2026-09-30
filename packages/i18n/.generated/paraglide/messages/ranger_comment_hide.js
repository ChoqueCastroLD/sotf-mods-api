/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Comment_HideInputs */

const en_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide`)
};

const es_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const de_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausblenden`)
};

const fr_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer`)
};

const it_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi`)
};

const nl_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbergen`)
};

const pl_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj`)
};

const pt_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar`)
};

const ru_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть`)
};

const sv_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj`)
};

const tr_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizle`)
};

const zh_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏`)
};

const ja_ranger_comment_hide = /** @type {(inputs: Ranger_Comment_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Hide" |
*
* @param {Ranger_Comment_HideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_comment_hide = /** @type {((inputs?: Ranger_Comment_HideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Comment_HideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_comment_hide(inputs)
	if (locale === "de") return de_ranger_comment_hide(inputs)
	if (locale === "fr") return fr_ranger_comment_hide(inputs)
	if (locale === "it") return it_ranger_comment_hide(inputs)
	if (locale === "nl") return nl_ranger_comment_hide(inputs)
	if (locale === "pl") return pl_ranger_comment_hide(inputs)
	if (locale === "pt") return pt_ranger_comment_hide(inputs)
	if (locale === "ru") return ru_ranger_comment_hide(inputs)
	if (locale === "sv") return sv_ranger_comment_hide(inputs)
	if (locale === "tr") return tr_ranger_comment_hide(inputs)
	if (locale === "zh") return zh_ranger_comment_hide(inputs)
	if (locale === "ja") return ja_ranger_comment_hide(inputs)
	return en_ranger_comment_hide(inputs)
});
