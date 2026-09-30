/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Audit_Empty_TitleInputs */

const en_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No entries`)
};

const es_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin entradas`)
};

const de_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Einträge`)
};

const fr_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune entrée`)
};

const it_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna voce`)
};

const nl_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen regels`)
};

const pl_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak wpisów`)
};

const pt_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma entrada`)
};

const ru_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Записей нет`)
};

const sv_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga poster`)
};

const tr_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt yok`)
};

const zh_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有记录`)
};

const ja_ranger_audit_empty_title = /** @type {(inputs: Ranger_Audit_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`記録はありません`)
};

/**
* | output |
* | --- |
* | "No entries" |
*
* @param {Ranger_Audit_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_audit_empty_title = /** @type {((inputs?: Ranger_Audit_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Audit_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_audit_empty_title(inputs)
	if (locale === "de") return de_ranger_audit_empty_title(inputs)
	if (locale === "fr") return fr_ranger_audit_empty_title(inputs)
	if (locale === "it") return it_ranger_audit_empty_title(inputs)
	if (locale === "nl") return nl_ranger_audit_empty_title(inputs)
	if (locale === "pl") return pl_ranger_audit_empty_title(inputs)
	if (locale === "pt") return pt_ranger_audit_empty_title(inputs)
	if (locale === "ru") return ru_ranger_audit_empty_title(inputs)
	if (locale === "sv") return sv_ranger_audit_empty_title(inputs)
	if (locale === "tr") return tr_ranger_audit_empty_title(inputs)
	if (locale === "zh") return zh_ranger_audit_empty_title(inputs)
	if (locale === "ja") return ja_ranger_audit_empty_title(inputs)
	return en_ranger_audit_empty_title(inputs)
});
