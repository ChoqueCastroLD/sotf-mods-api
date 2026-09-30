/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Note_LabelInputs */

const en_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolution note`)
};

const es_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota de resolución`)
};

const de_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notiz zur Lösung`)
};

const fr_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note de résolution`)
};

const it_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota di risoluzione`)
};

const nl_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notitie bij de afhandeling`)
};

const pl_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatka do rozwiązania`)
};

const pt_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota da resolução`)
};

const ru_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка к решению`)
};

const sv_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning om lösningen`)
};

const tr_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüm notu`)
};

const zh_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处理备注`)
};

const ja_ranger_report_note_label = /** @type {(inputs: Ranger_Report_Note_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応メモ`)
};

/**
* | output |
* | --- |
* | "Resolution note" |
*
* @param {Ranger_Report_Note_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_note_label = /** @type {((inputs?: Ranger_Report_Note_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Note_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_note_label(inputs)
	if (locale === "de") return de_ranger_report_note_label(inputs)
	if (locale === "fr") return fr_ranger_report_note_label(inputs)
	if (locale === "it") return it_ranger_report_note_label(inputs)
	if (locale === "nl") return nl_ranger_report_note_label(inputs)
	if (locale === "pl") return pl_ranger_report_note_label(inputs)
	if (locale === "pt") return pt_ranger_report_note_label(inputs)
	if (locale === "ru") return ru_ranger_report_note_label(inputs)
	if (locale === "sv") return sv_ranger_report_note_label(inputs)
	if (locale === "tr") return tr_ranger_report_note_label(inputs)
	if (locale === "zh") return zh_ranger_report_note_label(inputs)
	if (locale === "ja") return ja_ranger_report_note_label(inputs)
	return en_ranger_report_note_label(inputs)
});
