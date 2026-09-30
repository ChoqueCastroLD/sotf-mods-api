/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Hide_LabelInputs */

const en_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide the content`)
};

const es_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar el contenido`)
};

const de_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalt ausblenden`)
};

const fr_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer le contenu`)
};

const it_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi il contenuto`)
};

const nl_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De inhoud verbergen`)
};

const pl_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj treść`)
};

const pt_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar o conteúdo`)
};

const ru_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть содержимое`)
};

const sv_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj innehållet`)
};

const tr_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçeriği gizle`)
};

const zh_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏内容`)
};

const ja_ranger_report_hide_label = /** @type {(inputs: Ranger_Report_Hide_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンテンツを非表示にする`)
};

/**
* | output |
* | --- |
* | "Hide the content" |
*
* @param {Ranger_Report_Hide_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_hide_label = /** @type {((inputs?: Ranger_Report_Hide_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Hide_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_hide_label(inputs)
	if (locale === "de") return de_ranger_report_hide_label(inputs)
	if (locale === "fr") return fr_ranger_report_hide_label(inputs)
	if (locale === "it") return it_ranger_report_hide_label(inputs)
	if (locale === "nl") return nl_ranger_report_hide_label(inputs)
	if (locale === "pl") return pl_ranger_report_hide_label(inputs)
	if (locale === "pt") return pt_ranger_report_hide_label(inputs)
	if (locale === "ru") return ru_ranger_report_hide_label(inputs)
	if (locale === "sv") return sv_ranger_report_hide_label(inputs)
	if (locale === "tr") return tr_ranger_report_hide_label(inputs)
	if (locale === "zh") return zh_ranger_report_hide_label(inputs)
	if (locale === "ja") return ja_ranger_report_hide_label(inputs)
	return en_ranger_report_hide_label(inputs)
});
