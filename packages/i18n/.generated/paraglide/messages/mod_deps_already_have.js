/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Deps_Already_HaveInputs */

const en_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I already have them`)
};

const es_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya los tengo`)
};

const de_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Habe ich schon`)
};

const fr_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je les ai déjà`)
};

const it_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le ho già`)
};

const nl_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heb ik al`)
};

const pl_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Już je mam`)
};

const pt_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já tenho`)
};

const ru_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Уже есть`)
};

const sv_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag har dem redan`)
};

const tr_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaten bende var`)
};

const zh_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我已经有了`)
};

const ja_mod_deps_already_have = /** @type {(inputs: Mod_Deps_Already_HaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`もう持っている`)
};

/**
* | output |
* | --- |
* | "I already have them" |
*
* @param {Mod_Deps_Already_HaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_deps_already_have = /** @type {((inputs?: Mod_Deps_Already_HaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Deps_Already_HaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_deps_already_have(inputs)
	if (locale === "de") return de_mod_deps_already_have(inputs)
	if (locale === "fr") return fr_mod_deps_already_have(inputs)
	if (locale === "it") return it_mod_deps_already_have(inputs)
	if (locale === "nl") return nl_mod_deps_already_have(inputs)
	if (locale === "pl") return pl_mod_deps_already_have(inputs)
	if (locale === "pt") return pt_mod_deps_already_have(inputs)
	if (locale === "ru") return ru_mod_deps_already_have(inputs)
	if (locale === "sv") return sv_mod_deps_already_have(inputs)
	if (locale === "tr") return tr_mod_deps_already_have(inputs)
	if (locale === "zh") return zh_mod_deps_already_have(inputs)
	if (locale === "ja") return ja_mod_deps_already_have(inputs)
	return en_mod_deps_already_have(inputs)
});
