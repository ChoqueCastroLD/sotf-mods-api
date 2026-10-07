/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Filtered_Empty_TitleInputs */

const en_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching reports`)
};

const es_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay reportes que coincidan`)
};

const de_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine passenden Meldungen`)
};

const fr_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun signalement ne correspond`)
};

const it_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna segnalazione corrisponde`)
};

const nl_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen overeenkomende meldingen`)
};

const pl_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak pasujących zgłoszeń`)
};

const pt_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma denúncia corresponde`)
};

const ru_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жалоб не найдено`)
};

const sv_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga matchande anmälningar`)
};

const tr_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşen şikâyet yok`)
};

const zh_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有符合条件的举报`)
};

const ja_ranger_reports_filtered_empty_title = /** @type {(inputs: Ranger_Reports_Filtered_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`該当する報告はありません`)
};

/**
* | output |
* | --- |
* | "No matching reports" |
*
* @param {Ranger_Reports_Filtered_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_filtered_empty_title = /** @type {((inputs?: Ranger_Reports_Filtered_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Filtered_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_filtered_empty_title(inputs)
	if (locale === "de") return de_ranger_reports_filtered_empty_title(inputs)
	if (locale === "fr") return fr_ranger_reports_filtered_empty_title(inputs)
	if (locale === "it") return it_ranger_reports_filtered_empty_title(inputs)
	if (locale === "nl") return nl_ranger_reports_filtered_empty_title(inputs)
	if (locale === "pl") return pl_ranger_reports_filtered_empty_title(inputs)
	if (locale === "pt") return pt_ranger_reports_filtered_empty_title(inputs)
	if (locale === "ru") return ru_ranger_reports_filtered_empty_title(inputs)
	if (locale === "sv") return sv_ranger_reports_filtered_empty_title(inputs)
	if (locale === "tr") return tr_ranger_reports_filtered_empty_title(inputs)
	if (locale === "zh") return zh_ranger_reports_filtered_empty_title(inputs)
	if (locale === "ja") return ja_ranger_reports_filtered_empty_title(inputs)
	return en_ranger_reports_filtered_empty_title(inputs)
});
