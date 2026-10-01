/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ shown: NonNullable<unknown>, total: NonNullable<unknown> }} Logs_Lines_ShownInputs */

const en_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Showing ${i?.shown} of ${i?.total} lines`)
};

const es_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrando ${i?.shown} de ${i?.total} líneas`)
};

const de_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.shown} von ${i?.total} Zeilen angezeigt`)
};

const fr_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.shown} lignes sur ${i?.total} affichées`)
};

const it_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrate ${i?.shown} righe su ${i?.total}`)
};

const nl_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.shown} van ${i?.total} regels getoond`)
};

const pl_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pokazano ${i?.shown} z ${i?.total} wierszy`)
};

const pt_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A mostrar ${i?.shown} de ${i?.total} linhas`)
};

const ru_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Показано строк: ${i?.shown} из ${i?.total}`)
};

const sv_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visar ${i?.shown} av ${i?.total} rader`)
};

const tr_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} satırdan ${i?.shown} tanesi gösteriliyor`)
};

const zh_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`显示 ${i?.total} 行中的 ${i?.shown} 行`)
};

const ja_logs_lines_shown = /** @type {(inputs: Logs_Lines_ShownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 行中 ${i?.shown} 行を表示`)
};

/**
* | output |
* | --- |
* | "Showing {shown} of {total} lines" |
*
* @param {Logs_Lines_ShownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_lines_shown = /** @type {((inputs: Logs_Lines_ShownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Lines_ShownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_lines_shown(inputs)
	if (locale === "de") return de_logs_lines_shown(inputs)
	if (locale === "fr") return fr_logs_lines_shown(inputs)
	if (locale === "it") return it_logs_lines_shown(inputs)
	if (locale === "nl") return nl_logs_lines_shown(inputs)
	if (locale === "pl") return pl_logs_lines_shown(inputs)
	if (locale === "pt") return pt_logs_lines_shown(inputs)
	if (locale === "ru") return ru_logs_lines_shown(inputs)
	if (locale === "sv") return sv_logs_lines_shown(inputs)
	if (locale === "tr") return tr_logs_lines_shown(inputs)
	if (locale === "zh") return zh_logs_lines_shown(inputs)
	if (locale === "ja") return ja_logs_lines_shown(inputs)
	return en_logs_lines_shown(inputs)
});
