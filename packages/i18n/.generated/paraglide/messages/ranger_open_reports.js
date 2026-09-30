/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Open_ReportsInputs */

const en_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All reports`)
};

const es_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los reportes`)
};

const de_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Meldungen`)
};

const fr_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les signalements`)
};

const it_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le segnalazioni`)
};

const nl_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle meldingen`)
};

const pl_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie zgłoszenia`)
};

const pt_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as denúncias`)
};

const ru_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все жалобы`)
};

const sv_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla anmälningar`)
};

const tr_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm şikâyetler`)
};

const zh_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有举报`)
};

const ja_ranger_open_reports = /** @type {(inputs: Ranger_Open_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての報告`)
};

/**
* | output |
* | --- |
* | "All reports" |
*
* @param {Ranger_Open_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_open_reports = /** @type {((inputs?: Ranger_Open_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Open_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_open_reports(inputs)
	if (locale === "de") return de_ranger_open_reports(inputs)
	if (locale === "fr") return fr_ranger_open_reports(inputs)
	if (locale === "it") return it_ranger_open_reports(inputs)
	if (locale === "nl") return nl_ranger_open_reports(inputs)
	if (locale === "pl") return pl_ranger_open_reports(inputs)
	if (locale === "pt") return pt_ranger_open_reports(inputs)
	if (locale === "ru") return ru_ranger_open_reports(inputs)
	if (locale === "sv") return sv_ranger_open_reports(inputs)
	if (locale === "tr") return tr_ranger_open_reports(inputs)
	if (locale === "zh") return zh_ranger_open_reports(inputs)
	if (locale === "ja") return ja_ranger_open_reports(inputs)
	return en_ranger_open_reports(inputs)
});
