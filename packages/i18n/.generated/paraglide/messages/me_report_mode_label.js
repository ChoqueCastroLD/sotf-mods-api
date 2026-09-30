/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_Mode_LabelInputs */

const en_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How you played`)
};

const es_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo jugaste`)
};

const de_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie du gespielt hast`)
};

const fr_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment vous avez joué`)
};

const it_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come hai giocato`)
};

const nl_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe je speelde`)
};

const pl_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak grałeś`)
};

const pt_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como você jogou`)
};

const ru_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как вы играли`)
};

const sv_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hur du spelade`)
};

const tr_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl oynadın`)
};

const zh_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游玩方式`)
};

const ja_me_report_mode_label = /** @type {(inputs: Me_Report_Mode_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイ方法`)
};

/**
* | output |
* | --- |
* | "How you played" |
*
* @param {Me_Report_Mode_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_mode_label = /** @type {((inputs?: Me_Report_Mode_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Mode_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_mode_label(inputs)
	if (locale === "de") return de_me_report_mode_label(inputs)
	if (locale === "fr") return fr_me_report_mode_label(inputs)
	if (locale === "it") return it_me_report_mode_label(inputs)
	if (locale === "nl") return nl_me_report_mode_label(inputs)
	if (locale === "pl") return pl_me_report_mode_label(inputs)
	if (locale === "pt") return pt_me_report_mode_label(inputs)
	if (locale === "ru") return ru_me_report_mode_label(inputs)
	if (locale === "sv") return sv_me_report_mode_label(inputs)
	if (locale === "tr") return tr_me_report_mode_label(inputs)
	if (locale === "zh") return zh_me_report_mode_label(inputs)
	if (locale === "ja") return ja_me_report_mode_label(inputs)
	return en_me_report_mode_label(inputs)
});
