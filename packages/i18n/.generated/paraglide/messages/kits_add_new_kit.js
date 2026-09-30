/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Add_New_KitInputs */

const en_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New kit with this mod`)
};

const es_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo kit con este mod`)
};

const de_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Kit mit diesem Mod`)
};

const fr_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau kit avec ce mod`)
};

const it_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo kit con questa mod`)
};

const nl_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe kit met deze mod`)
};

const pl_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy zestaw z tym modem`)
};

const pt_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo kit com este mod`)
};

const ru_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый набор с этим модом`)
};

const sv_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt kit med den här modden`)
};

const tr_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modla yeni kit`)
};

const zh_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用这个模组新建套装`)
};

const ja_kits_add_new_kit = /** @type {(inputs: Kits_Add_New_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD で新しいキット`)
};

/**
* | output |
* | --- |
* | "New kit with this mod" |
*
* @param {Kits_Add_New_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_new_kit = /** @type {((inputs?: Kits_Add_New_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_New_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_new_kit(inputs)
	if (locale === "de") return de_kits_add_new_kit(inputs)
	if (locale === "fr") return fr_kits_add_new_kit(inputs)
	if (locale === "it") return it_kits_add_new_kit(inputs)
	if (locale === "nl") return nl_kits_add_new_kit(inputs)
	if (locale === "pl") return pl_kits_add_new_kit(inputs)
	if (locale === "pt") return pt_kits_add_new_kit(inputs)
	if (locale === "ru") return ru_kits_add_new_kit(inputs)
	if (locale === "sv") return sv_kits_add_new_kit(inputs)
	if (locale === "tr") return tr_kits_add_new_kit(inputs)
	if (locale === "zh") return zh_kits_add_new_kit(inputs)
	if (locale === "ja") return ja_kits_add_new_kit(inputs)
	return en_kits_add_new_kit(inputs)
});
