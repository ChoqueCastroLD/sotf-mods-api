/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Field_Report_TextInputs */

const en_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A field report takes ten seconds and tells everyone whether this mod works on the current patch.`)
};

const es_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un reporte de campo lleva diez segundos y dice a todos si este mod funciona en el parche actual.`)
};

const de_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Feldbericht dauert zehn Sekunden und zeigt allen, ob dieser Mod mit dem aktuellen Patch läuft.`)
};

const fr_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un rapport de terrain prend dix secondes et dit à tous si ce mod fonctionne sur le patch actuel.`)
};

const it_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un rapporto sul campo richiede dieci secondi e dice a tutti se questa mod funziona con la patch attuale.`)
};

const nl_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een veldrapport kost tien seconden en vertelt iedereen of deze mod op de huidige patch werkt.`)
};

const pl_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport z terenu zajmuje dziesięć sekund i mówi wszystkim, czy ten mod działa z obecną łatką.`)
};

const pt_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um relatório de campo leva dez segundos e mostra a todos se este mod funciona no patch atual.`)
};

const ru_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой отчёт занимает десять секунд и показывает всем, работает ли мод на текущем патче.`)
};

const sv_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En fältrapport tar tio sekunder och visar alla om moden fungerar i den aktuella patchen.`)
};

const tr_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir saha raporu on saniye sürer ve herkese bu modun güncel yamada çalışıp çalışmadığını gösterir.`)
};

const zh_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实地报告只需十秒，就能让大家知道此模组在当前补丁下是否可用。`)
};

const ja_mod_field_report_text = /** @type {(inputs: Mod_Field_Report_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポートは 10 秒。この MOD が現在のパッチで動くかどうかをみんなに伝えられます。`)
};

/**
* | output |
* | --- |
* | "A field report takes ten seconds and tells everyone whether this mod works on the current patch." |
*
* @param {Mod_Field_Report_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_field_report_text = /** @type {((inputs?: Mod_Field_Report_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Field_Report_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_field_report_text(inputs)
	if (locale === "de") return de_mod_field_report_text(inputs)
	if (locale === "fr") return fr_mod_field_report_text(inputs)
	if (locale === "it") return it_mod_field_report_text(inputs)
	if (locale === "nl") return nl_mod_field_report_text(inputs)
	if (locale === "pl") return pl_mod_field_report_text(inputs)
	if (locale === "pt") return pt_mod_field_report_text(inputs)
	if (locale === "ru") return ru_mod_field_report_text(inputs)
	if (locale === "sv") return sv_mod_field_report_text(inputs)
	if (locale === "tr") return tr_mod_field_report_text(inputs)
	if (locale === "zh") return zh_mod_field_report_text(inputs)
	if (locale === "ja") return ja_mod_field_report_text(inputs)
	return en_mod_field_report_text(inputs)
});
