/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reports_TitleInputs */

const en_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reports`)
};

const es_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes`)
};

const de_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldungen`)
};

const fr_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalements`)
};

const it_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazioni`)
};

const nl_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen`)
};

const pl_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia`)
};

const pt_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denúncias`)
};

const ru_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жалобы`)
};

const sv_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälningar`)
};

const tr_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyetler`)
};

const zh_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报`)
};

const ja_ranger_reports_title = /** @type {(inputs: Ranger_Reports_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告`)
};

/**
* | output |
* | --- |
* | "Reports" |
*
* @param {Ranger_Reports_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reports_title = /** @type {((inputs?: Ranger_Reports_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reports_title(inputs)
	if (locale === "de") return de_ranger_reports_title(inputs)
	if (locale === "fr") return fr_ranger_reports_title(inputs)
	if (locale === "it") return it_ranger_reports_title(inputs)
	if (locale === "nl") return nl_ranger_reports_title(inputs)
	if (locale === "pl") return pl_ranger_reports_title(inputs)
	if (locale === "pt") return pt_ranger_reports_title(inputs)
	if (locale === "ru") return ru_ranger_reports_title(inputs)
	if (locale === "sv") return sv_ranger_reports_title(inputs)
	if (locale === "tr") return tr_ranger_reports_title(inputs)
	if (locale === "zh") return zh_ranger_reports_title(inputs)
	if (locale === "ja") return ja_ranger_reports_title(inputs)
	return en_ranger_reports_title(inputs)
});
