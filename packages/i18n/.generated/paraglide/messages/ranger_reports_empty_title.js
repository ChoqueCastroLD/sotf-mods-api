/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Empty_TitleInputs */

const en_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No reports here`)
};

const es_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay reportes aquí`)
};

const de_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier gibt es keine Meldungen`)
};

const fr_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun signalement ici`)
};

const it_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna segnalazione qui`)
};

const nl_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen meldingen hier`)
};

const pl_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak zgłoszeń`)
};

const pt_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma denúncia aqui`)
};

const ru_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь нет жалоб`)
};

const sv_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga anmälningar här`)
};

const tr_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada şikâyet yok`)
};

const zh_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里没有举报`)
};

const ja_ranger_reports_empty_title = /** @type {(inputs: Ranger_Reports_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告はありません`)
};

/**
* | output |
* | --- |
* | "No reports here" |
*
* @param {Ranger_Reports_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_empty_title = /** @type {((inputs?: Ranger_Reports_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_empty_title(inputs)
	if (locale === "de") return de_ranger_reports_empty_title(inputs)
	if (locale === "fr") return fr_ranger_reports_empty_title(inputs)
	if (locale === "it") return it_ranger_reports_empty_title(inputs)
	if (locale === "nl") return nl_ranger_reports_empty_title(inputs)
	if (locale === "pl") return pl_ranger_reports_empty_title(inputs)
	if (locale === "pt") return pt_ranger_reports_empty_title(inputs)
	if (locale === "ru") return ru_ranger_reports_empty_title(inputs)
	if (locale === "sv") return sv_ranger_reports_empty_title(inputs)
	if (locale === "tr") return tr_ranger_reports_empty_title(inputs)
	if (locale === "zh") return zh_ranger_reports_empty_title(inputs)
	if (locale === "ja") return ja_ranger_reports_empty_title(inputs)
	return en_ranger_reports_empty_title(inputs)
});
