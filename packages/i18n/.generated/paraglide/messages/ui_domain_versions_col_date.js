/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Versions_Col_DateInputs */

const en_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Released`)
};

const es_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicada`)
};

const de_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorti le`)
};

const it_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uscita`)
};

const nl_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitgebracht`)
};

const pl_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydany`)
};

const pt_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lançado em`)
};

const ru_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выход`)
};

const sv_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släppt`)
};

const tr_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış`)
};

const zh_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布日期`)
};

const ja_ui_domain_versions_col_date = /** @type {(inputs: Ui_Domain_Versions_Col_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリース日`)
};

/**
* | output |
* | --- |
* | "Released" |
*
* @param {Ui_Domain_Versions_Col_DateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_versions_col_date = /** @type {((inputs?: Ui_Domain_Versions_Col_DateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Versions_Col_DateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_versions_col_date(inputs)
	if (locale === "de") return de_ui_domain_versions_col_date(inputs)
	if (locale === "fr") return fr_ui_domain_versions_col_date(inputs)
	if (locale === "it") return it_ui_domain_versions_col_date(inputs)
	if (locale === "nl") return nl_ui_domain_versions_col_date(inputs)
	if (locale === "pl") return pl_ui_domain_versions_col_date(inputs)
	if (locale === "pt") return pt_ui_domain_versions_col_date(inputs)
	if (locale === "ru") return ru_ui_domain_versions_col_date(inputs)
	if (locale === "sv") return sv_ui_domain_versions_col_date(inputs)
	if (locale === "tr") return tr_ui_domain_versions_col_date(inputs)
	if (locale === "zh") return zh_ui_domain_versions_col_date(inputs)
	if (locale === "ja") return ja_ui_domain_versions_col_date(inputs)
	return en_ui_domain_versions_col_date(inputs)
});
