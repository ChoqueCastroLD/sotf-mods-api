/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Users_Sort_ReportsInputs */

const en_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most reports`)
};

const es_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más reportes`)
};

const de_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Meldungen`)
};

const fr_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus de signalements`)
};

const it_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più segnalazioni`)
};

const nl_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meeste meldingen`)
};

const pl_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najwięcej zgłoszeń`)
};

const pt_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais denúncias`)
};

const ru_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше жалоб`)
};

const sv_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flest anmälningar`)
};

const tr_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok şikâyet`)
};

const zh_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报最多`)
};

const ja_ranger_users_sort_reports = /** @type {(inputs: Ranger_Users_Sort_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告が多い順`)
};

/**
* | output |
* | --- |
* | "Most reports" |
*
* @param {Ranger_Users_Sort_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_sort_reports = /** @type {((inputs?: Ranger_Users_Sort_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Sort_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_sort_reports(inputs)
	if (locale === "de") return de_ranger_users_sort_reports(inputs)
	if (locale === "fr") return fr_ranger_users_sort_reports(inputs)
	if (locale === "it") return it_ranger_users_sort_reports(inputs)
	if (locale === "nl") return nl_ranger_users_sort_reports(inputs)
	if (locale === "pl") return pl_ranger_users_sort_reports(inputs)
	if (locale === "pt") return pt_ranger_users_sort_reports(inputs)
	if (locale === "ru") return ru_ranger_users_sort_reports(inputs)
	if (locale === "sv") return sv_ranger_users_sort_reports(inputs)
	if (locale === "tr") return tr_ranger_users_sort_reports(inputs)
	if (locale === "zh") return zh_ranger_users_sort_reports(inputs)
	if (locale === "ja") return ja_ranger_users_sort_reports(inputs)
	return en_ranger_users_sort_reports(inputs)
});
