/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Empty_TextInputs */

const en_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No report matches this filter.`)
};

const es_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún reporte coincide con este filtro.`)
};

const de_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Meldung passt zu diesem Filter.`)
};

const fr_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun signalement ne correspond à ce filtre.`)
};

const it_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna segnalazione corrisponde a questo filtro.`)
};

const nl_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen melding past bij dit filter.`)
};

const pl_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żadne zgłoszenie nie pasuje do tego filtra.`)
};

const pt_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma denúncia corresponde a este filtro.`)
};

const ru_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ни одна жалоба не подходит под этот фильтр.`)
};

const sv_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen anmälan matchar filtret.`)
};

const tr_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu filtreye uyan şikâyet yok.`)
};

const zh_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合此筛选条件的举报。`)
};

const ja_ranger_reports_empty_text = /** @type {(inputs: Ranger_Reports_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このフィルターに一致する報告はありません。`)
};

/**
* | output |
* | --- |
* | "No report matches this filter." |
*
* @param {Ranger_Reports_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_empty_text = /** @type {((inputs?: Ranger_Reports_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_empty_text(inputs)
	if (locale === "de") return de_ranger_reports_empty_text(inputs)
	if (locale === "fr") return fr_ranger_reports_empty_text(inputs)
	if (locale === "it") return it_ranger_reports_empty_text(inputs)
	if (locale === "nl") return nl_ranger_reports_empty_text(inputs)
	if (locale === "pl") return pl_ranger_reports_empty_text(inputs)
	if (locale === "pt") return pt_ranger_reports_empty_text(inputs)
	if (locale === "ru") return ru_ranger_reports_empty_text(inputs)
	if (locale === "sv") return sv_ranger_reports_empty_text(inputs)
	if (locale === "tr") return tr_ranger_reports_empty_text(inputs)
	if (locale === "zh") return zh_ranger_reports_empty_text(inputs)
	if (locale === "ja") return ja_ranger_reports_empty_text(inputs)
	return en_ranger_reports_empty_text(inputs)
});
