/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_EmptyInputs */

const en_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No public kits yet.`)
};

const es_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay kits públicos.`)
};

const de_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine öffentlichen Kits.`)
};

const fr_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de kits publics.`)
};

const it_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun kit pubblico.`)
};

const nl_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen openbare kits.`)
};

const pl_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma jeszcze publicznych zestawów.`)
};

const pt_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há kits públicos.`)
};

const ru_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публичных наборов пока нет.`)
};

const sv_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga offentliga kit än.`)
};

const tr_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz herkese açık kit yok.`)
};

const zh_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有公开合集。`)
};

const ja_admin_kit_picks_empty = /** @type {(inputs: Admin_Kit_Picks_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開キットはまだありません。`)
};

/**
* | output |
* | --- |
* | "No public kits yet." |
*
* @param {Admin_Kit_Picks_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_empty = /** @type {((inputs?: Admin_Kit_Picks_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_empty(inputs)
	if (locale === "de") return de_admin_kit_picks_empty(inputs)
	if (locale === "fr") return fr_admin_kit_picks_empty(inputs)
	if (locale === "it") return it_admin_kit_picks_empty(inputs)
	if (locale === "nl") return nl_admin_kit_picks_empty(inputs)
	if (locale === "pl") return pl_admin_kit_picks_empty(inputs)
	if (locale === "pt") return pt_admin_kit_picks_empty(inputs)
	if (locale === "ru") return ru_admin_kit_picks_empty(inputs)
	if (locale === "sv") return sv_admin_kit_picks_empty(inputs)
	if (locale === "tr") return tr_admin_kit_picks_empty(inputs)
	if (locale === "zh") return zh_admin_kit_picks_empty(inputs)
	if (locale === "ja") return ja_admin_kit_picks_empty(inputs)
	return en_admin_kit_picks_empty(inputs)
});
