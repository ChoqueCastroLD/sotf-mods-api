/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Report_TitleInputs */

const en_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Report ${i?.name}`)
};

const es_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Denunciar ${i?.name}`)
};

const de_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} melden`)
};

const fr_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Signaler ${i?.name}`)
};

const it_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segnala ${i?.name}`)
};

const nl_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} rapporteren`)
};

const pl_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zgłoś ${i?.name}`)
};

const pt_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Denunciar ${i?.name}`)
};

const ru_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Жалоба на ${i?.name}`)
};

const sv_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anmäl ${i?.name}`)
};

const tr_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için şikâyet`)
};

const zh_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`举报 ${i?.name}`)
};

const ja_mod_report_title = /** @type {(inputs: Mod_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を通報`)
};

/**
* | output |
* | --- |
* | "Report {name}" |
*
* @param {Mod_Report_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_title = /** @type {((inputs: Mod_Report_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_title(inputs)
	if (locale === "de") return de_mod_report_title(inputs)
	if (locale === "fr") return fr_mod_report_title(inputs)
	if (locale === "it") return it_mod_report_title(inputs)
	if (locale === "nl") return nl_mod_report_title(inputs)
	if (locale === "pl") return pl_mod_report_title(inputs)
	if (locale === "pt") return pt_mod_report_title(inputs)
	if (locale === "ru") return ru_mod_report_title(inputs)
	if (locale === "sv") return sv_mod_report_title(inputs)
	if (locale === "tr") return tr_mod_report_title(inputs)
	if (locale === "zh") return zh_mod_report_title(inputs)
	if (locale === "ja") return ja_mod_report_title(inputs)
	return en_mod_report_title(inputs)
});
