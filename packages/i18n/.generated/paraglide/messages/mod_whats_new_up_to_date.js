/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Mod_Whats_New_Up_To_DateInputs */

const en_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You have the latest version (v${i?.version}).`)
};

const es_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tienes la última versión (v${i?.version}).`)
};

const de_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du hast die neueste Version (v${i?.version}).`)
};

const fr_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vous avez la dernière version (v${i?.version}).`)
};

const it_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hai l’ultima versione (v${i?.version}).`)
};

const nl_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Je hebt de nieuwste versie (v${i?.version}).`)
};

const pl_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Masz najnowszą wersję (v${i?.version}).`)
};

const pt_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Você tem a versão mais recente (v${i?.version}).`)
};

const ru_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`У вас последняя версия (v${i?.version}).`)
};

const sv_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Du har den senaste versionen (v${i?.version}).`)
};

const tr_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En yeni sürüme sahipsin (v${i?.version}).`)
};

const zh_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你已有最新版本（v${i?.version}）。`)
};

const ja_mod_whats_new_up_to_date = /** @type {(inputs: Mod_Whats_New_Up_To_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最新バージョン（v${i?.version}）を持っています。`)
};

/**
* | output |
* | --- |
* | "You have the latest version (v{version})." |
*
* @param {Mod_Whats_New_Up_To_DateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_whats_new_up_to_date = /** @type {((inputs: Mod_Whats_New_Up_To_DateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Whats_New_Up_To_DateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_whats_new_up_to_date(inputs)
	if (locale === "de") return de_mod_whats_new_up_to_date(inputs)
	if (locale === "fr") return fr_mod_whats_new_up_to_date(inputs)
	if (locale === "it") return it_mod_whats_new_up_to_date(inputs)
	if (locale === "nl") return nl_mod_whats_new_up_to_date(inputs)
	if (locale === "pl") return pl_mod_whats_new_up_to_date(inputs)
	if (locale === "pt") return pt_mod_whats_new_up_to_date(inputs)
	if (locale === "ru") return ru_mod_whats_new_up_to_date(inputs)
	if (locale === "sv") return sv_mod_whats_new_up_to_date(inputs)
	if (locale === "tr") return tr_mod_whats_new_up_to_date(inputs)
	if (locale === "zh") return zh_mod_whats_new_up_to_date(inputs)
	if (locale === "ja") return ja_mod_whats_new_up_to_date(inputs)
	return en_mod_whats_new_up_to_date(inputs)
});
