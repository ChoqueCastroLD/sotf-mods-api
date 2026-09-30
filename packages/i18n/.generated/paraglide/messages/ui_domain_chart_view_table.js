/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Chart_View_TableInputs */

const en_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View as table`)
};

const es_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver como tabla`)
};

const de_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als Tabelle anzeigen`)
};

const fr_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher sous forme de tableau`)
};

const it_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra come tabella`)
};

const nl_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als tabel bekijken`)
};

const pl_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż jako tabelę`)
};

const pt_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver como tabela`)
};

const ru_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать таблицей`)
};

const sv_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa som tabell`)
};

const tr_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tablo olarak göster`)
};

const zh_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以表格查看`)
};

const ja_ui_domain_chart_view_table = /** @type {(inputs: Ui_Domain_Chart_View_TableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表で表示`)
};

/**
* | output |
* | --- |
* | "View as table" |
*
* @param {Ui_Domain_Chart_View_TableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_chart_view_table = /** @type {((inputs?: Ui_Domain_Chart_View_TableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Chart_View_TableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_chart_view_table(inputs)
	if (locale === "de") return de_ui_domain_chart_view_table(inputs)
	if (locale === "fr") return fr_ui_domain_chart_view_table(inputs)
	if (locale === "it") return it_ui_domain_chart_view_table(inputs)
	if (locale === "nl") return nl_ui_domain_chart_view_table(inputs)
	if (locale === "pl") return pl_ui_domain_chart_view_table(inputs)
	if (locale === "pt") return pt_ui_domain_chart_view_table(inputs)
	if (locale === "ru") return ru_ui_domain_chart_view_table(inputs)
	if (locale === "sv") return sv_ui_domain_chart_view_table(inputs)
	if (locale === "tr") return tr_ui_domain_chart_view_table(inputs)
	if (locale === "zh") return zh_ui_domain_chart_view_table(inputs)
	if (locale === "ja") return ja_ui_domain_chart_view_table(inputs)
	return en_ui_domain_chart_view_table(inputs)
});
