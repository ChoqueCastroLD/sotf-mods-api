/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Me_Report_Note_HintInputs */

const en_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`Crashes, conflicts with other mods… up to ${max__number} characters.`)
};

const es_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`Cierres, conflictos con otros mods… hasta ${max__number} caracteres.`)
};

const de_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`Abstürze, Konflikte mit anderen Mods… bis zu ${max__number} Zeichen.`)
};

const fr_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`Plantages, conflits avec d’autres mods… jusqu’à ${max__number} caractères.`)
};

const it_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`Crash, conflitti con altre mod… fino a ${max__number} caratteri.`)
};

const nl_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`Crashes, conflicten met andere mods… tot ${max__number} tekens.`)
};

const pl_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Awarie, konflikty z innymi modami… do ${max__number} znaków.`)
};

const pt_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`Travamentos, conflitos com outros mods… até ${max__number} caracteres.`)
};

const ru_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`Вылеты, конфликты с другими модами… до ${max__number} символов.`)
};

const sv_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`Krascher, konflikter med andra moddar… upp till ${max__number} tecken.`)
};

const tr_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`Çökmeler, diğer modlarla çakışmalar… en fazla ${max__number} karakter.`)
};

const zh_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`崩溃、与其他模组冲突……最多 ${max__number} 个字符。`)
};

const ja_me_report_note_hint = /** @type {(inputs: Me_Report_Note_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`クラッシュ、他のMODとの競合など。最大 ${max__number} 文字。`)
};

/**
* | output |
* | --- |
* | "Crashes, conflicts with other mods… up to {max__number} characters." |
*
* @param {Me_Report_Note_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_note_hint = /** @type {((inputs: Me_Report_Note_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Note_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_note_hint(inputs)
	if (locale === "de") return de_me_report_note_hint(inputs)
	if (locale === "fr") return fr_me_report_note_hint(inputs)
	if (locale === "it") return it_me_report_note_hint(inputs)
	if (locale === "nl") return nl_me_report_note_hint(inputs)
	if (locale === "pl") return pl_me_report_note_hint(inputs)
	if (locale === "pt") return pt_me_report_note_hint(inputs)
	if (locale === "ru") return ru_me_report_note_hint(inputs)
	if (locale === "sv") return sv_me_report_note_hint(inputs)
	if (locale === "tr") return tr_me_report_note_hint(inputs)
	if (locale === "zh") return zh_me_report_note_hint(inputs)
	if (locale === "ja") return ja_me_report_note_hint(inputs)
	return en_me_report_note_hint(inputs)
});
