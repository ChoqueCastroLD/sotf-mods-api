/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown> }} Me_Report_TitleInputs */

const en_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Did ${i?.mod} work?`)
};

const es_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Funcionó ${i?.mod}?`)
};

const de_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hat ${i?.mod} funktioniert?`)
};

const fr_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} a-t-il fonctionné ?`)
};

const it_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ha funzionato?`)
};

const nl_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Werkte ${i?.mod}?`)
};

const pl_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Czy ${i?.mod} zadziałał?`)
};

const pt_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} funcionou?`)
};

const ru_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} заработал?`)
};

const sv_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fungerade ${i?.mod}?`)
};

const tr_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} çalıştı mı?`)
};

const zh_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 能用吗？`)
};

const ja_me_report_title = /** @type {(inputs: Me_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} は動きましたか？`)
};

/**
* | output |
* | --- |
* | "Did {mod} work?" |
*
* @param {Me_Report_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_title = /** @type {((inputs: Me_Report_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_title(inputs)
	if (locale === "de") return de_me_report_title(inputs)
	if (locale === "fr") return fr_me_report_title(inputs)
	if (locale === "it") return it_me_report_title(inputs)
	if (locale === "nl") return nl_me_report_title(inputs)
	if (locale === "pl") return pl_me_report_title(inputs)
	if (locale === "pt") return pt_me_report_title(inputs)
	if (locale === "ru") return ru_me_report_title(inputs)
	if (locale === "sv") return sv_me_report_title(inputs)
	if (locale === "tr") return tr_me_report_title(inputs)
	if (locale === "zh") return zh_me_report_title(inputs)
	if (locale === "ja") return ja_me_report_title(inputs)
	return en_me_report_title(inputs)
});
