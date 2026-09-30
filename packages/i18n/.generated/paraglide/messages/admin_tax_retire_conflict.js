/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Retire_ConflictInputs */

const en_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Some live mods still use it. Recategorize them first.`)
};

const es_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algunos mods activos aún la usan. Recategorízalos antes.`)
};

const de_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einige aktive Mods nutzen sie noch. Kategorisiere sie zuerst um.`)
};

const fr_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods actifs l’utilisent encore. Recatégorisez-les d’abord.`)
};

const it_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alcune mod attive la usano ancora. Ricategorizzale prima.`)
};

const nl_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sommige actieve mods gebruiken haar nog. Deel die eerst opnieuw in.`)
};

const pl_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niektóre aktywne mody wciąż jej używają. Najpierw je przenieś.`)
};

const pt_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguns mods ativos ainda a usam. Recategorize-os antes.`)
};

const ru_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Её ещё используют активные моды. Сначала перенесите их.`)
};

const sv_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Några aktiva moddar använder den fortfarande. Flytta dem först.`)
};

const tr_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bazı aktif modlar hâlâ bunu kullanıyor. Önce onları yeniden kategorilendir.`)
};

const zh_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仍有活跃模组在使用它。请先为它们重新分类。`)
};

const ja_admin_tax_retire_conflict = /** @type {(inputs: Admin_Tax_Retire_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ使っている公開中の MOD があります。先に再分類してください。`)
};

/**
* | output |
* | --- |
* | "Some live mods still use it. Recategorize them first." |
*
* @param {Admin_Tax_Retire_ConflictInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_retire_conflict = /** @type {((inputs?: Admin_Tax_Retire_ConflictInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Retire_ConflictInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_retire_conflict(inputs)
	if (locale === "de") return de_admin_tax_retire_conflict(inputs)
	if (locale === "fr") return fr_admin_tax_retire_conflict(inputs)
	if (locale === "it") return it_admin_tax_retire_conflict(inputs)
	if (locale === "nl") return nl_admin_tax_retire_conflict(inputs)
	if (locale === "pl") return pl_admin_tax_retire_conflict(inputs)
	if (locale === "pt") return pt_admin_tax_retire_conflict(inputs)
	if (locale === "ru") return ru_admin_tax_retire_conflict(inputs)
	if (locale === "sv") return sv_admin_tax_retire_conflict(inputs)
	if (locale === "tr") return tr_admin_tax_retire_conflict(inputs)
	if (locale === "zh") return zh_admin_tax_retire_conflict(inputs)
	if (locale === "ja") return ja_admin_tax_retire_conflict(inputs)
	return en_admin_tax_retire_conflict(inputs)
});
