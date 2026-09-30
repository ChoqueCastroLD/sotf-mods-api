/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Reason_ReuploadInputs */

const en_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Re-upload of someone else’s work`)
};

const es_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resubida del trabajo de otra persona`)
};

const de_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reupload fremder Arbeit`)
};

const fr_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Republication du travail de quelqu’un d’autre`)
};

const it_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricaricamento del lavoro di un altro`)
};

const nl_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herupload van andermans werk`)
};

const pl_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponowne wrzucenie cudzej pracy`)
};

const pt_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reenvio do trabalho de outra pessoa`)
};

const ru_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перезалив чужой работы`)
};

const sv_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återpublicering av någon annans verk`)
};

const tr_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başkasının çalışmasının yeniden yüklenmesi`)
};

const zh_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`转载他人作品`)
};

const ja_mod_report_reason_reupload = /** @type {(inputs: Mod_Report_Reason_ReuploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他人の作品の無断再アップロード`)
};

/**
* | output |
* | --- |
* | "Re-upload of someone else’s work" |
*
* @param {Mod_Report_Reason_ReuploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_reason_reupload = /** @type {((inputs?: Mod_Report_Reason_ReuploadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_ReuploadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_reason_reupload(inputs)
	if (locale === "de") return de_mod_report_reason_reupload(inputs)
	if (locale === "fr") return fr_mod_report_reason_reupload(inputs)
	if (locale === "it") return it_mod_report_reason_reupload(inputs)
	if (locale === "nl") return nl_mod_report_reason_reupload(inputs)
	if (locale === "pl") return pl_mod_report_reason_reupload(inputs)
	if (locale === "pt") return pt_mod_report_reason_reupload(inputs)
	if (locale === "ru") return ru_mod_report_reason_reupload(inputs)
	if (locale === "sv") return sv_mod_report_reason_reupload(inputs)
	if (locale === "tr") return tr_mod_report_reason_reupload(inputs)
	if (locale === "zh") return zh_mod_report_reason_reupload(inputs)
	if (locale === "ja") return ja_mod_report_reason_reupload(inputs)
	return en_mod_report_reason_reupload(inputs)
});
