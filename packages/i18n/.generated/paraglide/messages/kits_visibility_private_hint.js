/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Visibility_Private_HintInputs */

const en_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only you.`)
};

const es_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo tú.`)
};

const de_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur du.`)
};

const fr_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous seul.`)
};

const it_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo tu.`)
};

const nl_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen jij.`)
};

const pl_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko ty.`)
};

const pt_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só você.`)
};

const ru_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только вы.`)
};

const sv_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara du.`)
};

const tr_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca sen.`)
};

const zh_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅自己可见。`)
};

const ja_kits_visibility_private_hint = /** @type {(inputs: Kits_Visibility_Private_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分だけ。`)
};

/**
* | output |
* | --- |
* | "Only you." |
*
* @param {Kits_Visibility_Private_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_visibility_private_hint = /** @type {((inputs?: Kits_Visibility_Private_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Visibility_Private_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_visibility_private_hint(inputs)
	if (locale === "de") return de_kits_visibility_private_hint(inputs)
	if (locale === "fr") return fr_kits_visibility_private_hint(inputs)
	if (locale === "it") return it_kits_visibility_private_hint(inputs)
	if (locale === "nl") return nl_kits_visibility_private_hint(inputs)
	if (locale === "pl") return pl_kits_visibility_private_hint(inputs)
	if (locale === "pt") return pt_kits_visibility_private_hint(inputs)
	if (locale === "ru") return ru_kits_visibility_private_hint(inputs)
	if (locale === "sv") return sv_kits_visibility_private_hint(inputs)
	if (locale === "tr") return tr_kits_visibility_private_hint(inputs)
	if (locale === "zh") return zh_kits_visibility_private_hint(inputs)
	if (locale === "ja") return ja_kits_visibility_private_hint(inputs)
	return en_kits_visibility_private_hint(inputs)
});
