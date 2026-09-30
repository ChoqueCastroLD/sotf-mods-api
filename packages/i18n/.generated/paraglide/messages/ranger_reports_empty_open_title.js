/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_Empty_Open_TitleInputs */

const en_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No open reports`)
};

const es_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay reportes abiertos`)
};

const de_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine offenen Meldungen`)
};

const fr_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun signalement ouvert`)
};

const it_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna segnalazione aperta`)
};

const nl_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen open meldingen`)
};

const pl_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak otwartych zgłoszeń`)
};

const pt_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma denúncia aberta`)
};

const ru_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открытых жалоб нет`)
};

const sv_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga öppna anmälningar`)
};

const tr_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık şikâyet yok`)
};

const zh_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有未处理的举报`)
};

const ja_ranger_reports_empty_open_title = /** @type {(inputs: Ranger_Reports_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未対応の報告はありません`)
};

/**
* | output |
* | --- |
* | "No open reports" |
*
* @param {Ranger_Reports_Empty_Open_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_empty_open_title = /** @type {((inputs?: Ranger_Reports_Empty_Open_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Empty_Open_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_empty_open_title(inputs)
	if (locale === "de") return de_ranger_reports_empty_open_title(inputs)
	if (locale === "fr") return fr_ranger_reports_empty_open_title(inputs)
	if (locale === "it") return it_ranger_reports_empty_open_title(inputs)
	if (locale === "nl") return nl_ranger_reports_empty_open_title(inputs)
	if (locale === "pl") return pl_ranger_reports_empty_open_title(inputs)
	if (locale === "pt") return pt_ranger_reports_empty_open_title(inputs)
	if (locale === "ru") return ru_ranger_reports_empty_open_title(inputs)
	if (locale === "sv") return sv_ranger_reports_empty_open_title(inputs)
	if (locale === "tr") return tr_ranger_reports_empty_open_title(inputs)
	if (locale === "zh") return zh_ranger_reports_empty_open_title(inputs)
	if (locale === "ja") return ja_ranger_reports_empty_open_title(inputs)
	return en_ranger_reports_empty_open_title(inputs)
});
