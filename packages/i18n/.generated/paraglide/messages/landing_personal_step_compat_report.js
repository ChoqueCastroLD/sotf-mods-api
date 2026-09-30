/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Step_Compat_ReportInputs */

const en_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report whether a mod worked`)
};

const es_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuenta si un mod te funcionó`)
};

const de_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden, ob ein Mod funktioniert hat`)
};

const fr_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dire si un mod a fonctionné`)
};

const it_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala se una mod ha funzionato`)
};

const nl_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meld of een mod werkte`)
};

const pl_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś, czy mod zadziałał`)
};

const pt_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conte se um mod funcionou`)
};

const ru_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщить, заработал ли мод`)
};

const sv_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapportera om en modd fungerade`)
};

const tr_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir modun çalışıp çalışmadığını bildir`)
};

const zh_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`报告模组是否可用`)
};

const ja_landing_personal_step_compat_report = /** @type {(inputs: Landing_Personal_Step_Compat_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODが動いたか報告`)
};

/**
* | output |
* | --- |
* | "Report whether a mod worked" |
*
* @param {Landing_Personal_Step_Compat_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_step_compat_report = /** @type {((inputs?: Landing_Personal_Step_Compat_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_Compat_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_step_compat_report(inputs)
	if (locale === "de") return de_landing_personal_step_compat_report(inputs)
	if (locale === "fr") return fr_landing_personal_step_compat_report(inputs)
	if (locale === "it") return it_landing_personal_step_compat_report(inputs)
	if (locale === "nl") return nl_landing_personal_step_compat_report(inputs)
	if (locale === "pl") return pl_landing_personal_step_compat_report(inputs)
	if (locale === "pt") return pt_landing_personal_step_compat_report(inputs)
	if (locale === "ru") return ru_landing_personal_step_compat_report(inputs)
	if (locale === "sv") return sv_landing_personal_step_compat_report(inputs)
	if (locale === "tr") return tr_landing_personal_step_compat_report(inputs)
	if (locale === "zh") return zh_landing_personal_step_compat_report(inputs)
	if (locale === "ja") return ja_landing_personal_step_compat_report(inputs)
	return en_landing_personal_step_compat_report(inputs)
});
