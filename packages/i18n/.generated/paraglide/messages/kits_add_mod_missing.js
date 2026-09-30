/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Add_Mod_MissingInputs */

const en_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This mod isn’t available anymore.`)
};

const es_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod ya no está disponible.`)
};

const de_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Mod ist nicht mehr verfügbar.`)
};

const fr_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mod n’est plus disponible.`)
};

const it_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa mod non è più disponibile.`)
};

const nl_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod is niet meer beschikbaar.`)
};

const pl_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod nie jest już dostępny.`)
};

const pt_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod não está mais disponível.`)
};

const ru_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот мод больше недоступен.`)
};

const sv_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här modden är inte längre tillgänglig.`)
};

const tr_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod artık mevcut değil.`)
};

const zh_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个模组已不可用。`)
};

const ja_kits_add_mod_missing = /** @type {(inputs: Kits_Add_Mod_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD はもう利用できません。`)
};

/**
* | output |
* | --- |
* | "This mod isn’t available anymore." |
*
* @param {Kits_Add_Mod_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_mod_missing = /** @type {((inputs?: Kits_Add_Mod_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_Mod_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_mod_missing(inputs)
	if (locale === "de") return de_kits_add_mod_missing(inputs)
	if (locale === "fr") return fr_kits_add_mod_missing(inputs)
	if (locale === "it") return it_kits_add_mod_missing(inputs)
	if (locale === "nl") return nl_kits_add_mod_missing(inputs)
	if (locale === "pl") return pl_kits_add_mod_missing(inputs)
	if (locale === "pt") return pt_kits_add_mod_missing(inputs)
	if (locale === "ru") return ru_kits_add_mod_missing(inputs)
	if (locale === "sv") return sv_kits_add_mod_missing(inputs)
	if (locale === "tr") return tr_kits_add_mod_missing(inputs)
	if (locale === "zh") return zh_kits_add_mod_missing(inputs)
	if (locale === "ja") return ja_kits_add_mod_missing(inputs)
	return en_kits_add_mod_missing(inputs)
});
