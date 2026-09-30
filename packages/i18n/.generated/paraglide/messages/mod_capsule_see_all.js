/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Capsule_See_AllInputs */

const en_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See all`)
};

const es_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todo`)
};

const de_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles ansehen`)
};

const fr_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout voir`)
};

const it_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi tutto`)
};

const nl_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles bekijken`)
};

const pl_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wszystko`)
};

const pt_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver tudo`)
};

const ru_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать всё`)
};

const sv_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa allt`)
};

const tr_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümünü gör`)
};

const zh_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看全部`)
};

const ja_mod_capsule_see_all = /** @type {(inputs: Mod_Capsule_See_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて表示`)
};

/**
* | output |
* | --- |
* | "See all" |
*
* @param {Mod_Capsule_See_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_capsule_see_all = /** @type {((inputs?: Mod_Capsule_See_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Capsule_See_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_capsule_see_all(inputs)
	if (locale === "de") return de_mod_capsule_see_all(inputs)
	if (locale === "fr") return fr_mod_capsule_see_all(inputs)
	if (locale === "it") return it_mod_capsule_see_all(inputs)
	if (locale === "nl") return nl_mod_capsule_see_all(inputs)
	if (locale === "pl") return pl_mod_capsule_see_all(inputs)
	if (locale === "pt") return pt_mod_capsule_see_all(inputs)
	if (locale === "ru") return ru_mod_capsule_see_all(inputs)
	if (locale === "sv") return sv_mod_capsule_see_all(inputs)
	if (locale === "tr") return tr_mod_capsule_see_all(inputs)
	if (locale === "zh") return zh_mod_capsule_see_all(inputs)
	if (locale === "ja") return ja_mod_capsule_see_all(inputs)
	return en_mod_capsule_see_all(inputs)
});
